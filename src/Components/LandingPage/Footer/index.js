import React from 'react'

// IMAGES 
import phone from '../../../Assets/Images/phone.svg'
import mail from '../../../Assets/Images/mail.svg'

// STYLING DI pages/LandingPage

function Footer () {

    return (
        <div className="lp-10-c5">
            <span>
                @Copyright 2021 Larunocom PTE Ltd,
            </span>
            <div>
                <img
                    src={phone}
                    alt="phone-footer"
                />
                <span>
                    (021) 22222788
                </span>
            </div>
            <div>
                <img
                    src={mail}
                    alt="phone-footer"
                />
                <span>
                    info@laruno.com
                </span>
            </div>
        </div>
    )

}

export default Footer
