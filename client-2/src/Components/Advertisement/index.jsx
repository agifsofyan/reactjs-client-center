import React  from 'react'

// MODULES
import { useLocation  } from 'react-router-dom';

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// STYLE
import './style.css'

function Advertisement (props) {

    // USE LOCATION
    const location = useLocation()

    // CHILD PROPS
    const { setShowAdv } = props

    if (location.pathname === '/auth' || location.pathname === '/change-password' || location.pathname === '/reset-password') {
        return (<></>)
    }else {
        return (
            <div className="adv-container" style={{position : "relative"}} id="adv-cont">
                <div className="adv-root">
                    <div className="adv-content">
                        Mau Tau Benefit Premium Member? Cukup Rp 20.000,-/bulan. Cek Disini Sekarang
                    </div>
                </div>
                <CloseIcon
                    onClick={e=>setShowAdv(false)}
                    style={{ marginTop : 16 , marginRight :30 , cursor : "pointer"  }}
                />
            </div>
        )
    }


}

export default Advertisement