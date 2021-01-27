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

    // RESPONSIVE

    if (
            location.pathname === '/auth' || 
            location.pathname === '/change-password' || 
            location.pathname === '/forget-password' || 
            location.pathname.split('/')[1] === "product-detail" ||
            location.pathname === '/cart' ||
            location.pathname === '/check-out' ||
            location.pathname === '' ||
            location.pathname === '/transfer-confirm'
        ) 
    {
        return (<></>)
    }else {
        return (
            <div className="adv-container"  id="adv-cont">
                <div
                    className="adv-content"
                >
                    <div className="adv-root">
                        <div className="adv-content">
                            Mau Tau Benefit Premium Member? Cukup Rp 20.000,-/bulan. Cek Disini Sekarang
                        </div>
                    </div>
                    <CloseIcon
                        onClick={e=>setShowAdv(false)}
                        // style={{ marginTop : 16 , marginRight :30 , cursor : "pointer"  }}
                        // className=""
                        className="adv-close-icon"
                    />
                </div>
            </div>
        )
    }


}

export default Advertisement