import React from 'react'

import CloseIcon from '@material-ui/icons/Close';

import Logo from '../../../Assets/Images/laruno.png'


function Header (props) {

    const { handleModalClose } = props

    return (
        <div className="bmc-content-1">
            <div className="bmc-content-1-c1">
                <img
                    src={Logo}
                    alt="laruno"
                />
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