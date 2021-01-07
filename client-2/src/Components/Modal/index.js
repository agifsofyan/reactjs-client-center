import React from 'react'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// IMAGES
import Logo from '../../Assets/Images/laruno.png'

// STYLE
import './style.css'

function Modal (props) {

    const {
        modalClose,
        setModalClose,
        setShowModal
    } = props

    let HandleModalClose = () => {
        setModalClose(true)
        setTimeout(()=>{
            setModalClose(false)
            setShowModal(false)
        },800)
    }
    if (modalClose) {
        return (
            <div className="burger-menu-02">
                <div className="burger-menu-02-content">

                </div>
            </div>
        )
    }else {
        return (
            <div className="burger-menu-01">
                <div className="burger-menu-01-content">

                    <div className="bmc-content-1">

                        <div className="bmc-content-2">
                            <img
                                src={Logo}
                                alt="laruno"
                            />
                             <span style={{marginTop : 30}}>Business</span>
                             <span>Career</span>
                             <span>Finance</span>
                             <span>Marketing</span>
                             <span>Sales</span>
                        </div>
                        <CloseIcon
                            style={{ marginTop : 30 , cursor : "pointer"}}
                            onClick={e=>HandleModalClose()}
                        />    

                    </div>


                </div>
            </div>
        )
    }
    
}

export default Modal