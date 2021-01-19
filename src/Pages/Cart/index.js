import React , { useEffect , useState } from 'react'

// MODULE
// import Cookies from 'js-cookie';
import axios from 'axios'


// COMPONENT 
import { List , FirstContent, SecondContent , ThirdContent } from '../../Components/Card'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// CART
import './style.css'

function Cart () {

    //  LOCAL STATE
    const [cart,setCart] = useState([])

    useEffect(()=>{
        axios(({
            method : "GET",
            url : `${SWAGGER_URL}/carts/list`,
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }))
        .then(({data})=>{
            setCart(data.data.items)
            console.log(data.data.items , ' <<< VALUE CART')
        })
        .catch(err=>{
            console.log(err ,' << ERROR ')
        })
    },[])

    return (
        <div className="cart-container-06">
            <h1 className="cart-06-1 cart-06-title1">User Data</h1>
            <FirstContent/>
            <div className="cwr-99-1 cart-06-c2">

            </div>
            <h2 className="cart-06-1 cart-06-title1">
                Enrolled Course
            </h2>
            {
                cart && cart.length > 0 ?
                <List
                    cart={cart}
                /> :
                <div style={{marginTop : 10}}>
                    Anda Belum Memiliki Cart
                </div>
            }
            <div className="cwr-99-1 cart-06-c2">

            </div>
            <SecondContent/>
            <ThirdContent/>
        </div>
    )

}

export default Cart