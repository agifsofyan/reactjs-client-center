import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'
import { useSelector } from 'react-redux'

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

function TopicList () {

    // GLOBAL STATE
    const topicList = useSelector(state=>state.product.topicList)
    console.log(topicList , ' <<< TOPIC LIST >>>')

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

    let renderTopic = () => {
        return topicList.map((e,index)=>{
            return (
            <div className="list" style={{marginTop : 13,cursor : "pointer"}}>
                <img
                    alt="social-media-laruno"
                    src={e.icon}
                />
                <div className="c1" style={{marginLeft : 40}}>
                    <div className="t1">
                        {e.name}
                    </div>
                </div>
            </div>
            )
        })
    }

    return (
        <div className="subscribe-16-container">
            <div className="t1">
                Pilih topik yang ingin anda pelajari
            </div>
            <div className="line">

            </div>

            {
                topicList && renderTopic()
            }

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

export default TopicList