import React from 'react'

// STYLE
import './style.css'

function Button (props) {

    const {
        image, text
    } = props

    return (
        <div className="auth-button-type2">
            <img
                src={image}
                alt="third-party-login"
            />
            <div>
                {text}
            </div>
        </div>
    )

}

export default Button