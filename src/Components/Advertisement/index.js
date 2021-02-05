import React , {useEffect}  from 'react'

// MODULES
import { useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// STYLE
import './style.css'

function Advertisement (props) {

    // USE LOCATION
    const location = useLocation()

    // CHILD PROPS
    const { setShowAdv } = props

    // GLOBAL STATE
    const productHeader = useSelector(state=>state.product.productHeader)

    useEffect(()=>{
        console.log(productHeader.feature.feature_onheader , ' <<< PRODUCT HEADER >>>>')
    },[productHeader])

    // RESPONSIVE

    if (
            location.pathname === '/auth' || 
            location.pathname === '/change-password' || 
            location.pathname === '/forget-password' || 
            location.pathname.split('/')[1] === "product-detail" ||
            location.pathname === '/cart' ||
            location.pathname === '/check-out' ||
            location.pathname === '' ||
            location.pathname === '/transfer-confirm' ||
            location.pathname === '/payment=true'||
            location.pathname === '/landing-page' ||
            location.pathname === "/order-history"
        ) 
    {
        return <></>
    }else  {
        return (
            <div className="adv-container"  id="adv-cont">
                <div
                    className="adv-content"
                >
                    <div className="adv-root">
                        <div className="adv-content-1">
                            {productHeader.feature.feature_onheader }
                            {/* bla bla bla bla bla */}
                        </div>
                        <div style={{marginTop : 4}}>1 days left!</div>
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
        // if (productHeader) {
        // }
    }
    // else {
    //     return <></>
    // }


}

export default Advertisement