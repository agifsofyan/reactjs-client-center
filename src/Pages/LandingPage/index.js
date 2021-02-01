import React, { useEffect, useState } from 'react'

// MODULE
import axios from 'axios'

// COMPONENT
import List from '../../Components/LandingPage/List'
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'
import Footer from '../../Components/LandingPage/Footer'

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

    console.log(window.matchMedia("(max-width: 600px)") , ' <<<< SCREEN')

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

            <h2>
                Lorem Ipsum Dolor
            </h2>

            <List/>

            <img
                className="lp-10-c4"
                src={image3}
                alt="landing-page-content"
            />

            <h3>
                Isi Form Dibawah
            </h3>

            <h4>
                Cari tahu apa saja topik favorit yang ingin kamu pelajari lebih lanjut.
            </h4>

            <Input
                text={"Topic"}
                style={{width : "90%",borderRadius : 20,marginTop : 1}}
            />
            <Input
                text={"Email"}
                style={{width : "90%",borderRadius : 20}}
            />
            <Input
                text={"Nama"}
                style={{width : "90%",borderRadius : 20}}
            />
            <Input
                text={"Nomor Hp"}
                style={{width : "90%",borderRadius : 20}}
            />

            <Button
                text={"LANJUT"}
                style={{width : "90%",marginTop : 22 }}
            />

            <Footer/>

        </div>
    )

}

export default LandingPage