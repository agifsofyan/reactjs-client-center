import React from 'react'

// STYLE
import './style.css'

// IMAGE
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Logo from '../../Assets/Images/laruno.png'

function Navbar () {
    
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <MenuIcon style={{ fontSize : 27 , color : "#033E66"}}/>
                <img
                    src={Logo}
                    alt="laruno"
                    className="navbar-laruno-logo"
                />
                <NotificationsNoneIcon style={{ fontSize : 27 }}/>
            </div>
        </div>
    )

}

export default Navbar