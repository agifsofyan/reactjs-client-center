import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT 
import { Search , FirstTitle , Item, Carousel , Podcast , Sort } from '../../Components/ContentList'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Content (props) {

    const [dataNews,setDataNews] = useState(null)
    const [NewsTemp,setNewsTemp] = useState(null)

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
            setNewsTemp(data.data)
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

            <Search
                setDataNews={setDataNews}
                NewsTemp={NewsTemp}
            />

            <Sort
                dataNews={dataNews}
                setDataNews={setDataNews}
                NewsTemp={NewsTemp}
            />

            <FirstTitle/>

            <div className="title-2">
                <h3>
                    Konten Terbaru
                </h3>
            </div>

            {
                dataNews && dataNews.filter(e=>!e.isBlog).length > 0 ? dataNews.filter(e=>!e.isBlog).map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                }) : <div>Data Tidak ditemukan</div>
            }

            <div className="title-2">
                <h3>
                    Semua Konten
                </h3>
            </div>

            {
                dataNews && dataNews.filter(e=>e.isBlog).length > 0 ? dataNews.filter(e=>e.isBlog).map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                })  : <div>Data Tidak ditemukan</div>
            }

            <div className="title-2">
                <h3>
                    Konten Video
                </h3>
            </div>

            <div
                className="first-title-content-11"
                style={{marginTop : 1}}
            >
                <h2>
                    Lagi punya waktu luang? Silahkan tonton video edukasi dibawah gratis
                </h2>

            </div>

            <Carousel/>

            <div className="title-2">
                <h3>
                    Konten Podcast
                </h3>
            </div>

            <div
                className="first-title-content-11"
                style={{marginTop : 1,marginBottom: 10, height : "auto" }}
            >
                <h2>
                Temani aktivitasmu dengan Podcast edukasi. Silahkan dengarkan gratis!
                </h2>

            </div>
            <Podcast/>
        </div>
    )

}

export default Content