import React from 'react'

// IMAGES MEDIA SOCIAL
import ig from '../../../Assets/Images/instagram.png' 
import fb from '../../../Assets/Images/facebook.jpg' 
import yt from '../../../Assets/Images/yt.png' 
import tt from '../../../Assets/Images/tt.png' 

function Social () {

    return (
        <div className="bmc-content-6">
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
    )

}

export default Social