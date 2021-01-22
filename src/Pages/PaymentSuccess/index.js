import React from 'react'

// IMAGE
import Logo from '../../Assets/Images/success.png'
import wa from '../../Assets/Images/Whatsapp.png'

// STYLE
import './style.css'

function PaymentSuccess () {

    return (
        <div className="payment-09-container">
            <h1>Thank You</h1>
            <img
                src={Logo}
                alt="success-logo"
            />
            <h2>
                Your payment is pending
            </h2>
            <h3>
                Thanks for your payment. An automated receipt will be sent to your registered email.
            </h3>
            <div className="payment-09-button1">
                <span>Ask Via Whatsapp</span>
                <img
                    alt="wa-logo"
                    src={wa}
                />
            </div>
            <div className="payment-09-button2">
                Check Order History
            </div>
        </div>
    )

}

export default PaymentSuccess