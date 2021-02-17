import React, { useEffect, useState } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT
import List from '../../Components/LandingPage/List'
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'
import Footer from '../../Components/LandingPage/Footer'
import { Email , Login , Register } from '../../Components/CardNLog'

// IMAGES 
import image1 from '../../Assets/Images/landing-page-fix.jpg'
import image1Mobile from '../../Assets/Images/landing-page-1.png'
import image2 from '../../Assets/Images/laruno.png'
import image3 from '../../Assets/Images/img-lp.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function LandingPage () {

    // GET MEDIA QUERY
    window.matchMedia("(max-width: 600px)")

    // LOCAL STATE
    const [video,setVideo] = useState(null)

    // LOCAL STATE INPUT
    const [email,setEmail] = useState(null)

    // LOCAL STATE NAVIGATION 
    const [selectedTab,setSelectedTab] = useState(0)

    // LOCAL STATE DATA PRODUCT
    const [product] = useState([{ 
                product_id : "6024db550af735001c2b7e8d" , 
                utm : "origin",
                quantity : 1
            }
        ]
    )

    useEffect(()=>{
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/uploads/media/list`
        })
        .then(({data})=>{
            console.log(data.data , '  <<<<<< VALUE')
            let res = data.data.filter(e=>e.filetype === 'video')[0]
            console.log(res.url , ' <<<< VIDEOS')
            setVideo(res.url)
        })
        .catch(err=>{
            console.log(err , ' <<<<')
        })
    },[])

    let handleLogin = () => {
        return new Promise((resolve,reject)=>{
            axios({
                method : 'POST',
                url : `${SWAGGER_URL}/carts/add`,
                data : {
                    product_id : ["6024db550af735001c2b7e8d"],
                },
                headers : {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(({data})=>{
                return axios({
                    method : 'POST',
                    url : `${SWAGGER_URL}/orders/store`,
                    data : {
                        items : product,
                        coupon : null
                    },
                    headers : {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                })  
            })
            .then(({data})=>{
                console.log(data , ' <<<< PALING PENTING IKI')
                resolve(data)
            })
            .catch(err=>{
                reject(err)
                console.log(err.response ,  ' <<< ERROR')
            })
        })
        // axios({
        //     method : 'POST',
        //     url : `${SWAGGER_URL}/orders/store`,
        //     data : {
        //         items : product,
        //         coupon : null
        //     },
        //     headers : {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //     }
        // })
        // .then((data)=>{
        //     console.log(data , ' <<<< VALUE DATA FIXXX >>>>')
        // })
        
    }

    let renderPage = () => {
        if (selectedTab === 0) {
            return (
                <Email
                    email={email}
                    setEmail={setEmail}
                    setSelectedTab={setSelectedTab}
                    landingPage={true}
                    style={{width : "110%", marginTop : 35}}
                />
            )
        }else if (selectedTab === 1) {
            return (
                <Login
                    landingPage={true}
                    email={email}
                    style={{width : "110%", marginTop : 35}}
                    finishFunction={handleLogin}
                    // title={"Login"}
                    // setSelectedPage={setSelectedPage}
                />
            )
        }else {
            return (
                <Register
                    landingPage={true}
                    email={email}
                    style={{width : "110%", marginTop : 35}}
                    // setSelectedPage={setSelectedPage}
                />
            )
        }
    }

    return (
        <div className="lp-10-container">
            <div className="lp-10-c1">
                <img
                    className="img-1"
                    src={ window.matchMedia("(max-width: 600px)").matches  ? image1Mobile : image1}
                    alt={'landing-page-1'}
                />
                 <img
                    className="img-2"
                    src={image2}
                    alt={'landing-page-2'}
                />
                <h1>
                    #Gamification In Education
                </h1>
            </div>

            {
                video ?
                <video className="lp-10-c2" controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>:
                <div className="lp-10-c2">

                </div>
            }

            <h2>Lorem Ipsum Dolor</h2>

            <List/>

            <img
                className="lp-10-c4"
                src={image3}
                alt="landing-page-content"
            />

            {
                renderPage()
            }

            <Footer/>

        </div>
    )

}

export default LandingPage