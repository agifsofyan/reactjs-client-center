import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// COMPONENT 
import { Search , FirstTitle , Item, Carousel , Podcast , Sort } from '../../Components/ContentList'

// API
import {  SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Content (props) {

    const [showAll,setShowAll] = useState(3)

    const {
        dataNews , 
        NewsTemp ,
        setNewsTemp,
        setDataNews
    } = props

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
                dataNews && dataNews.filter((e,i)=> i === 0).length > 0 ? dataNews.filter((e,i)=> i === 0).map((e,index)=>{
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
                <div
                    onClick={e=>setShowAll( showAll === 3 ? 12 : 3)}
                >
                    <div className="text">
                        {
                            showAll === 3 ? "Lihat Semua" : "Lebih Sedikit"
                        }
                    </div>
                    <ArrowForwardIcon
                        style={{color : "#FF4500",marginLeft : 5}}
                    />
                </div>
            </div>

            {
                dataNews && dataNews.filter((e,i)=> i < showAll).length > 0 ? dataNews.filter((e,i)=> i < showAll).map((e,index)=>{
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