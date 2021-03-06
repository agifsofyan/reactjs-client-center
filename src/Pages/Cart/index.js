import React , { useEffect , useState } from 'react'

// MODULE
// import Cookies from 'js-cookie';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


// COMPONENT 
import { List , FirstContent, SecondContent , ThirdContent , Menu , InputAddress } from '../../Components/Card'
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
    const [address,setAddress] = useState([])
    const [user,setUser] = useState(null)
    
    // BUMP
    const [bump,setBump] = useState(null)

    // CEK GET DATA
    const [isData,setIsData] = useState(false)

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    const [saleBef,setSaleBef] = useState(0)
    // const []

    // LOCAL STATE CHECK ECOMMERCE
    const [isEcommerce,setIsEcommerce] = useState(false)

    // LOCAL STATE MENU
    const [showMenu,setShowMenu] = useState(false)

    // FOR CHILDREN STATE
    const [loadingOrder,setLoadingOrder] = useState(false)

    // PRICE SHIPMENT
    const [shipmentPrice,setShipmentPrice] = useState(0)

    // DISKON
    const [minDis,setMinDisk] = useState(null)

    // LOCAL STATE CHECK VALIDATION INPUT ADDRESS
    // const [inputNext,setInputNext] = useState(true)

    let handleSaleEmpty = (sale,price) => {
        if (sale > 0) return sale
        else return price
    }

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
            // console.log(data.data.items , ' <<<< CART ')
            let arr = data.data.items
            let bumpArr = []
            // ecommerce
            arr.forEach(e=>{
                // console.log(e , ' <<<<< TES (*(*(*')
                let check = e.product_info.type
                if (check === 'ecommerce') {
                    // console.log(e , ' &*&*&*&*&*&*&*&*&*&*&*&*&')
                    setIsEcommerce(true)
                    // setInputNext(false)
                }
                // if (e.product_info.sale_price) {
                //     priceNum += e.product_info.sale_price
                // }else {
                //     priceNum += e.product_info.price
                // }
                // priceNum *= e.quantity
                // saleNum *= e.quantity
                console.log(e.product_info.sale_price , ' <<<< SALE PRICE RESULT (((')
                if (e.product_info.type === 'ecommerce') {
                    priceNum += (e.product_info.price * e.quantity)
                    saleNum += (handleSaleEmpty(e.product_info.sale_price , e.product_info.price) * e.quantity)
                }else {
                    priceNum += (e.product_info.price )
                    saleNum += (handleSaleEmpty(e.product_info.sale_price , e.product_info.price) )
                }
                console.log( saleNum + " , " + e.product_info.sale_price + " ," + e.quantity  )
                if (e && e.product_info) {
                    // console.log(e.product_info.bump , ' <<< PER BUMP')
                    if (e.product_info.bump) {
                        e.product_info.bump.forEach((e2,index)=>{
                            bumpArr.push({...e2,isSelected : false,isShow : true})
                        })
                    }
                }

                // e = {...e,isChecked : true}
            })
            console.log(bumpArr , ' <<< VALUE BUMP ARR >>>>')
            setBump(bumpArr)
            setPrice(priceNum)
            setSale(saleNum)
            setSaleBef(saleNum > 0 ? saleNum : priceNum)
            console.log(arr , ' <<< yyy YY && && ***')
            arr = arr.map(e=>{
                return e = {isChecked : true,...e}
            })
            // console.log(arr , ' <<<< **** HARUS 0 COK')
            setCart(arr.filter(e=>e.status !== "EXPIRED"))
            setIsData(true)
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
            console.log(data.data , ' <<<< VALUE DATA')
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

    useEffect(() => {
        console.log(cart ,  ' <<<<< VALUE CART (()()()()()()(')
        let arr = cart
        let priceNum = 0
        let saleNum = 0
        arr.forEach((e)=>{
            if (e.isChecked) {
                if (e.product_info.type === 'ecommerce') {
                    priceNum += (e.product_info.price * e.quantity)
                    saleNum += (handleSaleEmpty(e.product_info.sale_price , e.product_info.price) * e.quantity)
                }else {
                    priceNum += (e.product_info.price )
                    saleNum += (handleSaleEmpty(e.product_info.sale_price , e.product_info.price) )
                }
                // priceNum += (e.product_info.price * e.quantity)
                // saleNum += e.product_info.sale_price > 0 ? (e.product_info.sale_price * e.quantity) : (e.product_info.price* e.quantity)
            }
        })
        setPrice(priceNum)
        setSale(saleNum)
        setSaleBef(saleNum > 0 ? saleNum : priceNum)
        console.log('THIS ACTION RUNNING <<<<')
        console.log(saleNum , ' <<<< SALE NUM *****)))')
    },[cart])

    useEffect(()=>{
        console.log(bump, " value bump")
    },[bump])

    useEffect(()=>{
        if (selectedCoupon) {
            let { value , max_discount } = selectedCoupon
            let disk = Math.ceil((value / 100) * saleBef)
            if (disk > max_discount ) {
                // console.log('HERE')
                disk = max_discount
            }
            setSale( saleBef - disk)
            setMinDisk(disk)
        }
    },[sale,selectedCoupon])

    let checkBump = (data) => {
        let val = data.bump[0]
        // console.log(val , ' <<< VALUE VAL')
        // let { bump } = data
        let flag = false
        if (val) {
            bump.forEach((e)=>{
                if (e.isSelected && e._id === val._id && e.isShow) {
                    flag = true
                }
            })
            return flag
        }else {
            return false
        }
    }

    let handleObjCart = (arr) => {
        let result = []
        arr.forEach(e=>{
            // bump.forEach(e2=>{
            //     let flag = false
            //     if (e.isChecked) {
            //         console.log(e2._id , ' <<<< e2._id')
            //         console.log(e.product_info.bump._id , ' <<< e.product_info.bump._id')
            //         if (e2._id === e.product_info.bump[0]._id) {
            //             console.log('LOL <><><><><>----')
            //             flag = true
            //         }
            //         let objR = { 
            //                         product_id : e.product_info._id , 
            //                         utm : e.utm ,
            //                         quantity : e.quantity,
            //                         is_bump : flag
            //                     }
            //         result.push(objR)
            //     }
            // })
            if (e.isChecked) {
                let objR = { 
                    product_id : e.product_info._id , 
                    utm : e.utm ,
                    quantity : e.product_info.type === "ecommerce" ? e.quantity : 1,
                    // quantity : e.quantity,
                    is_bump : checkBump(e.product_info)
                  }
                result.push(objR)
            }
        })
        console.log(result , ' <<<< VALUE RESULT')
        return result
    }

    let handleOrder = () => {
        // console.log(selectedCoupon , ' <<< VALUE')
        setLoadingOrder(true)
        let resultCart = handleObjCart(cart)
        // console.log(resultCart , ' <<<< FIX 0000 ----- ==== --')
        // console.log(sale , ' <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>> VALUE SALE')
        console.log( (sale + shipmentPrice) , "  ()))()())()()()()()(batangan)  ")
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/orders/store`,
            data : {
                items : resultCart,
                [ selectedCoupon ? "coupon" : "Lol"] : {
                    code : selectedCoupon ? selectedCoupon.code : null
                },
                shipment : {
                    address_id : selectedAddress && isEcommerce ? selectedAddress._id : null,
                    price :  shipmentPrice  
                },
                total_price : (sale + shipmentPrice)
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            let id = data.data._id
            console.log(data.data._id , ' <<<< HASIL PROMISE THEN CART ORDER')
            history.push('/check-out')
            setLoadingOrder(false)
            // return axios({
            //     method : "POST",
            //     url : `${SWAGGER_URL}/orders/unique`,
            //     headers : {
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //         'Authorization': `Bearer ${localStorage.getItem('token')}`,
            //     },
            //     data : {
            //         order_id : id
            //     }
            // })
        })
        .catch(err=>{
            setLoadingOrder(false)
            console.log(err.response , ' <<< ERROR DI ORDER >>>')
        })
    }

    let validationCommerce = () => {
        if (isEcommerce && !address) {
            const el = document.getElementById('InputRef')
            el.scrollIntoView({ behavior: 'smooth' })
            // alert('JNFSJNSJDSJFNJSDN')
            console.log('HERE 1')
        }else {
            console.log('HERE 2')
            handleOrder()
        }
    }

    // RENDER CONDITIONAL SELECT ADDRESS OR INPUT ADDRESS
    let renderAdrInput = () => {
        if (address.length < 0) {
            return (
                <Menu
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                    address={address}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    cart={cart}
                    setShipmentPrice={setShipmentPrice}
                />            
            )
        }else {
            return (
                <InputAddress
                    // setInputNext={setInputNext}
                    setParent2={setAddress}
                />
            )
        }
    }

    // LISTEN CHANGE LOCAL STATE BUMP
    // useEffect(()=>{
    //     let num = 0
    //     if (bump) {
    //         bump.forEach((e,index)=>{
    //             if (e.isSelected) {
    //                 console.log('@@@@@@@LOL ><><><><><><><)()()())')
    //                 num = num + e.bump_price
    //                 console.log(num , ' <<< VALUE NUM')
    //             }
    //         })
    //         setPrice(price + num)
    //         setSale(sale + num)
    //     }
    // },[bump])

    useEffect(()=>{
        console.log(isEcommerce , ' <<<<< STATUS IS ECOMMERCE >>>> 9SJDFSDJFDJF')
    },[isEcommerce])

    return (
        <div className="cart-container-06">
            <h1 className="cwr-99-1 cart-06-title1">User Data</h1>
            <FirstContent
                user={user}
                isData={isData}
            />
            {
                cart.length > 0 &&
                <div className="cart-06-1 cart-06-c2">

                </div>
            }
            {
                cart.length > 0 &&
                <h2 className="cwr-99-1 cart-06-title1">
                    Gabung di Kelas
                </h2>
            }
            {
               cart.length > 0 ?
                <List
                    setCart={setCart}
                    cart={cart}
                    setBump={setBump}
                    bump={bump}
                    setIsEcommerce={setIsEcommerce}
                /> :
                <div style={{marginTop : 40}}>
                    Anda Belum Memiliki Cart
                </div>
            }
            {
                isEcommerce &&
                <div className="cart-06-1 cart-06-c2">

                </div>
            }
            {/* {
                address && isEcommerce &&
                <Menu
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                    address={address}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                />
            } */}
            {
                isEcommerce && cart &&
                renderAdrInput()
            }
             {
                   selectedAddress && isEcommerce && user &&
                    <div className="cart-06-address">             
                            <span>{user.name}</span>
                            <span style={{marginTop : 10}}>{user.phone_number}</span>
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
                    // console.log(e , ' <<<< VALUE BUMP')
                    if (e.isShow) {
                        return (
                            <SecondContent
                                bump={e}
                                setBump={setBump}
                                index={index}
                                bumpArr={bump}
                                sale={sale}
                                saleBef={saleBef}
                                setSale={setSale}
                                setSaleBef={setSaleBef}
                                price={price}
                                setPrice={setPrice}
                            />
                        )
                    }
                })
            }
            {
                cart.length > 0 &&
                <div className="cart-06-1 cart-06-c2">

                </div>
            }
            {
                cart && cart.length > 0 && cart.filter(e=>e.isChecked).length > 0 &&
                <h3>
                    Mau dapet potongan Harga silahkan pilih kupon Anda
                </h3>
            }
            {
                coupons  && cart.length > 0 && cart.filter(e=>e.isChecked).length > 0 &&
                <ThirdContent 
                    selectedCoupon={selectedCoupon} 
                    setSelectedCoupon={setSelectedCoupon}
                    coupons={coupons}
                    handleOrder={validationCommerce}
                    loadingOrder={loadingOrder}
                    price={price}
                    cart={cart}
                    sale={sale}
                    setSale={setSale}
                    saleBef={saleBef}
                    minDis={minDis}
                    setMinDisk={setMinDisk}
                />
            }

            {/* STYLING DI src/Pages/ProductDetail/style.css */}
            {
                cart.length > 0 && cart.filter(e=>e.isChecked).length > 0 &&
                <div 
                    // className="product-detail-c14-fixed"
                    className={
                        topScroll > 200 ? "product-detail-c14-fixed" : "product-detail-c14"
                        // "product-detail-c14-fixed"
                    }
                >
                    <div className="product-detail-c14-fc">
                        <span>{ sale && moneyConvert( (sale + shipmentPrice).toString(),"Rp. ")}</span>
                        {
                            
                        }
                        <div>
                            { price && price > 0 && sale > 0 && moneyConvert(price.toString(),"Rp. ") }
                        </div>
                    </div>
                    <div className="product-detail-c14-sc" onClick={e=>validationCommerce(e)}>
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