import React , { useState } from 'react'

// COMPONENTS
import { Content1 ,Carousel , AboutItem , Footer  } from '../../Components/AboutUs'
import Content from '../../Components/ProductList/Content'

// IMAGES
import logo from '../../Assets/Images/logo-laruno.png'

// STYLE
import './style.css'

function AboutUs () {

    const [carousel] = useState(
        [
            {
                title : "Tanpa Install Aplikasi",
                desc : "Saat Ini, LARUNO dikembangkan hanya dalam versi Website. Sehingga Kamu tidak perlu install apps"
            },
            {
                title : "Bisa Tanya Sepuasnya",
                desc : "Layanan Live Mentoring, Anda bisa bertanya seputar kendala entah dalam bisnis, karir dan investasi. Coba Sekarang Disini!"
            },
            {
                title : "Raihlah Level Tertinggi",
                desc : "Tentu ada benefit lainnya ketika kamu berada dalam level tertinggi. Persaingan dimulai ketika kamu Daftar. Terima Tantangan? Cek Disini!"
            }
        ]
    )

    const [index,setIndex] = useState(0)
    const [lastLen] = useState(carousel.length -1)
    
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
                Cara Baru Untuk Belajar Online 
            </div>

            <div className="c4">
                <div>Belajar Online yang Menyenangkan, Efektif dan Interaktif</div>
            </div>

            <div className="c5">
                <AboutItem
                    title={"Fast & Uptodate"}
                    desc={"Hanya Menyajikan Konten yang Uptodate dan Aplikatif"}
                />
                <AboutItem
                    title={"Growth Yourself"}
                    desc={"Pilih Kelas yang Dimana Anda Perlukan untuk Bertumbuh"}
                />
            </div>
            <div className="c5" style={{marginTop : 35}}>
                <AboutItem
                    title={"Practitioners"}
                    desc={"Dibuat Langsung Oleh Praktisi Berpengalaman Dalam Bidangnya"}
                />
                <AboutItem
                    title={"Mentoring"}
                    desc={"Kamu Bisa Gunakan Layanan Live Mentoring Untuk Bertanya Kepada Mentor LARUNO"}
                />
            </div>
            {
                <Carousel
                    title={carousel[index].title}
                    desc={carousel[index].desc}
                    index={index}
                    setIndex={setIndex}
                    lastLen={lastLen}
                />
            }
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0525882571847!2d106.60764831471691!3d-6.25680299547118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc6668211c21%3A0x9eae2509126db0bd!2sLARUNO.COM%20(Ruko%20Darwin%20No.%202)!5e0!3m2!1sid!2sid!4v1615875785954!5m2!1sid!2sid" 
                    width="100%" 
                    height="400" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy">
                    
            </iframe>
            <Footer/>
            <div className="c9">

            </div>
            <div className="c10">
                Daftar Kelas Disini
            </div>
            <Content/>
        </div>
    )

}

export default AboutUs