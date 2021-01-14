import React from 'react'

// COMPONENT 
import { List , FirstContent, SecondContent , ThirdContent } from '../../Components/Card'

// CART
import './style.css'

function Cart () {

    return (
        <div className="cart-container-06">
            <h1 className="cart-06-1 cart-06-title1">User Data</h1>
            <FirstContent/>
            <div className="cwr-99-1 cart-06-c2">

            </div>
            <h2 className="cart-06-1 cart-06-title1">
                Enrolled Course
            </h2>
            <List/>
            <div className="cwr-99-1 cart-06-c2">

            </div>
            <SecondContent/>
            <ThirdContent/>
        </div>
    )

}

export default Cart