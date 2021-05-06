import React , { useState , useEffect } from 'react'

// MODULE 
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import {
    List,
    Payment
} from '../../Components/CheckOut'
import Loader from '../../Components/Loader'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// STYLE
import './style.css'

function Order () {

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

    // LOCAL STATE NOTIFICATIONS
    const [notifTa,setNotifTa] = useState(false)

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    const [diskon,setDiskon] = useState(0)
    
    // UNIQUE NUMBER
    const [unique,setUnique] = useState(null)

    // SHIPMENT
    const [shipmentPrice,setShipmentPrice] = useState(0)

    let handleSaleEmpty = (sale,price) => {
        if (sale > 0) return sale
        else return price
    }

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
                saleNum += (handleSaleEmpty(e.product_info.sale_price , e.product_info.price) * e.quantity)
                
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
            console.log(data.data[0] , ' <<<< VALUE ORDER SEKARANG HERE LOL &&*** 88( (**(* 998')
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
            // console.log(id , ' <<<< ID FIXXXXXXXX')
            // console.log(type , ' <<< VALUE TYPE')
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
            console.log(err.response , ' <<<<< ERROR BANK HERE LOL WKWKWKWKWKWKWK')
            let number = 0
            let message = ""
            if (err.response) {
                if (err.response.data) {
                    number = err.response.data.statusCode
                    message = err.response.data.message
                }
            }
            console.log(err.response , ' <<< should error DANAN HERE')
            console.log(number ,  ' <<< NUMBER')
            console.log(message , ' << MESSAGE')
            if (number === 400 && message === "unique number already exists") {
                // alert('Anda telah memilih metode pembayaran')
                setNotifTa(true)
            }else {
                history.push('/payments/failed')
            }
        })
    }

    let handleDana = (total_price) => {
        // console.log(typeof total_price , ' <<<< TYPE DATA HERE')
        // console.log(total_price , ' <<< VALUE <<<<<<')
        // console.log(selectedPayment , ' <<<< SELECTED PAYMENY')
        // console.log({
        //     payment : {
        //         method : selectedPayment._id
        //     },
        //     total_price,
        // } ,  '  <<<<< DATA (*(*(*(*(*')
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/orders/${order._id}/pay`,
            data : {
                payment : {
                    method : selectedPayment._id
                },
                total_price,
                // unique_number : unique 
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            
            console.log(data.data , ' <<< SUCCESS >>> )()()()()()(')
            let res = data.data;
            window.open(res.payment.invoice_url,"_self")
            console.log('###################################################################')
        })
        .catch(err=>{
            console.log( {
                payment : {
                    method : selectedPayment._id
                },
                total_price,
                // unique_number : unique 
            } ,  ' <<<<<<<<<< BODY ^^^^^ *** ((( ')
            setLoading(false)
            // if (err.)
            let number = 0
            let message = ""
            if (err.response) {
                if (err.response.data) {
                    number = err.response.data.statusCode
                    message = err.response.data.message
                }
            }
            console.log(err.response , ' <<< should error DANAN HERE')
            console.log(number ,  ' <<< NUMBER')
            console.log(message , ' << MESSAGE')
            if (number === 400 && message === "you have already chosen a payment method") {
                // alert('Anda telah memilih metode pembayaran')
                setNotifTa(true)
            }else {
                history.push('/payments/failed')
            }
            setLoading(false)
        })
    }

    let handlePay = () => {
        if (selectedPayment) {
            setLoading(true)
            let total_price = (sale - renderCoupon() + shipmentPrice)
            // console.log(total_price , ' <<<< VALUE TOTAL PRICE HERE 89') 
            if (selectedPayment.info === "Bank-Transfer") {
                handleBank(total_price)
            }else if (selectedPayment.info === "EWallet" && selectedPayment.name === "DANA INDONESIA") {
                // console.log('HERE <><><><')
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
        <div className="order-container-08" style={{width : "100%",backgroundColor : "white"}}>
            <h1>Review Pesanan</h1>
            {
                order &&
                <List
                    order={order}
                    handleSaleEmpty={handleSaleEmpty}
                />
            }
            <div className="order-08-price" style={{marginTop : 18}}>
                <h5>
                    Total
                </h5>
                <h6>
                    {sale && moneyConvert(sale ? sale.toString() : "" ,"Rp. ")}
                </h6>
            </div>
            {
                order && order.coupon &&
                <div className="order-08-price">
                    <h5 style={{color : "#11870F"}}>
                        {'Potongan Kupon "' +order.coupon.name + '"'}
                    </h5>
                    <h6 style={{color : "#11870F"}}>
                        {order && "( - ) " + moneyConvert(renderCoupon() ? renderCoupon().toString() : "" ,"Rp. ")}
                    </h6>
                </div>
            }
            {
                order && shipmentPrice > 0 &&
                <div className="order-08-price">
                    <h5>
                        Ongkir
                    </h5>
                    <h6>
                        {shipmentPrice && "( + ) " + moneyConvert( shipmentPrice.toString() , "Rp. " )}
                    </h6>
                </div>
            }
            {/* {
                order &&
                <div className="order-08-price">
                    <h5>
                        Kode Unik
                    </h5>
                    <h6>
                        {unique && "( + ) " + moneyConvert( unique.toString() , "Rp. " )}
                    </h6>
                </div>
            } */}
            <div className="order-08-price">
                <h5 style={{color : "#FF4500"}}>
                    Total Akhir
                </h5>
                <h6 style={{color : "#FF4500"}}>
                    {
                        sale && 
                        moneyConvert(sale ? ( sale - renderCoupon() + shipmentPrice ).toString() : "" ,"Rp. ")
                    }
                </h6>
            </div>
            <hr className="order-08-line"/>
            <div className="order-08-t2">
                Pilih Cara Pembayaran Anda
            </div>
            {
                payment &&
                <Payment
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                    payment={payment}
                />
            }
            {
                notifTa &&
                <div className="order-08-t3">
                    Anda telah memilih metode pembayaran
                </div>
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
                Segera Hadir Cara Pembayaran Dengan OVO, Link Aja, Virtual Account dan Kartu Kredit
            </div>
        </div>
    )

}

export default Order;