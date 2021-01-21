import React , { useState } from 'react'

// MATERIAL ICONS
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

// STYLE
import './style.css'

function List (props) {


    // PARENT PROPS
    const { cart } = props

    // LOCAL STATE
    const [lastLength] = useState(cart.length-1)
    const [num,setNum] = useState(1)

    let handleChangeNum = (res) => {
        if (num > 0) {
            setNum(res)
        }
    }

    let renderData = () => {
        return cart.map((el,index)=>{
            return (
                <div 
                    key={index}
                    className="cart-06-list1"
                    style={{
                        borderTopRightRadius : index === 0 && 12,
                        borderTopLeftRadius : index === 0 && 12,
                        borderBottom :  ( index === lastLength || cart.length === 1 ) && "0.5px solid #A4A4A4",
                        borderBottomRightRadius : (index === lastLength || cart.length === 1 ) && 12,
                        borderBottomLeftRadius : (index === lastLength || cart.length === 1 ) && 12,
                    }}
                >

                    <div className="cart-06-list1-fc">

                        <input
                            type="checkbox"
                        />

                        <span>
                            {el.product_info.slug}
                        </span>

                    </div>

                    <div className="cart-06-list1-sc">
                        <div className="cart-06-list1-sc-c1">
                            <span>{ "Rp. " + el.product_info.price}</span>
                            <div>{ "Rp. " + el.product_info.sale_price}</div>
                        </div>
                        <div className="cart-06-list1-sc-c2">
                            <div className="cart-06-list1-sc-c2-button">Hemat 80%</div>
                        </div>
                        <div className="cart-06-list1-sc-c3">
                            <div className="cart-06-list1-sc-c3-box">
                                <RemoveIcon
                                    onClick={e=>handleChangeNum(num - 1)}
                                    className="cart-06-list1-sc-c3-icon"
                                />
                            </div>
                            <div className="cart-06-list1-sc-c3-num" style={{marginLeft : 9}}>
                                {
                                    num
                                }
                            </div>
                            <div className="cart-06-list1-sc-c3-box" style={{marginLeft : 9}}>
                                <AddIcon
                                    onClick={e=>handleChangeNum(num + 1)}
                                    className="cart-06-list1-sc-c3-icon"
                                />
                            </div>
                            <DeleteIcon
                                className="cart-06-list1-sc-c3-icon-2"
                            />
                        </div>
                    </div>

                </div>
            )
        })
    }

    return (
        <div 
            className="cart-06-1 cart-06-list1-root"
        >
            {renderData()}
        </div>
    )

}

export default List