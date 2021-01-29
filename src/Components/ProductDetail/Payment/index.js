import React  from 'react'

// MODULE
import { useSelector } from 'react-redux'

// COMPONENT
import Loader from '../../Loader'

// HELPER 
import moneyConvert from '../../../Support/moneyConvert'
 
// STYLE
import './style.css'

function Payment (props) {

    // PARENT PROPS
    const { handleAddCart , detail ,loading  } = props

    // GLOBAL
    const topScroll = useSelector(state=>state.user.top)

    // GET MEDIA QUERY FROM JAVASCRIPT
    // window.matchMedia("(max-width: 768px)")

    return (
        <div 
            // className="product-detail-c14-fixed"
            className={
                topScroll > 400 && !loading ? "product-detail-c14-fixed" : "product-detail-c14"
            }
            // className="product-detail-c14"
        >
            <div className="product-detail-c14-fc">
                <span>
                    {/* Rp 210.000 */}
                    {
                        detail.sale_price > 0 ?
                        moneyConvert(detail.sale_price.toString(),"Rp. ") : moneyConvert(detail.price.toString(),"Rp. ")
                    }
                </span>
                <div>
                    {
                        detail.sale_price > 0  && moneyConvert(detail.price.toString(),"Rp. ")
                    }
                </div>
            </div>
            <div className="product-detail-c14-sc">
                <div onClick={e=>handleAddCart(e)}>
                    {
                        loading ?
                        <Loader/> :
                        "JOIN SEKARANG"
                    }
                </div>
            </div>
        </div>
    )

}

export default Payment