import React , { useState ,useEffect } from 'react'

// MODULE
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';

// COMPONENT
import { Carousel , Expand , Bonus , Payment } from '../../Components/ProductDetail'
import Loader from '../../Components/Loader'

// IMAGES 
import DummyImage from '../../Assets/Images/dummy.jpg'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function ProductDetail (props) {

    // HISTORY
    const history = useHistory()
    
    // PARENT PROPS
    const { topScroll } = props
    
    // LOCAL STATE
    const [dummyData] = useState([0,1])
    
    // LOCAL STATE DATA DETAIL
    const [detail,setDetail] = useState(null)

    // LOCAL STATE LOADER
    const [loading,setLoading] = useState(false)

    // ID PRODUCT
    const idProduct = history.location.search.split('=')[2] 

    useEffect(()=>{
        axios({
            method : 'GET',
            url :`${SWAGGER_URL}/products/${idProduct}`
        })
        .then(({data})=>{
            setDetail(data.data)
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    },[idProduct])

    // RENDER ELEMENT
    let renderSection = () => {
        return dummyData.map((el,index)=>{
            return (
                <div className="product-detail-section-57">
                    {/* TITLE */}
                    <span className="product-detail-c9">
                        Section Here
                    </span>
    
                    <img
                        src={DummyImage}
                        className="product-detail-c13"
                        alt="dummy"
                    />
    
                    <div className="product-detail-c10">
                        #1 MOST PURCHASED BUSINESS COURSE ON UDEMY! ** OVER 350,000 STUDENTS IN 195 COUNTRIES
                    </div>
                    <div className="product-detail-c11">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet eros ac urna efficitur, et imperdiet nibh ornare. Proin posuere sollicitudin venenatis. In tristique quis odio eu feugiat. Mauris rutrum risus eu justo ultricies elementum. Pellentesque in sem nec nulla pellentesque venenatis.
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
        setLoading(true)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/carts/add`,
            data : {
                product_id : [idProduct],
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setLoading(false)
            console.log(data , ' <<< DATA')
            console.log('BERHASIL JALAN')
            history.push('/cart')
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

    return (
        <div className="product-detail-root">
            
            <h1 className="product-detail-c1">
                How to be a Professional Businessman
            </h1>
            <h3 className="product-detail-c2">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
            <div className="product-detail-c4">
            </div>
            <div className="product-detail-c5">
                <h5>
                    Rp. 200.000
                </h5>
                <span>
                    Rp. 1.900.000
                </span>
            </div>
            <span className="product-detail-c6">
                Hemat 80% - 4 days left at this price!
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
                Product Description
            </span>

            <Carousel/>

            <div  className="product-detail-c10">
                #1 MOST PURCHASED BUSINESS COURSE ON UDEMY! ** OVER 350,000 STUDENTS IN 195 COUNTRIES
            </div>
            <div className="product-detail-c11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet eros ac urna efficitur, et imperdiet nibh ornare. Proin posuere sollicitudin venenatis. In tristique quis odio eu feugiat. Mauris rutrum risus eu justo ultricies elementum. Pellentesque in sem nec nulla pellentesque venenatis.
            </div>
            
            {/* ONLY LINE */}
            <div className="product-detail-c8">

            </div>
            
            <div className="product-detail-c12">
                What You Will Learn
            </div>

            {/* C 13 */}
            <Expand/>   

            {/* ONLY LINE */}
            <div className="product-detail-c8" style={{marginTop : 27}}>

            </div>

            {renderSection()}

            <Bonus/>

            <Payment handleAddCart={handleAddCart} topScroll={topScroll}/>

        </div>
    )

}

export default ProductDetail