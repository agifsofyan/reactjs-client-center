import React from 'react'

// MODULES
import { useHistory , useLocation } from 'react-router-dom'

// STYLE
import './style.css'

// IMAGE
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Logo from '../../Assets/Images/laruno.png'

function Navbar (props) {

    const { setShowModal } = props

    // USE LOCATION
    const location = useLocation()

    // USE HISTORY
    const history = useHistory()

    if (location.pathname.split('/')[1] === "product-detail") {
        return (
        <div className="navbar-container">
            <div className="navbar-content" style={{justifyContent : "center"}} >
                <img
                    src={Logo}
                    alt="laruno"
                    className="navbar-laruno-logo"
                />
            </div>
        </div>
        )
    }else {
        return (
            <div className="navbar-container">
                <div className="navbar-content" >
                    <MenuIcon onClick={e=>[e.preventDefault() , setShowModal(true)]} style={{ fontSize : 27 , color : "#033E66",cursor : 'pointer'}}/>
                    <img
                        src={Logo}
                        alt="laruno"
                        className="navbar-laruno-logo"
                        onClick={e=>history.push('/')}
                        // onClick={e=>setShowModal(true)}
                    />
                    <NotificationsNoneIcon style={{ fontSize : 27 }}/>
                </div>
            </div>
        )
    }
    

}

export default Navbar