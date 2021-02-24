import React from 'react'

// STYLING DI ../drawer.css

function Home (props) {

    const { handleModalClose , history , location } = props

    let handleChangePage = (route) => {
        history.push(route)
        handleModalClose()
    }

    let checkSelected = (current) => {
        if (location.pathname === current) {
            return "bmc-content-4-selected"
        }else {
            return "bmc-content-4"
        }
    }

    return (
        <div className="bmc-drawer-9">
            <div 
                style={{marginTop : 19}}
                className={checkSelected("/")}
                onClick={e=>handleChangePage('/')}
            >
                Beranda
            </div>

            {
                !localStorage.getItem('token') &&
                <div
                    className={checkSelected("/auth")}
                    onClick={e=>handleChangePage('/auth')} 
                >
                    Daftar Sekarang Gratis 3 Bulan
                </div>
            }

            <div 
                className={checkSelected("/about-us")}
                onClick={e=>handleChangePage('/about-us')} 
            >
                Tentang Laruno
            </div>

            <div 
                className={checkSelected("/topic-list")}
                onClick={e=>handleChangePage('/topic-list')} 
            >
                Topik Belajar Laruno
            </div>

            <div
                className={checkSelected("/auth")}
                onClick={e=>handleChangePage('/auth')}
            >
                Masuk ke Akun Anda
            </div>
            {
                localStorage.getItem('token') &&
                <div
                    className={checkSelected("/order-history")}
                    onClick={e=>handleChangePage('/order-history')}   
                >
                    History Transaksi
                </div>
            }

            {
                localStorage.getItem('token') &&
                <div
                    className={checkSelected("/lms-dashboard")}
                    onClick={e=>handleChangePage('/lms-dashboard')}
                >
                    LMS
                </div>
            }

            {
                localStorage.getItem('token') &&
                <div
                    className={checkSelected("")}
                    onClick={e=>[handleChangePage('/'),localStorage.removeItem('token')]}
                >
                    Keluar
                </div>
            }

        </div>
    )

}

export default Home