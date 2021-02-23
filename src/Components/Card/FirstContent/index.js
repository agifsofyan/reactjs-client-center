import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';

// STLYE
import './style.css'

function FirstContent (props) {

    const { user , isData } = props

    console.log(user , '  <<<<<< USER .,.,.,.,')

    let selector = document.getElementById('cart-user-id')
    console.log(selector && selector.offsetWidth , ' <<<<< VALUE')
    if (!isData) {
        return (
            <div id="cart-user-id" style={{width : "90%"}}>
                <Skeleton
                    width={selector && selector.offsetWidth}
                    height={135}
                    style={{borderRadius : 14,marginTop : 14}}
                    duration={0.5}
                />
            </div>
        )
    }else {
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

}

export default FirstContent