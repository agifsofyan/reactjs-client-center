import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'


// COMPONENT
import {
    Payment
} from '../../Components/CheckOut'
import Loader from '../../Components/Loader'

// IMAGE
import Logo from '../../Assets/Images/failed.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLING ../PaymentSuccess/style.css

function PaymentSuccess () {

    // CALL HISTORY
    const history = useHistory()

    // LOCAL STATE DATA PAYMENT
    const [payment,setPayment] = useState(null)

    // LOCAL STATE DATA ORDER
    const [order,setOrder] = useState(null)

    // LOCAL STATE RADIO BUTTON PAYMENT
    const [selectedPayment,setSelectedPayment] = useState(null)

    // LOCAL STATE LOADER
    const [loading,setLoading] = useState(false)

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    const [diskon,setDiskon] = useState(0)
    
    // UNIQUE NUMBER
    const [unique,setUnique] = useState(null)

    // SHIPMENT
    const [shipmentPrice,setShipmentPrice] = useState(0)

    useEffect(()=>{

        let priceNum = 0
        let saleNum = 0

        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/payments/method`
        })
        .then(({data})=>{
            setPayment(data.data)
            // console.log(data.data , ' <<<< DATA PAYMENT')
        })
        .catch(err=>{
            console.log(err , ' << ERROR PAYMENT')
        })

        // GET ORDER
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/orders/self`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data[0] , ' <<<<<< 77767667676')
            let shipment = data.data[0].shipment
            if (shipment) {
                if (shipment.price && typeof shipment.price === 'number') {
                    console.log(shipment.price , ' <<<<<<<<<<<<<<<<<<<<<<<<<<<< DARI API SHIPMENT')
                    setShipmentPrice(shipment.price)
                } 
            }
            console.log(data.data[0] , ' <<< ORDER VALUE')
            let arr = data.data[0].items
            console.log(arr.length , ' <<<< LENGTG ****&*&')
            let bumpArr = []
            let unique = data.data[0].unique_number
            console.log(unique ,  ' <<<< UNIQUE')
            // ecommerce
            arr.forEach(e=>{
                // if (e.product_info.type === 'ecommerce') {
                //     priceNum += (e.product_info.price * e.quantity)
                //     saleNum += (e.product_info.sale_price * e.quantity)
                // }else {
                //     priceNum += (e.product_info.price )
                //     saleNum += (e.product_info.sale_price )
                // }
                priceNum += (e.product_info.price * e.quantity)
                saleNum += (e.product_info.sale_price * e.quantity)
                // saleNum += e.bump_price
                // console.log(e.product_info.sale_price , ' <<<<<  0900909PRICE >>>>>>')
                console.log(e ,' <<<< E >>>> XXXX')
                if (e && e.product_info && e.product_info.bump && e.is_bump) {
                    bumpArr.push(...e.product_info.bump)
                    console.log(e.product_info.bump[0].bump_price ,' +_+__________________________+')
                    saleNum += e.product_info.bump[0].bump_price
                }
            })
            
            console.log(priceNum , ' <<<< PRICE NUM')
            console.log(saleNum , ' <<<< SALE NUM 09090909')
            setPrice(priceNum)
            setSale(saleNum)
            setDiskon(priceNum - saleNum)
            setOrder(data.data[0])
            setUnique(unique)
        })
        .catch(err=>{
            console.log(err.response ,  ' <<< ERROR GET ORDER LIST')
        })

    },[])

    useEffect(()=>{
        console.log(selectedPayment , '  <<< SELECTED PAYMENT 999)()())()()(')
    },[selectedPayment])

    let handleBank = (total_price) => {
        let id = order._id
        let unique = null
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/orders/unique`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            data : {
                order_id : id
            }
        })
        .then(({data})=>{
            unique = data.data
            return axios({
                        method : 'POST',
                        url : `${SWAGGER_URL}/orders/${order._id}/pay`,
                        data : {
                            payment : {
                                method : selectedPayment._id
                            },
                            total_price ,
                            unique_number : unique 
                        },
                        headers : {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
        })
        .then(({data})=>{
            setLoading(false)
            let type = data.data.payment.method.info;
            let total = data.data.total_price
            let id = data.data._id
            console.log(id , ' <<<< ID FIXXXXXXXX')
            console.log(type , ' <<< VALUE TYPE')
            if (type === "Bank-Transfer") {
                if (typeof window !== "undefined") {
                    if (window.fbq != null) { 
                      window.fbq('track', 'Purchase', {currency: "IDR", value: total });
                    }
                }
                history.push('/transfer-confirm')
            }
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<<<< ERROR')
        })
    }

    let handleDana = (total_price) => {
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/orders/${order._id}/pay`,
            data : {
                payment : {
                    method : selectedPayment._id
                },
                total_price  ,
                // unique_number : unique 
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setLoading(false)
            console.log(data.data , ' <<< DANA HERE )())()()()(')
            window.open(data.data, '_blank')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<< should error')
        })
    }

    let handlePay = () => {
        if (selectedPayment) {
            setLoading(true)
            let total_price = (sale - renderCoupon() + unique + shipmentPrice)
            console.log(total_price , ' <<<< VALUE TOTAL PRICE HERE 89') 
            if (selectedPayment.info === "Bank-Transfer") {
                handleBank(total_price)
            }else if (selectedPayment.info === "EWallet" && selectedPayment.name === "DANA INDONESIA") {
                console.log('HERE <><><><')
                handleDana(total_price)
            }
        }else {
            alert('SILAHKAN PILIH METODE PEMBAYARAN')
        }
    }

    let renderCoupon = () => {
        if (order &&order.coupon) {
            let e1 = order.coupon
            let { value , max_discount } = e1
            // console.log(order.coupon , ' <<<<< ORDER COUPON CK &&&&')
            // console.log(sale , ' <<< EL DI CHECKOUT')
            let disk = Math.ceil((value / 100) * sale)
            if (disk > max_discount ) {
                disk = max_discount
            }
            return disk
        }else {
            return 0
        }
    }


    return (
        <div className="payment-09-container">
            <h1>Oops</h1>
            <img
                src={Logo}
                alt="success-logo"
            />
            <h2>
                Pembayaran Anda Gagal
            </h2>
            <h3>
                Maaf pembayaran anda gagal, silahkan coba lagi.
                Silahkan pilih metode pembayaran yang diinginkan :
            </h3>
            <div style={{marginTop : 30}}>

            </div>
            {
                payment &&
                <Payment
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                    payment={payment}
                />
            }
             <button 
                className="order-08-button"
                onClick={e=>handlePay()}
                // onClick={e=>window.open('http://stackoverflow.com', '_blank')}
            > 
                {
                    loading ?
                    <Loader/>:
                    "BAYAR SEKARANG"
                }
            </button>
            <div
                style={{width : "82%",marginTop : 20,fontSize : 18,fontWeight : 20,textAlign : "center"}}
            >
                Segera Hadir Cara Pembayaran Dengan DANA Indonesia, OVO, Link Aja, Virtual Account dan Kartu Kredit
            </div>
            <div style={{marginBottom : 30}}>

            </div>
        </div>
    )

}

export default PaymentSuccess