import React from 'react'

// STYLE
import './style.css'

// COMPONENT
import { Content } from '../../Components/ProductList'

function ProductList () {

    return (
        <div className="product-list-container">
            <span className="plc-p-title">
                Kelas Rekomendasi
            </span>
            <Content/>
        </div>
    )

}

export default ProductList