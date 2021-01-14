import React  from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// STYLE
import './style.css'

function Payment (props) {

    // HISTORY 
    const history = useHistory()

    // PARENT PROPS
    const { topScroll } = props

    // GET MEDIA QUERY FROM JAVASCRIPT
    // window.matchMedia("(max-width: 768px)")

    return (
        <div 
            // className="product-detail-c14-fixed"
            className={
                topScroll > 440 ? "product-detail-c14-fixed" : "product-detail-c14"
            }
        >
            <div className="product-detail-c14-fc">
                <span>Rp 210.000</span>
                <div>
                    Rp. 1.900.000
                </div>
            </div>
            <div className="product-detail-c14-sc">
                <div onClick={e=>history.push('/card')}>
                    JOIN SEKARANG
                </div>
            </div>
        </div>
    )

}

export default Payment