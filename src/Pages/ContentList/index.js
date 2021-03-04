import React , { useEffect } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT 
import { Search , FirstTitle , Item, Carousel } from '../../Components/ContentList'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Content () {

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
            console.log(data , ' <<< VALUE DATA')
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERROR')
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
                [0,1,2].map((e,index)=>{
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
                [0,1,2].map((e,index)=>{
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

        </div>
    )

}

export default Content