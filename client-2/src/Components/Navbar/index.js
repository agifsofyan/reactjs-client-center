import React from 'react'

// STYLE
import './style.css'

// IMAGE
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Logo from '../../Assets/Images/laruno.png'

function Navbar (props) {

    const { setShowModal } = props
    
    return (
        <div className="navbar-container">
            <div className="navbar-content" >
                <MenuIcon onClick={e=>[e.preventDefault() , setShowModal(true)]} style={{ fontSize : 27 , color : "#033E66",cursor : 'pointer'}}/>
                <img
                    src={Logo}
                    alt="laruno"
                    className="navbar-laruno-logo"
                    // onClick={e=>setShowModal(true)}
                />
                <NotificationsNoneIcon style={{ fontSize : 27 }}/>
            </div>
        </div>
    )

}

export default Navbar