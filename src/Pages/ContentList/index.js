import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT 
import { Search , FirstTitle , Item, Carousel , Podcast } from '../../Components/ContentList'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Content (props) {

    const [dataNews,setDataNews] = useState(null)

    useEffect(()=>{
        axios({
            method : 'GET',
            url : `${SWAGGER_URL}/contents`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).
        then(({data})=>{
            setDataNews(data.data)
            console.log(data , ' <<< VALUE DATA')
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERROR RESPONS ><><><>><><')
        })
    },[])

    return (
        <div
            // style={{width : "100%" ,height : "99vh" , backgroundColor : "white",display : "flex"}}
            className="content-list-container-11"
        >

            <Search/>

            <FirstTitle/>

            <div className="title-2">
                <h3>
                    Featured Posts
                </h3>
            </div>

            {
                dataNews && dataNews.filter(e=>!e.isBlog).map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                })
            }

            <div className="title-2">
                <h3>
                    Laruno's Blog
                </h3>
            </div>

            {
                dataNews && dataNews.filter(e=>e.isBlog).map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                })
            }

            <div className="title-2">
                <h3>
                    Videos
                </h3>
            </div>

            <div
                className="first-title-content-11"
                style={{marginTop : 1}}
            >
                <h2>
                    Stay updated on the most important developments in Asia’s tech.
                </h2>

            </div>

            <Carousel/>

            <div className="title-2">
                <h3>
                    Podcast
                </h3>
            </div>

            <div
                className="first-title-content-11"
                style={{marginTop : 1,marginBottom: 10, height : 40 }}
            >
                <h2>
                    Stay updated on the most important developments in Asia’s tech.
                </h2>

            </div>
            <Podcast/>
        </div>
    )

}

export default Content