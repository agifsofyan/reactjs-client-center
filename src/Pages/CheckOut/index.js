import React , { useState , useEffect } from 'react'

// MODULE 
import axios from 'axios'

// COMPONENT
import {
    List,
    Payment
} from '../../Components/CheckOut'
import Loader from '../../Components/Loader'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Order () {

    // LOCAL STATE DATA PAYMENT
    const [payment,setPayment] = useState(null)

    // LOCAL STATE DATA ORDER
    const [order,setOrder] = useState(null)

    // LOCAL STATE RADIO BUTTON PAYMENT
    const [selectedPayment,setSelectedPayment] = useState(null)

    // LOCAL STATE LOADER
    const [loading,setLoading] = useState(false)

    useEffect(()=>{

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
            console.log(data.data[0] , '   HMMM <><><><><><><><><>>')
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
                console.log(data , '  <<<< SUKSES YAHOOOO')
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
                    Rp. 210.000
                </h6>
            </div>
            <div className="order-08-price">
                <h5>
                    Diskon
                </h5>
                <h6>
                    Rp. 210.000
                </h6>
            </div>
            <div className="order-08-price">
                <h5>
                    Total Harga
                </h5>
                <h6>
                    Rp. 210.000
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