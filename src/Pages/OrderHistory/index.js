import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENTS
import Footer from '../../Components/LMSFooter'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// IMAGES 
import prImg from '../../Assets/Images/product.png'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// STYLE
import './style.css'

function OrderHistory () {

    // HISTORY
    const history = useHistory()

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
            // arr1 = arr1.filter(e=>e.status === 'PENDING' || e.status === 'UNPAID')
            console.log(arr1 ,' <<< DATA FIX >>> HISTORY')
            setData(arr1)
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERRR')
        })
    },[])

    let renderStatus = (status) => {
        if (status === 'UNPAID') {
            return "Transaksi Belum Dibayar"
        }
        else if (status === "PAID") {
            return "Lunas"
        }else if (status === "PENDING") {
            return "Transaksi Ditunda"
        }else if (status === "EXPIRED") {
            return "Kadaluarsa"
        }
    }

    let renderStatus2 = (status) => {
        if (status === 'UNPAID') {
            return "Bayar"
        }
        else if (status === "PAID") {
            return "Baca"
        }else if (status === "PENDING") {
            return "Bayar"
        }else if (status === "EXPIRED") {
            return "Lihat"
        }
    }

    let renderColor = (status) => {
        if (status === 'UNPAID') {
            return "#FFDEDE"
        }
        else if (status === "PAID") {
            return "#4BB543"
        }else if (status === "PENDING") {
            return null
        }else if (status === "EXPIRED") {
            return null
        }
    }

    let formatDate = (date) => {
        let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        let months = ['Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        
        let day = new Date(date).getDay()
        let date2 = new Date (date).getDate()
        let month = new Date(date).getMonth()
        let year = new Date(date).getFullYear()

        return `${days[day]}, ${(date2 <= 9 ? "0" + date2 : date2)} ${months[month]} ${year}` 

    }

    let renderRoute = (status,slug,id) => {
        if (status === 'UNPAID') {
            return `/check-out/${id}`
        }
        else if (status === "PAID") {
            return `/lms-home/${slug}`
        }else if (status === "PENDING") {
            return `/check-out/${id}`
        }else if (status === "EXPIRED") {
            return "/product-list"
        }
        console.log(status,slug)
        // console.log(renderRoute(status,slug) , ' <<< CONSOLE.LOG HERE')
    }

    let handleClick = (status,slug,id,data) => {
        if (status === 'UNPAID' && data.payment) {
            if (data.payment.method) {
                if (data.payment.method.name === "DANA INDONESIA") {
                    window.open(data.payment.invoice_url,"_self")
                }else if (data.payment.method.name === "BCA TRANSFER" || data.payment.method.name === "BNI TRANSFER") {
                    history.push(`/transfer-confirm/${id}`)
                }
            }
        }else {
            history.push(renderRoute(status,slug,id))
        }
    }

    let renderData = () => {
        return data.map((e,index)=>{
            return e.items.map((e2,index)=>{
                console.log(e2 , ' << STATUS HERE ****** MOGA ADA SLUG')
                console.log(e , ' <<<< FIND PAYMENT METHOD')
                return (
                    <div 
                        className="c2" 
                        style={{marginTop : index === 0 && 29}}
                        key={index}
                    >
                        <div 
                            className="s1"
                            style={{
                                backgroundColor : renderColor(e.status),
                                color : e.status === "PAID" && "white"
                            }}
                        >
                            {/* {
                                e.status === 'PENDING' ?
                                "Transaksi Ditunda" :
                                "Transaksi Belum Dibayar"
                            } */}
                            {renderStatus(e.status)}
                            
                        </div>
    
                        <div className="s2">
                            {/* {e.create_date && e.create_date.split('T')[0]} */}
                            {formatDate(e.create_date)}
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
    
                        <button 
                            // onClick={()=> history.push(renderRoute(e.status ,e2.product_info.slug,e._id))}
                            onClick={()=> handleClick(e.status ,e2.product_info.slug,e._id,e) }
                            className="s5"
                        > 
                            {renderStatus2(e.status)}
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
                    LANGGANAN
                </div>
            </div>

            <div className="hr" style={{margin : "26px 0 0 0"}}>

            </div>
            {
                data && renderData()
            }

            <div style={{marginBottom : 65}}>

            </div>

            <Footer/>

        </div>
    )

}

export default OrderHistory