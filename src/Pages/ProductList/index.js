import React , { useEffect } from 'react'

// STYLE
import './style.css'

// COMPONENT
import { Content , Carousel , TopicSort , Rating  } from '../../Components/ProductList'

// IMAGE
import Content1 from '../../Assets/Images/content-1.png'

function ProductList () {

    useEffect(()=>{
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
                window.fbq('track', 'Lead',)
            }
        }
    },[])

    return (
        <div className="product-list-container">
            <Carousel/>
            <div className="plc-p-line" >

            </div>
            <span 
                className="plc-p-title"
                style={{marginTop : 15}}
            >
                Business
            </span>
            <Content/>
            <div className="plc-p-line">

            </div>
            <span className="plc-p-title">
                Career
            </span>
            <Content/>
            <div className="plc-p-line">

            </div>
            <span className="plc-p-title">
                Finance
            </span>
            <Content/>
            <div className="plc-p-line">

            </div>
            <img 
                src={Content1}
                className="plc-image-content1"
                alt="list-content-1"
            />
            <div className="plc-p-line" style={{marginTop : 0}}>

            </div>

            <TopicSort/>
            <Content style={{marginTop : 21}}/>
            <div className="plc-p-line" style={{marginTop : 25}}>

            </div>
            <Rating/>
        </div>
    )

}

export default ProductList