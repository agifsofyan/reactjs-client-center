import React from 'react'

// STYLE
import './style.css'

// COMPONENT
import { Content , Carousel } from '../../Components/ProductList'

// IMAGE
import Content1 from '../../Assets/Images/content-1.png'

function ProductList () {

    return (
        <div className="product-list-container">
            <Carousel/>
            <div className="plc-p-line" >

            </div>
            <span 
                className="plc-p-title"
                style={{marginTop : 15}}
            >
                Kelas Rekomendasi
            </span>
            <Content/>
            <div className="plc-p-line">

            </div>
            <span className="plc-p-title">
                Favorites
            </span>
            <Content/>
            <div className="plc-p-line">

            </div>
            <span className="plc-p-title">
                Based On Reviews
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

        </div>
    )

}

export default ProductList