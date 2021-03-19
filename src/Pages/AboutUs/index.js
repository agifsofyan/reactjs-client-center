import React from 'react'

// COMPONENTS
import { Content1 ,Carousel , AboutItem , Footer  } from '../../Components/AboutUs'

// IMAGES
import logo from '../../Assets/Images/logo-laruno.png'

// STYLE
import './style.css'

function AboutUs () {
    
    return (
        <div
            className="about-us-13"
        >
           
            <Content1/>

            <img
                src={logo}
                className="c2"
            />

            <div className="c3">
                Always at Service
            </div>

            <div className="c4">
                <div>Splendid ideas for starting new business</div>
            </div>

            <div className="c5">
                <AboutItem/>
                <AboutItem/>
            </div>
            <div className="c5" style={{marginTop : 35}}>
                <AboutItem/>
                <AboutItem/>
            </div>

            <Carousel/>
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0525882571847!2d106.60764831471691!3d-6.25680299547118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc6668211c21%3A0x9eae2509126db0bd!2sLARUNO.COM%20(Ruko%20Darwin%20No.%202)!5e0!3m2!1sid!2sid!4v1615875785954!5m2!1sid!2sid" 
                    width="100%" 
                    height="400" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy">
                    
            </iframe>
            <Footer/>
        </div>
    )

}

export default AboutUs