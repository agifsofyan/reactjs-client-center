import React , { useState , useEffect } from 'react'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// IMAGES
import Logo from '../../Assets/Images/laruno.png'

// STYLE
import './style.css'

function Modal (props) {

    const [animationEnd,setAnimationEnd] = useState(false)
    
    // WIDTH
    const [width,setWidth] = useState(0)

    const {
        modalClose,
        setModalClose,
        showModal,
        setShowModal
    } = props

    // let HandleModalClose = () => {
    //     setModalClose(true)
    //     setShowModal(true)
    //     setTimeout(()=>{
    //         setModalClose(false)
    //         setShowModal(false)
    //     },400)
    // }
    
    useEffect(()=>{
        if (showModal) {
            setWidth(100)
            setTimeout(()=>{
            },100)
        }else {
            setWidth(0)
            setTimeout(()=>{
                // setWidth(100)
            },1000)
        }
    },[showModal])

    let handleModalClose = () => {
        setWidth(0)
        setTimeout(()=>{
            setShowModal(false)
        },900)
    }

    if (width !== 100) {
        return (
            <div className="burger-menu-01"  onAnimationEnd={e=>setAnimationEnd(true)}>
                <div style={{width : `${width}%`}}  className="burger-menu-01-content" onTransitionEnd={e=>setAnimationEnd(true)}>

                </div>
            </div>
        )
    }else {
        return (
            <div className="burger-menu-01"  onAnimationEnd={e=>setAnimationEnd(true)}>
                <div style={{width : `${width}%`}}  className="burger-menu-01-content" onTransitionEnd={e=>setAnimationEnd(true)}>

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

                    <div className="bmc-content-2">
                        Mau belajar online yang menyenangkan, efektif dan interaktif? 
                    </div>

                    <div style={{marginTop : 20 , width : 180, height : 26 , borderRadius : 5}} className="card-06-tc-c1">
                        <div className="card-06-tc-c1-1">
                            <span style={{fontSize :  12 , fontWeight : 300}}>Sort By Topic</span>
                            <ExpandMoreIcon className="card-06-tc-c1-1-icon"/>
                        </div>
                    </div>

                    <div style={{marginTop : 20}} className="bmc-content-3"></div>

                    <div className="bmc-content-4" style={{marginTop : 19}}>
                        Beranda
                    </div>

                    <div className="bmc-content-4" >
                        Tentang Laruno
                    </div>

                    <div className="bmc-content-4-selected">
                        Login & Register Akun
                    </div>

                    <div className="bmc-content-4" style={{marginTop : 19}}>
                        Tentang Laruno
                    </div>

                </div>
                     {/* <div className="burger-menu-01-content"></div> */}

            </div>
        )
    }
    
}

export default Modal