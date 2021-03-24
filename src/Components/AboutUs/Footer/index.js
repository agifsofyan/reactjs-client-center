import React from 'react'

// MODULE
import { useSelector } from 'react-redux'

// IMAGE
import phone from '../../../Assets/Images/Phone-au.png'
import mail from '../../../Assets/Images/Mail-au.png'

// IMAGES MEDIA SOCIAL
import ig from '../../../Assets/Images/instagram.png' 
import fb from '../../../Assets/Images/facebook.jpg' 
import yt from '../../../Assets/Images/yt.png' 
import tt from '../../../Assets/Images/tt.png' 

// STYLE
import './style.css'

function Footer () {

    // GLOBAL STATE
    const setting = useSelector(state=>state.user.settingData)

    return (
        <div className="c8">
            <div className="t1">
                LARUNO.COM
            </div>
            <div className="t2">
                Komplek Scientia Square, Jalan Darwin Timur. Ruko Darwin No 2, Medang, Kec. Pagedangan, Kota Tangerang Selatan, Banten 15339
            </div>
            <div className="line">

            </div>
            <div className="t3">
                <img
                    src={phone}
                    alt="phone-about-us"
                />
                <div>
                    {setting && setting.whatsapp.value}
                </div>
            </div>
            {/* <div className="t3">
                <img
                    src={mail}
                    alt="phone-about-us"
                />
                <div>
                    info@laruno.com
                </div>
            </div> */}
            <div className="line">

            </div>
            <div className="t4">
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
                    klik to /subscribe
                </div>
            </div>
        </div>
    )

}

export default Footer;