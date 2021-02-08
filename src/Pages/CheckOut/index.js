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

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    const [diskon,setDiskon] = useState(0)

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
            console.log(data.data[0] , ' DATA ORDER')
            let arr = data.data[0].items
            let bumpArr = []
            // ecommerce
            arr.forEach(e=>{
                priceNum += e.product_info.price
                saleNum += e.product_info.sale_price
                if (e && e.product_info && e.product_info.bump) {
                    bumpArr.push(...e.product_info.bump)
                }
                // setBump(bumpArr)
                // setPrice(priceNum)
                // setSale(saleNum)
                // e = {...e,isChecked : true}
            })
            setPrice(priceNum)
            setSale(saleNum)
            setDiskon(priceNum - saleNum)

            setOrder(data.data[0])
        })
        .catch(err=>{
            console.log(err ,  ' <<< ERROR GET ORDER LIST')
        })

    },[])

    useEffect(()=>{
        console.log(selectedPayment , '  <<< SELECTED PAYMENT')
    },[selectedPayment])

    let handlePay = () => {
        if (selectedPayment) {
            setLoading(true)
            axios({
                method : 'POST',
                url : `${SWAGGER_URL}/orders/${order._id}/pay`,
                data : {
                    payment : {
                        method : selectedPayment._id
                    }
                },
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(({data})=>{
                setLoading(false)
                let type = data.data.payment.method.info;
                let total = data.data.total_price
                console.log(total ,  ' <<< TOTAL')
                if (type === "Bank-Transfer") {
                    console.log('TRUEE')
                    if (typeof window !== "undefined") {
                        if (window.fbq != null) { 
                          window.fbq('track', 'Purchase', {currency: "IDR", value: total });
                        }
                    }
                    history.push('/transfer-confirm')
                }
                console.log(data.data.payment.method.info , '  <<<< KUDU BANK TRANSFER')
                console.log(data , )
            })
            .catch(err=>{
                setLoading(false)
                console.log(err.response , ' << ERROR PAY')
            })
        }else {
            alert('SILAHKAN PILIH METODE PEMBAYARAN')
        }
    }

    return (
        <div className="order-container-08" style={{width : "100%",backgroundColor : "white"}}>
            <h1>Review Pesanan</h1>
            {
                order &&
                <List
                    order={order}
                />
            }
            <div className="order-08-price" style={{marginTop : 18}}>
                <h5>
                    Harga
                </h5>
                <h6>
                    {price && moneyConvert(price ? price.toString() : "" ,"Rp. ")}
                </h6>
            </div>
            <div className="order-08-price">
                <h5>
                    Diskon
                </h5>
                <h6>
                    {diskon && moneyConvert(diskon ? diskon.toString() : "" ,"Rp. ")}
                </h6>
            </div>
            <div className="order-08-price">
                <h5>
                    Total Harga
                </h5>
                <h6>
                    {sale && moneyConvert(sale ? sale.toString() : "" ,"Rp. ")}
                </h6>
            </div>
            <hr className="order-08-line"/>
            <div className="order-08-t2">
                Payment Method
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
            > 
                {
                    loading ?
                    <Loader/>:
                    "BAYAR SEKARANG"
                }
            </button>
        </div>
    )

}

export default Order;