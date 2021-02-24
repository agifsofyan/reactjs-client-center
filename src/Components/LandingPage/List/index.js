import React from 'react'

// IMAGES
import image1 from '../../../Assets/Images/lp-1.png'
// import image2 from '../../../Assets/Images/lp-2.png'
// import image3 from '../../../Assets/Images/lp-3.png'
// import image4 from '../../../Assets/Images/lp-4.png'


// STYLING DI pages/LandingPage

function List () {

    return (
        <div className="lp-10-c3">

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Belajar yang Menyenangkan
                </div>
                <div className="t2">
                    Kami membuat Program Pembelajaran yang Menyenangkan Dengan Mengusung Gamifikasi Dalam Proses Belajar
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Intensif dan Efektif
                </div>
                <div className="t2">
                    Dijaman dimana informasi / pendidikan bisa diakses dengan mudah. Maka, selain LARUNO.ID 
                    menjadi platform yang Uptodate juga Intensif dan Efektif dalam menyajikan konten.
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Layanan Konsultasi
                </div>
                <div className="t2">
                    Anda bisa bertanya seputar dunia bisnis dan karir dari 1 pintu layanan chat, bersama Mentor di LARUNO.ID
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    GRATIS 3 BULAN
                </div>
                <div className="t2">
                    Dalam Masa Launching (1 Bulan), LARUNO.ID Sedang Membuka Secara Gratis, Anda bisa Coba Sekarang Selama 3 Bulan.
                </div>
            </div>

        </div>
    )

}

export default List