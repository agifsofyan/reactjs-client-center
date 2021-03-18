import React from 'react'

// MODULE
import { useSelector } from 'react-redux'

// IMAGES
import Wa from '../../../Assets/Images/Whatsapp.png'

function WaContent () {

    const setting = useSelector(state=>state.user.settingData)

    return (
        <div className="bmc-content-5">
            <img
                src={Wa}
                alt="-drawer-wa-logo"
            />
            <div className="t1">
                Chat via Whatsapp :
            </div>
            <div className="t2">
                {setting && setting.whatsapp.value}
            </div>
        </div>
    )

}

export default WaContent