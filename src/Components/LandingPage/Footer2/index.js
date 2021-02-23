import React from 'react'

// IMAGES 
import Wa from '../../../Assets/Images/Whatsapp.png'

// IMAGES MEDIA SOCIAL
import ig from '../../../Assets/Images/instagram.png' 
import fb from '../../../Assets/Images/facebook.jpg' 
import yt from '../../../Assets/Images/yt.png' 
import tt from '../../../Assets/Images/tt.png' 


// STYLING DI pages/LandingPage

function Footer () {

    return (
        <div className="lp-10-c5">
            {/* FIRST CONTENT  */}
           <div 
                style={{paddingLeft : 0,width : "auto"}}
                className="bmc-content-5"
            >
                <img
                    src={Wa}
                    alt="-drawer-wa-logo"
                />
                <div className="t1">
                    Chat via Whatsapp :
                </div>
                <div className="t2">
                    087878500139
                </div>
            </div>
            {/* SECOND CONTENT  */}
            <div 
                style={{paddingLeft : 0 , width : "auto",marginTop : 20}}
                className="bmc-content-6"
            >
                <img
                    src={ig}
                    alt="drawer-img-1"
                    style={{marginLeft : 0}}
                />
                <img
                    src={fb}
                    alt="drawer-img-1"
                />
                <img
                    src={yt}
                    alt="drawer-img-1"
                />
                <img
                    src={tt}
                    alt="drawer-img-1"
                />
                <div>
                    @larunocom
                </div>
            </div>
            <div className="bmc-content-7">
                <div>
                    Privacy Policy
                </div>
                <div style={{marginLeft : 20}}>
                    Terms & Condition
                </div>
                </div>
            <div className="bmc-content-8">
                Copyright @ 2021 larunocom
            </div>
        </div>
    )

}

export default Footer
