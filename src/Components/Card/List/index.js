import React , { useState } from 'react'

// MODULE
import axios from 'axios'

// MATERIAL ICONS
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

// STYLE
import './style.css'

function List (props) {


    // PARENT PROPS
    const { cart , setCart } = props

    // LOCAL STATE
    const [lastLength] = useState(cart.length-1)
    const [num,setNum] = useState(1)

    let handleChangeNum = (res) => {
        if (num > 0) {
            setNum(res)
        }
    }

    let deleteCart = (id) => {
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
            console.log('BERHASIL MENGHAPUS')
            console.log(data , '  <<< DATA AFTER DELETE')
            return axios(({
                method : "GET",
                url : `${SWAGGER_URL}/carts/list`,
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }))
        })
        .then(({data})=>{
            setCart(data.data.items)
            console.log('HMMMM')
        })
        .catch(err=>{
            console.log(err.response)
        })
    }

    let editQty = (data) => {
        let qty = data.quantity
        console.log(qty , ' <<< QUAN')
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
                                    // onClick={e=>handleChangeNum(num - 1)}
                                    // onClick={e=>editQty(el.quantity)}
                                    onClick={e=>editQty(el,-1)}
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
                                    // onClick={e=>handleChangeNum(num + 1)}
                                    onClick={e=>editQty(el,1)}
                                    className="cart-06-list1-sc-c3-icon"
                                />
                            </div>
                            <DeleteIcon
                                onClick={e=>deleteCart(el.product_info._id)}
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