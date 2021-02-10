import React , { useState , useEffect } from 'react'

// MODULE
import { useHistory , useLocation } from 'react-router-dom'

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// IMAGES
import Logo from '../../Assets/Images/laruno.png'

// STYLE
import './style.css'

function Modal (props) {

    // HISTORY
    const history = useHistory()

    // LOCATION
    const location = useLocation()

    // const [animationEnd,setAnimationEnd] = useState(false)
    
    // WIDTH
    const [width,setWidth] = useState(0)

    const {
        // modalClose,
        // setModalClose,
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
        // console.log(animationEnd)
        // animationEnd()
    },[showModal])

    let handleModalClose = () => {
        setWidth(0)
        setTimeout(()=>{
            setShowModal(false)
        },900)
    }

    let handleChangePage = (route) => {
        history.push(route)
        handleModalClose()
    }

    let checkSelected = (current) => {
        if (location.pathname === current) {
            return "bmc-content-4-selected"
        }else {
            return "bmc-content-4"
        }
    }

    if (width !== 100) {
        return (
            <div 
                className="burger-menu-01" 
                // onAnimationEnd={e=>setAnimationEnd(true)}
            >
                <div 
                    style={{width : `${width}%`}}  
                    className="burger-menu-01-content" 
                    // onTransitionEnd={e=>setAnimationEnd(true)}
                >

                </div>
            </div>
        )
    }else {
        return (
            <div 
                className="burger-menu-01" 
                // onAnimationEnd={e=>setAnimationEnd(true)}
            >
                <div 
                    style={{width : `${width}%`}}  
                    className="burger-menu-01-content" 
                    // onTransitionEnd={e=>setAnimationEnd(true)}
                >

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

                    <div 
                        style={{marginTop : 19}}
                        className={checkSelected("/product-list")}
                        onClick={e=>handleChangePage('/product-list')}
                    >
                        Beranda
                    </div>

                    <div className="bmc-content-4" >
                        Tentang Laruno
                    </div>

                    <div
                        className={checkSelected("/auth")}
                        onClick={e=>handleChangePage('/auth')} 
                    >
                        Login & Register Akun
                    </div>

                    <div className="bmc-content-4" >
                        Tentang Laruno
                    </div>

                    {/* <div className="bmc-content-4" >
                        Topik Belajar Laruno
                    </div> */}

                    <div
                        className={checkSelected("/order-history")}
                        onClick={e=>handleChangePage('/order-history')}   
                    >
                        History Transaksi
                    </div>

                    <div
                        className={checkSelected("/lms-dashboard")}
                        onClick={e=>handleChangePage('/lms-dashboard')}
                    >
                        LMS
                    </div>

                </div>
                     {/* <div className="burger-menu-01-content"></div> */}

            </div>
        )
    }
    
}

export default Modal