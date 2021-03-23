import React from 'react'

// MODULES
import { useHistory , useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

// STYLE
import './style.css'

// IMAGE
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Logo from '../../Assets/Images/laruno-fix.png'

function Navbar (props) {

    const { setShowModal } = props

    // USE LOCATION
    const location = useLocation()

    // USE HISTORY
    const history = useHistory()

    // GLOBAL STATE
    const setting = useSelector(state=>state.user.settingData)

    if (location.pathname.split('/')[1] === "product-detail"|| location.pathname === '/cart' || location.pathname === '/check-out' || location.pathname === '/transfer-confirm') {
        return (
        <div className="navbar-container">
            <div className="navbar-content" style={{justifyContent : "center"}} >
                {
                    setting &&
                    <img
                        src={setting.logo.value}
                        alt="laruno"
                        className="navbar-laruno-logo"
                        onClick={e=>history.push('/')}
                    />
                }
            </div>
        </div>
        )
    }else {
        return (
            <div className="navbar-container">
                <div className="navbar-content" >
                    <MenuIcon onClick={e=>[ setShowModal(true)]} style={{ fontSize : 27 , color : "#033E66",cursor : 'pointer'}}/>
                    {
                        setting &&
                        <img
                            src={setting.logo.value}
                            alt="laruno"
                            className="navbar-laruno-logo"
                            onClick={e=>history.push('/')}
                            // onClick={e=>setShowModal(true)}
                        />
                    }
                    <NotificationsNoneIcon style={{ fontSize : 27 }}/>
                </div>
            </div>
        )
    }
    

}

export default Navbar