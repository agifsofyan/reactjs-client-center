import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// IMAGES 
import prImg from '../../Assets/Images/product.png'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

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
            console.log(arr1 ,' <<< DATA FIX >>> HISTORY')
            setData(arr1)
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERRR')
        })
    },[])

    let renderItems = (data) => {
        return data.map((e,index)=>{
            return (
                <div 
                    className="s4"
                    key={index}
                >
                    <img
                        src={prImg}
                        alt="product-order"
                    />

                    <div>
                        <div className="t1">
                            {e.product_info.name}
                        </div>
                        <div className="t2">
                            Total Pembayaran
                        </div>
                        <div className="t3">
                            Rp. 1.200.000
                        </div>
                    </div>

                </div>
            )
        })
    }

    let renderData = () => {
        return data.map((e,index)=>{
            return e.items.map((e2,index)=>{

                return (
                    <div 
                        className="c2" 
                        style={{marginTop : index === 0 && 29}}
                        key={index}
                    >
                        <div 
                            className="s1"
                            style={{
                                backgroundColor : e.status === "UNPAID" && "#FFDEDE"
                            }}
                        >
                            {
                                e.status === 'PENDING' ?
                                "Transaksi Ditunda" :
                                "Transaksi Belum Dibayar"
                            }
                            
                        </div>
    
                        <div className="s2">
                            {e.create_date && e.create_date.split('T')[0]}
                        </div>
                        
                        <p className="s3">
                            {e.invoice}
                        </p>
                        <div 
                            className="s4"
                            key={index}
                        >
                            <img
                                src={prImg}
                                alt="product-order"
                            />
    
                            <div>
                                <div className="t1">
                                {e2.product_info.name}
                                </div>
                                <div className="t2">
                                    Total Pembayaran
                                </div>
                                <div className="t3">
                                    {moneyConvert(e2.sub_price.toString(),"Rp. ")}
                                </div>
                            </div>
    
                        </div>
                        {/* {renderItems(e.items)} */}
    
                        <button className="s5"> 
                            Baca
                        </button>
    
                    </div>
                )
            })
        })
    }

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
            {
                data && renderData()
            }

        </div>
    )

}

export default OrderHistory