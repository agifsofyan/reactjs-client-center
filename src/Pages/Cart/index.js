import React , { useEffect , useState } from 'react'

// MODULE
// import Cookies from 'js-cookie';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


// COMPONENT 
import { List , FirstContent, SecondContent , ThirdContent , Menu } from '../../Components/Card'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// CART
import './style.css'

function Cart () {

    // CALL HISTORY
    const history = useHistory()

    //  LOCAL STATE
    const [cart,setCart] = useState([])
    const [coupons,setCoupons] = useState(null)
    const [selectedCoupon,setSelectedCoupon] = useState(null)
    const [selectedAddress,setSelectedAddress] = useState(null)
    const [address,setAddress] = useState(null)

    // PRICE
    const [price,setPrice] = useState(0)

    // LOCAL STATE CHECK ECOMMERCE
    const [isEcommerce,setIsEcommerce] = useState(false)

    // LOCAL STATE MENU
    const [showMenu,setShowMenu] = useState(false)

    // FOR CHILDREN STATE
    const [loadingOrder,setLoadingOrder] = useState(false)

    useEffect(()=>{

        let priceNum = 0

        // GET CART
        axios(({
            method : "GET",
            url : `${SWAGGER_URL}/carts/list`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }))
        .then(({data})=>{
            setCart(data.data.items)
            console.log(data.data.items , ' <<<< CART ')
            let arr = data.data.items
            // ecommerce
            arr.forEach(e=>{
                let check = e.product_info.type
                if (check === 'ecommerce') {
                    setIsEcommerce(true)
                }
                if (e.product_info.sale_price) {
                    priceNum += e.product_info.sale_price
                }else {
                    priceNum += e.product_info.price
                }
                setPrice(priceNum)
            })
        })
        .catch(err=>{
            console.log(err ,' << ERROR ')
        })

        // GET COUPONS
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/coupons`
        })
        .then(({data})=>{
            setCoupons(data.data )
            setSelectedCoupon(data.data[0])
        })
        .catch(err=>{
            console.log(err ,  ' <<<< ERROR')
        })

        // GET PROFILE
        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/users/profile`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data , ' <<, fix <><>><')
            setAddress(data.data.address)
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERORR')
        })

    },[])

    useEffect(()=>{
        console.log(selectedAddress , ' <<< SELECTED ADDRESS')
    },[selectedAddress])

    let handleObjCart = (arr) => {
        let result = []
        arr.forEach(e=>{
            let objR = { product_id : e.product_info._id , 
                         utm : e.utm ,
                         quantity : e.quantity
                       }
            result.push(objR)
        })
        return result
    }

    let handleOrder = () => {
        console.log(selectedCoupon , ' <<< VALUE')
        setLoadingOrder(true)
        let resultCart = handleObjCart(cart)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/orders/store`,
            data : {
                items : resultCart,
                coupon : {
                    code : selectedCoupon.code
                },
                shipment : {
                    address_id : selectedAddress && isEcommerce ? selectedAddress._id : null,
                    price :  price   
                }
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            history.push('/check-out')
            setLoadingOrder(false)
        })
        .catch(err=>{
            setLoadingOrder(false)
            console.log(err.response , ' <<< ERROR DI ORDER >>>')
        })
    }

    return (
        <div className="cart-container-06">
            <h1 className="cwr-99-1 cart-06-title1">User Data</h1>
            <FirstContent/>
            <div className="cart-06-1 cart-06-c2">

            </div>
            <h2 className="cwr-99-1 cart-06-title1">
                Enrolled Course
            </h2>
            {
                cart && cart.length > 0 ?
                <List
                    setCart={setCart}
                    cart={cart}
                /> :
                <div style={{marginTop : 10}}>
                    Anda Belum Memiliki Cart
                </div>
            }
            {
                isEcommerce &&
                <div className="cart-06-1 cart-06-c2">

                </div>
            }
            {
                address && isEcommerce &&
                <Menu
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                    address={address}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                />
            }
             {
                   selectedAddress && isEcommerce &&
                    <div className="cart-06-address">
                        
                            <span>John Doe</span>
                            <span style={{marginTop : 10}}>0827267272</span>
                            <div style={{marginTop : 10}}>
                               {selectedAddress.detail_address}
                            </div>
                    </div>
            }
            {
                isEcommerce &&
                <div className="cart-06-1 cart-06-c2" style={{marginTop : 27}}>
                </div>
            }
            <SecondContent/>
            {
                coupons && selectedCoupon &&
                <ThirdContent 
                    selectedCoupon={selectedCoupon} 
                    setSelectedCoupon={setSelectedCoupon}
                    coupons={coupons}
                    handleOrder={handleOrder}
                    loadingOrder={loadingOrder}
                />
            }

            {/* STYLING DI src/Pages/ProductDetail/style.css */}
            <div 
                // className="product-detail-c14-fixed"
                className={
                    // topScroll > 440 ? "product-detail-c14-fixed" : "product-detail-c14"
                    "product-detail-c14"
                }
            >
                <div className="product-detail-c14-fc">
                    <span>Rp 210.000</span>
                    <div>
                        Rp. 1.900.000
                    </div>
                </div>
                <div className="product-detail-c14-sc">
                    <div style={{fontSize : 22}}>
                        LANJUT
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Cart