import React , { useState } from 'react'

// MODULE
import axios from 'axios'

// MATERIAL ICONS
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import './style.css'

function List (props) {


    // PARENT PROPS
    const { cart , setCart , bump,setBump , setIsEcommerce } = props

    // LOCAL STATE
    const [lastLength,setLastLenght] = useState(cart.length-1)
    // const [num,setNum] = useState(1)

    // let handleChangeNum = (res) => {
    //     if (num > 0) {
    //         setNum(res)
    //     }
    // }

    let deleteCart = (id,bumpId) => {
        axios({
            method : 'DELETE',
            url : `${SWAGGER_URL}/carts/remove?product_id=${id}`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            let arr = [...cart]
            let bumpArr = [...bump]
            arr = arr.filter(e=>e.product_info._id !== id)
            bumpArr = bumpArr.filter(e=>e._id !== bumpId)
            setCart(arr)
            setBump(bumpArr)
            setLastLenght(arr.length-1)
            // HANDLE COMMERCE
            let flag = false
            arr.forEach(e=>{
                let check = e.product_info.type
                if (check === 'ecommerce') {
                    setIsEcommerce(true)
                    flag = false
                }
            })
            if (!flag) {
                setIsEcommerce(flag)
            }
        })
        .catch(err=>{
            console.log(err.response)
        })
    }

    let editQty = (data,num) => {
        let qty = data.quantity
        if (qty >=1) {
            // if (data._id ==)
            let arr = [...cart]
            arr.forEach(e=>{
                if (data.product_info._id === e.product_info._id) {
                    data.quantity = data.quantity + num
                }
            })
            setCart(arr)
        }
    }

    let checkedCart = (id,status,bumpId) => {
        // let obj = 
        let arr = [...cart]
        let arrBump = [...bump]
        arr = arr.map(e=>{
            if (e._id === id) {
                return e = { ...e ,isChecked : !status}
            }else {
                return e
            }
        })
        arrBump = bump.map(e=>{
            if ( bumpId && e._id === bumpId) {
                return e = { ...e ,isShow : !status , isSelected :  !status}
            }else {
                return e
            }
        })
        setCart(arr)
        setBump(arrBump)
        // HANLE CHECK ECOMMERCE
        let flag = false
        arr.forEach(e=>{
            let check = e.product_info.type
            if (check === 'ecommerce' && e.isChecked) {
                setIsEcommerce(true)
                flag = true
                console.log('KDNSFJNFJDFNDJSFNDS hahahahha')
            }
        })
        if (!flag) {
            console.log('LOL JNJDNFJDSFNJDSFNDJSFFFFFFFFFFFFFFFFFFFFFFFFFFFFFN')
            setIsEcommerce(flag)
        }
    }

    let renderDiskon = (data) => {
        let {price,sale_price} = data
        let min = price - sale_price
        let presentase = min/price * 100
        return Math.round(presentase)
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
                        height : el.product_info.type === 'ecommerce' && el.product_info.sale_price > 0 && 115
                    }}
                >

                    <div className="cart-06-list1-fc">

                        <input
                            onClick={e=>checkedCart(el._id,el.isChecked,el.product_info.bump.length > 0 ? el.product_info.bump[0]._id : null )}
                            type="checkbox"
                            checked={el.isChecked}
                        />

                        <span>
                            {el.product_info.name}
                        </span>

                    </div>

                    <div className="cart-06-list1-sc">
                        {
                            el.product_info.sale_price > 0 ?
                            <div className="cart-06-list1-sc-c1">
                                <span>{ el.product_info && moneyConvert( el.product_info.price ? el.product_info.price.toString() : "","Rp. ") }</span>
                                <div>{ el.product_info && moneyConvert(el.product_info.sale_price ? el.product_info.sale_price.toString() : "","Rp. ")}</div>
                            </div> :
                            <div className="cart-06-list1-sc-c1" style={{justifyContent : "center",width : "50%"}}>
                                <div style={{marginLeft : 0}}>
                                    { el.product_info && moneyConvert( el.product_info.price ? el.product_info.price.toString() : "","Rp. ") }
                                </div>
                            </div>
                        }
                        <div className="cart-06-list1-sc-c2">
                            {
                                el.product_info.sale_price > 0 &&
                                <div className="cart-06-list1-sc-c2-button">
                                    Hemat {renderDiskon(el.product_info)}%
                                </div>
                            }
                        </div>
                        <div className="cart-06-list1-sc-c3">
                            {
                                el.product_info.type === "ecommerce" &&
                                <div className="cart-06-list1-sc-c3-box">
                                    <RemoveIcon
                                        // onClick={e=>handleChangeNum(num - 1)}
                                        // onClick={e=>editQty(el.quantity)}
                                        onClick={e=>editQty(el,-1)}
                                        className="cart-06-list1-sc-c3-icon"
                                    />
                                </div>
                            }

                            {
                                el.product_info.type === "ecommerce" &&
                                <div 
                                    className="cart-06-list1-sc-c3-num" 
                                    style={
                                            {
                                                marginLeft : el.product_info.type === "ecommerce" && 9,
                                                width : el.product_info.type !== "ecommerce" && 0,
                                                borderBottom : el.product_info.type !== "ecommerce" && "none",
                                                marginRight : el.product_info.type !== "ecommerce" && "24%",
                                                fontSize : el.product_info.type !== "ecommerce" && 16,
                                                paddingTop : el.product_info.type !== "ecommerce" && 2,
                                            }
                                        }
                                >
                                    {
                                        el.quantity
                                    }
                                </div>
                            }


                            {
                                el.product_info.type === "ecommerce" &&
                                <div className="cart-06-list1-sc-c3-box" style={{marginLeft : 9}}>
                                    <AddIcon
                                        // onClick={e=>handleChangeNum(num + 1)}
                                        onClick={e=>editQty(el,1)}
                                        className="cart-06-list1-sc-c3-icon"
                                    />
                                </div>
                            }

                            {
                                el.product_info.type === "ecommerce" &&
                                <DeleteIcon
                                    onClick={e=>deleteCart(el.product_info._id,el.product_info.bump ? el.product_info.bump[0]._id : null)}
                                    className="cart-06-list1-sc-c3-icon-2"
                                />
                            }
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