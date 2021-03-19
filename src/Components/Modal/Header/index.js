import React from 'react'

// MODULE
import { useSelector } from 'react-redux'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// IMAGES
import Logo from '../../../Assets/Images/laruno.png'


function Header (props) {

    // GLOBAL STATE
    const setting = useSelector(state=>state.user.settingData)

    const { handleModalClose } = props

    return (
        <div className="bmc-content-1">
            <div className="bmc-content-1-c1">
                {
                    setting ?
                    <img
                        src={setting.logo.value}
                        alt="laruno"
                    />: <div></div>
                }
                <CloseIcon
                    style={{  cursor : "pointer" }}
                    // onClick={e=>HandleModalClose()}
                    onClick={e=> handleModalClose() }
                /> 
            </div>
        </div>
    )

}

export default Header