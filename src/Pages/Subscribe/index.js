import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT 
import Content from '../../Components/ContentList/Item/index'
import { Email , Login , Register } from '../../Components/CardNLog'

// IMAGES MEDIA SOCIAL
import ig from '../../Assets/Images/instagram.png' 
import fb from '../../Assets/Images/facebook.jpg' 
import yt from '../../Assets/Images/yt.png' 
import tt from '../../Assets/Images/tt.png' 

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Subscribe () {

    // LOCAL STATE DATA CONTENT
    const [dataNews,setDataNews] = useState(null)

    // LOCAL STATE INPUT
    const [email,setEmail] = useState(null)

    // LOCAL STATE NAVIGATION 
    const [selectedTab,setSelectedTab] = useState(0)

    useEffect(()=>{
        getData()
    },[])

    let getData = () => {
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            url : `${SWAGGER_URL}/userproducts?trending=true&favorite=false&as_user=false&done=false&offset=1&limit=10&sortby=created_at&sortval=desc`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).
        then(({data})=>{
            console.log(data , ' <<<< DATA')
            setDataNews(data.data)
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERROR RESPONS ><><><>><><')
        })
    }

    let renderPage = () => {
        if (selectedTab === 0) {
            return (
                <Email
                    email={email}
                    setEmail={setEmail}
                    setSelectedTab={setSelectedTab}
                    landingPage={true}
                    style={{width : "110%", marginTop : 25}}
                />
            )
        }else if (selectedTab === 1) {
            return (
                <Login
                    landingPage={true}
                    email={email}
                    style={{width : "110%", marginTop : 25}}
                    // finishFunction={handleLogin}
                    // title={"Login"}
                    // setSelectedPage={setSelectedPage}
                />
            )
        }else {
            return (
                <Register
                    landingPage={true}
                    email={email}
                    style={{width : "110%", marginTop : 25}}
                    // finishFunction={handleLogin}
                    // setSelectedPage={setSelectedPage}
                />
            )
        }
    }

    return (
        <div className="subscribe-16-container">
            <div className="t1">
                Follow the good Vibes!, Here!
            </div>
            <div className="t1" style={{marginTop : 0}}>
                Ikuti Laruno di Social Media    
            </div>
            <div className="line">

            </div>

            <div className="list" style={{marginTop : 13}}>
                <img
                    alt="social-media-laruno"
                    src={fb}
                />
                <div className="c1">
                    <div className="t1">
                        @laruno.com
                    </div>
                   
                </div>
            </div>

            <div className="list">
                <img
                    alt="social-media-laruno"
                    src={ig}
                />
                <div className="c1">
                    <div className="t1">
                        @laruno.com
                    </div>
                   
                </div>
            </div>

            <div className="list">
                <img
                    alt="social-media-laruno"
                    src={tt}
                />
                <div className="c1">
                    <div className="t1">
                        @laruno.com
                    </div>
                   
                </div>
            </div>

            <div className="list">
                <img
                    alt="social-media-laruno"
                    src={yt}
                />
                <div className="c1">
                    <div className="t1">
                        @laruno.com
                    </div>
                   
                </div>
            </div>

            <div className="line">

            </div>

            <div className="t2">
                Content Untuk Kamu
            </div>

            {
                dataNews ? dataNews.filter((e,i)=> i < 3).map((e,index)=>{
                    return (
                        <Content
                            e={e}
                            index={index}
                        />
                    )
                }) : <div>Data Tidak ditemukan</div>
            }
            <div className="line" style={{marginBottom : -15}}>

            </div>

            {
                renderPage()
            }

        </div>
    )

}

export default Subscribe