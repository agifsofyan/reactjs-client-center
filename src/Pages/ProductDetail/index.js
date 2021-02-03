import React , { useState ,useEffect } from 'react'

// MODULE
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie';
import Skeleton from 'react-loading-skeleton';

// COMPONENT
import { Carousel , Expand , Bonus , Payment } from '../../Components/ProductDetail'
import Loader from '../../Components/Loader'

// IMAGES 
// import DummyImage from '../../Assets/Images/dummy.jpg'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// STYLE
import './style.css'

function ProductDetail (props) {

    // HISTORY
    const history = useHistory()
    
    // PARENT PROPS
    const { topScroll } = props
    
    // LOCAL STATE
    // const [dummyData] = useState([0,1])
    
    // LOCAL STATE DATA DETAIL
    const [detail,setDetail] = useState(null)

    // LOCAL STATE PRESENTASE DISKON
    const [diskP,setDiskP] = useState(null)

    // LOCAL STATE LOADER
    const [loading,setLoading] = useState(false)

    // ID PRODUCT
    const idProduct = history.location.search.split('=')[2] 

    useEffect(()=>{
        // window.scrollTo(0, 0);
        // window.scroll({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth'
        // });   
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
                window.fbq('track', 'Lead',)
            }
        }
    },[])

    // let manipulationYt = (vid) => {
    //     console.log(vid.split('/') ,  ' <<<<< OOOOPPP')
    // }

    const list = useSelector(state=>state.product.productList)

    useEffect(()=>{
        // axios({
        //     method : 'GET',
        //     url :`${SWAGGER_URL}/products/${idProduct}`
        // })
        // .then(({data})=>{
        //     console.log(data.data.media_url , '  <<<< DETAIL DATA')
        //     setTimeout(()=>{
        //         setDetail(data.data)
        //     },300)
        //     manipulationYt(data.data.media_url)
        //     // setDetail(data.data)
        // })
        // .catch(err=>{
        //     console.log(err , ' <<< ERROR')
        // })
    },[idProduct])

    useEffect(()=>{
        // console.log(props.match)
        // console.log(props.location.pathname.split('/')[2] , ' <<< PARAMS')
        let params = props.location.pathname.split('/')[2]
        if (list) {
            list.forEach(e=>{
                // console.log(l , '  <<< FIX')
                if (e.slug === params ) {
                    let {price,sale_price} = e
                    let min = price - sale_price
                    // console.log(price , ' <<< PRICE')
                    // console.log(sale_price , ' <<< SALE PRICE')
                    // console.log(min , ' <<<< MIN')
                    let presentase = min/price * 100
                    // console.log( Math.round(presentase) , ' <<<< FIX')
                    console.log(e._id , ' <<<< ID')
                    setDiskP(Math.round(presentase))
                    setDetail(e)
                }
            })
        }
    },[list,props.location.pathname])
    
    // RENDER ELEMENT
    let renderSection = () => {
        return detail.section.map((el,index)=>{
            return (
                <div className="product-detail-section-57">
                    {/* TITLE */}
                    <span className="product-detail-c9">
                        {el.title}
                    </span>
    
                    <img
                        src={el.image}
                        className="product-detail-c13"
                        alt="dummy"
                    />
    
                    <div className="product-detail-c10">
                        #1 MOST PURCHASED BUSINESS COURSE ON UDEMY! ** OVER 350,000 STUDENTS IN 195 COUNTRIES
                    </div>
                    <div className="product-detail-c11">
                       {
                           el.content
                       }
                    </div>
                    {/* ONLY LINE */}
                    <div className="product-detail-c8">

                    </div>
                </div>
            )
        })
    }

    // COOKIES ADD CART
    let addCart = (item) => {
        let cookieStorage = [];
        cookieStorage.push(item);
        let strCookie = JSON.stringify(cookieStorage);
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
              window.fbq('track', 'AddToCart');
            }
        }
        return Cookies.set('cartList', strCookie, { path: '/' });
    };

    // COOKIES ADD ID
    let addId = (item) => {
        let cookieStorage = [];
        cookieStorage.push(item);
        let strCookie = JSON.stringify(cookieStorage);
        return Cookies.set('productId', strCookie, { path: '/' });
    };

    let handleCartDb = () => {
        console.log(detail , ' <<<< >>>>')
        setLoading(true)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/carts/add`,
            data : {
                product_id : [detail._id],
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setLoading(false)
            history.push('/cart')
            if (typeof window !== "undefined") {
                if (window.fbq != null) { 
                  window.fbq('track', 'AddToCart');
                }
            }
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<<< ERROR')
        }) 
    }

    // HANDLE ADD TO CART
    let handleAddCart = () => {
        if (localStorage.getItem('token')) {
            handleCartDb()
        }else {
            console.log(detail , ' <<< VALUE DETAIL')
            addCart(detail)
            addId(detail._id)
            history.push('/cart')
        }
    }

    if (!detail) {
        return (
            <div className="product-detail-root" style={{height : "99vh",alignItems : "flex-start"}}>
                <div style={{width : "100%",display : "flex",flexDirection : "column",marginLeft : "5%"}}>
                    <Skeleton duration={0.5} width={290} height={15} style={{marginTop : 13 }} /> 
                    <Skeleton duration={0.5} width={280} height={15} style={{marginTop : 6 }} /> 
                    <Skeleton duration={0.5} width={270} height={15} style={{marginTop : 6 }} /> 
                    <Skeleton duration={0.5} width={260} height={15} style={{marginTop : 6 }} /> 
                </div>
                {/* <Skeleton duration={0.5} width={400} height={500} style={{marginTop : 15,marginLeft : "7%"}}  />  */}
                <div style={{width : "100%",display : "flex",alignItems : "center",justifyContent : "center"}}>
                    <div className="product-detail-c4" style={{backgroundColor : "#EFEFEF",marginTop : 8,paddingBottom : "21%",paddingTop : "21%"}}>
                    </div>
                </div>
                <div style={{width : "100%",display : "flex",flexDirection : "column",marginLeft : "5%"}}>
                    <Skeleton duration={0.5} width={350} height={15} style={{marginTop : 13}} /> 
                    <Skeleton duration={0.5} width={300} height={15} style={{marginTop : 7}} /> 
                </div>
                <div style={{width : "100%",display : "flex",alignItems : "center",justifyContent : "center",marginTop : 17,flexDirection : "column"}}>
                    <button 
                        className="product-detail-c7"
                    >
                        {
                            loading?<Loader/>:
                            "JOIN SEKARANG"
                        }
                    </button>
                    <div className="product-detail-c8">

                    </div>
                    {/* TITLE */}
                    <span  className="product-detail-c9">
                        Product Description
                    </span>
                </div>
            </div>
        )
    }
    return (
        <div className="product-detail-root">
            
            <h1 className="product-detail-c1">
                {detail.headline}
            </h1>
            <h3 className="product-detail-c2">
                {detail.subheadline}
            </h3>
            <div className="product-detail-c3">

                <div className="pdc3-button">
                    Best Seller
                </div>

                <div className="pdc3-button" style={{marginLeft : 11}}>
                    Bisnis
                </div>

                <div className="pdc3-button-2" style={{marginLeft : 11}}>
                    <span className="fa fa-star checked" ></span>
                    5 Star
                </div>

            </div>
            {/* <video className="product-detail-c4" controls={true} autoPlay={true}>
                <source src={`${detail.media_url}`} type="video/mp4"/>
            </video> */}
            <iframe 
                className="product-detail-c4" 
                title={"p"}
                // src={`${detail.media_url}`}
                src={"https://www.youtube.com/embed/tT0w1KN0mjM"}
            >
            </iframe>
            {/* <div className="product-detail-c4">
            </div> */}
            
            <div className="product-detail-c5">
                <h5>
                    {
                        detail.sale_price > 0 ?
                        moneyConvert(detail.sale_price.toString(),"Rp. ") : moneyConvert(detail.price.toString(),"Rp. ")
                    }
                </h5>
                <span>
                    {
                        detail.sale_price > 0  && moneyConvert(detail.price.toString(),"Rp. ")
                    }
                </span>
            </div>
            <span className="product-detail-c6">
                Hemat {diskP}% - 4 days left at this price!
            </span>
            <button 
                className="product-detail-c7"
                onClick={e=>handleAddCart()}
            >
                {
                    loading?<Loader/>:
                    "JOIN SEKARANG"
                }
            </button>
            
            {/* ONLY LINE */}
            <div className="product-detail-c8">

            </div>

            {/* TITLE */}
            <span  className="product-detail-c9">
                {detail.headline}
            </span>

            <Carousel/>

            <div  className="product-detail-c10">
                {detail.subheadline}
            </div>
            <div className="product-detail-c11">
               {detail.description}
            </div>
            
            {/* ONLY LINE */}
            <div className="product-detail-c8">

            </div>
            
            <div className="product-detail-c12">
                What You Will Learn
            </div>

            {/* C 13 */}
            <Expand
                data={detail.learn_about}
            />   

            {/* ONLY LINE */}
            <div className="product-detail-c8" style={{marginTop : 27}}>

            </div>

            {renderSection()}

            <Bonus/>

            <Payment detail={detail} loading={loading} handleAddCart={handleAddCart} topScroll={topScroll}/>

        </div>
    )

}

export default ProductDetail