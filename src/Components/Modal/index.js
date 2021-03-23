import React , { useState , useEffect } from 'react'

// MODULE
import { useHistory , useLocation } from 'react-router-dom'
import axios from 'axios'

// COMPONENT
import Header from './Header'
import WaContent from './WaContent'
import Social from './Social'
import Home from './Home'
import LMS from './LMS'

// MATERIAL ICONS
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'
import './drawer.css'

function Modal (props) {

    // HISTORY
    const history = useHistory()

    // LOCATION
    const location = useLocation()

    // const [animationEnd,setAnimationEnd] = useState(false)

    // WIDTH
    const [width,setWidth] = useState(0)

    // LOCAL STATE DATA USER
    const [user,setUser] = useState(null)

    const {
        // modalClose,
        // setModalClose,
        showModal,
        setShowModal
    } = props
    
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

    useEffect(()=>{
        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/users/me`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data.user.name , ' <<<< RES DATA PROFILE')
            if (data && data.data) {
                setUser(data.data.user)
                console.log(data.data.user , ' <<, fix <><>>< pppp')
            } 
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERORR')
        })
    },[])

    let handleModalClose = () => {
        setWidth(0)
        setTimeout(()=>{
            setShowModal(false)
        },900)
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

                    <Header
                        handleModalClose={handleModalClose}
                    />
                    
                    <div className="bmc-content-2">
                        Mau belajar online yang menyenangkan, efektif dan interaktif? 
                    </div>

                    <div style={{marginTop : 20 , width : 215, height : 30 , borderRadius : 5}} className="card-06-tc-c1">
                        <div 
                            className="card-06-tc-c1-1" 
                            style={{alignItems : "center",height : "100%",cursor : "pointer"}}
                            onClick={e=>[history.push("/product-list"),handleModalClose()]}
                        >
                            <span style={{fontSize :  12 , fontWeight : 300, width : "100%"}}>
                                Pilih Pembelajaran Sekarang
                            </span>
                            {/* <ExpandMoreIcon className="card-06-tc-c1-1-icon"/> */}
                            <NavigateNextIcon className="card-06-tc-c1-1-icon"/>
                        </div>
                    </div>

                    <div style={{marginTop : 20}} className="bmc-content-3"></div>

                    {/* HOME MENU DRAWER */}

                    {
                        // location.pathname.split('-')[0] === "/lms" ?
                        localStorage.getItem("token") ?
                        <LMS
                            history={history}
                            location={location}
                            handleModalClose={handleModalClose}
                            user={user}
                        /> :
                        <Home
                            history={history}
                            location={location}
                            handleModalClose={handleModalClose}
                        />
                    }
                    
                    <div style={{marginTop : 5}} className="bmc-content-3"></div>

                    <WaContent/>

                    <div style={{marginTop : 15}} className="bmc-content-3"></div>

                    <Social/>
                    
                    <div style={{marginTop : 15}} className="bmc-content-3"></div>

                    <div className="bmc-content-7">
                        <div
                            onClick={e=> [history.push('/privacy-policy'),handleModalClose()]}
                        >
                            Privacy Policy
                        </div>
                        <div 
                            onClick={e=> [history.push('/terms-and-condition'),handleModalClose()]}
                            style={{marginLeft : 20}}
                        >
                            Terms & Condition
                        </div>
                        <div 
                            onClick={e=> [history.push('/faq'),handleModalClose()]}
                            style={{marginLeft : 20}}
                        >
                            FAQ
                        </div>
                    </div>
                    <div className="bmc-content-8">
                        Copyright @ 2021 larunocom
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Modal