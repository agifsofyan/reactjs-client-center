import React from 'react'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import './style.css'

function List (props) {

    // PARENT PROPS
    const { order, handleSaleEmpty } = props

    console.log(order.items , ' <<< IIII')
 
    let renderData = () => {
        let cart = [0,1,2,3,4,5]
        let lastLength = order.items.length - 1
        // console.log(order , ' < <<< VALUE ORDER HERE ***S')
        return order.items.map((e,index)=>{
            // console.log(e , ' <<< VALUE E')
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
                    <div>
                        <h3>{e.product_info.name}</h3>
                        {/* <h4>{e.product_info.sale_price ? "Rp. " +  e.product_info.sale_price : "Rp. " + e.product_info.price  }</h4> */}
                        {
                            e.product_info.sale_price > 0 ?
                            <h4>
                                {e.product_info.sale_price  && moneyConvert(e.product_info.sale_price  ? e.product_info.sale_price.toString() : "" ,"Rp. ")}
                            </h4>:
                            <h4>
                                {e.product_info.price  && moneyConvert(e.product_info.price  ? e.product_info.price.toString() : "" ,"Rp. ")}
                            </h4>
                        }
                    </div>
                    {
                        e.is_bump &&
                        <div
                            style={{marginTop : 20}}
                        >
                            <h3>{e.product_info.bump[0] && e.product_info.bump[0].bump_name}</h3>
                            {/* <h4>{e.product_info.sale_price ? "Rp. " +  e.product_info.sale_price : "Rp. " + e.product_info.price  }</h4> */}
                            <h4>
                                {e.product_info.bump[0]  && moneyConvert(e.product_info.bump[0].bump_price  ? e.product_info.bump[0].bump_price.toString() : "" ,"Rp. ")}
                            </h4>
                        </div>
                    }

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