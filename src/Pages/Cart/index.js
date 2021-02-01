import React , { useEffect , useState } from 'react'

// MODULE
// import Cookies from 'js-cookie';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


// COMPONENT 
import { List , FirstContent, SecondContent , ThirdContent , Menu } from '../../Components/Card'
import Loader from '../../Components/Loader'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// CART
import './style.css'

function Cart () {

    // GLOBAL STATE
    const topScroll = useSelector(state=>state.user.top)

    // CALL HISTORY
    const history = useHistory()

    //  LOCAL STATE
    const [cart,setCart] = useState([])
    const [coupons,setCoupons] = useState(null)
    const [selectedCoupon,setSelectedCoupon] = useState(null)
    const [selectedAddress,setSelectedAddress] = useState(null)
    const [address,setAddress] = useState(null)
    const [bump,setBump] = useState(null)
    const [user,setUser] = useState(null)

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    // const []

    // LOCAL STATE CHECK ECOMMERCE
    const [isEcommerce,setIsEcommerce] = useState(false)

    // LOCAL STATE MENU
    const [showMenu,setShowMenu] = useState(false)

    // FOR CHILDREN STATE
    const [loadingOrder,setLoadingOrder] = useState(false)

    useEffect(()=>{

        let priceNum = 0
        let saleNum = 0

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
            let bumpArr = []
            // ecommerce
            arr.forEach(e=>{
                let check = e.product_info.type
                if (check === 'ecommerce') {
                    setIsEcommerce(true)
                }
                // if (e.product_info.sale_price) {
                //     priceNum += e.product_info.sale_price
                // }else {
                //     priceNum += e.product_info.price
                // }
                priceNum += e.product_info.price
                saleNum += e.product_info.sale_price
                bumpArr.push(...e.product_info.bump)
                setBump(bumpArr)
                setPrice(priceNum)
                setSale(saleNum)
            })
            console.log(bumpArr , ' <<< VALUE BUMP')
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
            console.log(data , ' <<<< COUPON')
            // setSelectedCoupon(data.data[0])
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
            setAddress(data.data.address)
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERORR')
        })

        // GET ME
        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/users/me`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            if (data && data.data) {
                console.log(data.data.user , ' <<, fix <><>>< pppp')
                setUser(data.data.user)
            } 
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
            <FirstContent
                user={user}
            />
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
            {
                bump &&
                bump.map((e,index)=>{
                    return (
                        <SecondContent
                            bump={e}
                            index={index}
                        />
                    )
                })
            }
            {
                coupons  && cart.length > 0 &&
                <ThirdContent 
                    selectedCoupon={selectedCoupon} 
                    setSelectedCoupon={setSelectedCoupon}
                    coupons={coupons}
                    handleOrder={handleOrder}
                    loadingOrder={loadingOrder}
                    price={price}
                    cart={cart}
                    sale={sale}
                    setSale={setSale}
                />
            }

            {/* STYLING DI src/Pages/ProductDetail/style.css */}
            {
                cart.length > 0 &&
                <div 
                    // className="product-detail-c14-fixed"
                    className={
                        topScroll > 200 ? "product-detail-c14-fixed" : "product-detail-c14"
                        // "product-detail-c14-fixed"
                    }
                >
                    <div className="product-detail-c14-fc">
                        <span>{ sale && moneyConvert(sale.toString(),"Rp. ")}</span>
                        <div>
                            { price && moneyConvert(price.toString(),"Rp. ") }
                        </div>
                    </div>
                    <div className="product-detail-c14-sc" onClick={e=>handleOrder(e)}>
                        <div style={{fontSize : 22}}>
                            {
                                loadingOrder ?
                                <Loader/> :
                                "LANJUT"
                            }
                        </div>
                    </div>
                </div>
            }

        </div>
    )

}

export default Cart