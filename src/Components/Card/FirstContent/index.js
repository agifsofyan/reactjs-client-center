import React from 'react'

// STLYE
import './style.css'

function FirstContent (props) {

    const { user } = props

    return (
        <div className="cart-06-1 cart-06-c1">
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    Name:
                </div>
                <div className="cart-06-c1-sc">
                    {
                        user && user.name
                    }
                </div>
            </div>
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    Email:
                </div>
                <div className="cart-06-c1-sc">
                    {
                        user && user.email.slice(0,20)
                    }
                </div>
            </div>
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    NomorTelepon:
                </div>
                <div className="cart-06-c1-sc">
                    {
                        user && user.phone_number
                    }
                </div>
            </div>
        </div>
    )

}

export default FirstContent