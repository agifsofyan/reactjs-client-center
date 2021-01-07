import React from 'react'

// STYLE
import './style.css'

// COMPONENT
import Content from './Content'

function ProductList () {

    return (
        <div className="product-list-container">
            <span 
                className="plc-p-title"
                style={{marginTop : 90}}
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
        </div>
    )

}

export default ProductList