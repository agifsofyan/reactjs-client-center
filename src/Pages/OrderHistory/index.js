import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function OrderHistory () {

    // LOCAL STATE DATA ORDER
    const [data,setData] = useState(null)

    useEffect(()=>{
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
            let arr1 = data.data
            arr1 = arr1.filter(e=>e.status === 'PENDING' || e.status === 'UNPAID')
            setData(arr1)
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERRR')
        })
    },[])

    return (
        <div className="order-11-container">
            <h1>Order History</h1>
            <div className="hr">

            </div>

            <div className="c1">
                <div className="btn">
                    LUNAS
                </div>
                <div className="btn">
                    BELUM LUNAS
                </div>
                <div className="btn">
                    CICILAN
                </div>
            </div>

            <div className="hr" style={{margin : "26px 0 0 0"}}>

            </div>

            <div className="c2" style={{marginTop : 25}}>

                <div className="s1">
                    Transaksi Ditunda
                </div>

                <div className="s2">
                    2020-10-01
                </div>
                
                <p className="order-11-container-c2-s3">
                    051020SKU77761057982781120109561dfdfddfdfdfdfdfdfdfsdfsdfdsfdsfsdfdsfdssfdsfdsfdsfsdfsdfdsafsdafdsfdsfdsfsfsdfsd
                </p>

                <div className="s4">

                </div>

            </div>

        </div>
    )

}

export default OrderHistory