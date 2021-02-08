import React from 'react'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import './style.css'

function List (props) {

    // PARENT PROPS
    const { order } = props

    console.log(order.items , ' <<< IIII')
 
    let renderData = () => {
        let cart = [0,1,2,3,4,5]
        let lastLength = order.items.length - 1
        return order.items.map((e,index)=>{
            return (
                <div
                    style={{
                        borderTopRightRadius : index === 0 && 12,
                        borderTopLeftRadius : index === 0 && 12,
                        borderBottom :  ( index === lastLength || cart.length === 1 ) && "0.5px solid #A4A4A4",
                        borderBottomRightRadius : (index === lastLength || cart.length === 1 ) && 12,
                        borderBottomLeftRadius : (index === lastLength || cart.length === 1 ) && 12,
                    }}
                >
                    <h3>{e.product_info.name}</h3>
                    {/* <h4>{e.product_info.sale_price ? "Rp. " +  e.product_info.sale_price : "Rp. " + e.product_info.price  }</h4> */}
                    <h4>
                        {e.product_info.sale_price  && moneyConvert(e.product_info.sale_price  ? e.product_info.sale_price.toString() : "" ,"Rp. ")}
                    </h4>

                </div>
            )
        })
    }

    return (
        <div className="order-08-list">
            {
                renderData()
            }
        </div>
    )
}

export default List