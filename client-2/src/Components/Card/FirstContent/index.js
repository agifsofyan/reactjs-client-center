import React from 'react'

// STLYE
import './style.css'

function FirstContent () {

    return (
        <div className="cart-06-1 cart-06-c1">
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    Name:
                </div>
                <div className="cart-06-c1-sc">
                    John Doed
                </div>
            </div>
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    Email:
                </div>
                <div className="cart-06-c1-sc">
                    
                    {
                        "johndoe@gmail.com".slice(0,20)
                    }
                </div>
            </div>
            <div className="cart-06-c1-fc">
                <div className="cart-06-c1-sc">
                    NomorTelepon:
                </div>
                <div className="cart-06-c1-sc">
                    0821484829292
                </div>
            </div>
        </div>
    )

}

export default FirstContent