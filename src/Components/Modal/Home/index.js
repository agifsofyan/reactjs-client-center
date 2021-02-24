import React from 'react'

// STYLING DI ../drawer.css

function Home (props) {

    const { handleModalClose , history , location } = props

    let handleChangePage = (route,e) => {
        e.preventDefault()
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
            <a
                href="/" 
                target="_blank"
                style={{marginTop : 19}}
                className={checkSelected("/")}
                onClick={e=>handleChangePage('/',e)}
            >
                Beranda
            </a>

            {
                !localStorage.getItem('token') &&
                <a
                    href="/register" 
                    target="_blank"
                    className={checkSelected("/register")}
                    onClick={e=>handleChangePage('/register',e)} 
                >
                    Daftar Sekarang Gratis 3 Bulan
                </a>
            }

            <a 
                href="/about-us" 
                target="_blank"
                className={checkSelected("/about-us")}
                onClick={e=>handleChangePage('/about-us',e)} 
            >
                Tentang Laruno
            </a>

            <a 
                href="/topic-list" 
                target="_blank"
                className={checkSelected("/topic-list")}
                onClick={e=>handleChangePage('/topic-list',e)} 
            >
                Topik Belajar Laruno
            </a>

            {
                !localStorage.getItem('token') &&
                <a
                    href="/login" 
                    target="_blank"
                    className={checkSelected("/login")}
                    onClick={e=>handleChangePage('/login',e)}
                >
                    Masuk ke Akun Anda
                </a>

            }

            {
                localStorage.getItem('token') &&
                <a
                    href="/order-history" 
                    target="_blank"
                    className={checkSelected("/order-history")}
                    onClick={e=>handleChangePage('/order-history',e)}   
                >
                    History Transaksi
                </a>
            }

            {
                localStorage.getItem('token') &&
                <a
                    href="/lms-dashboard" 
                    target="_blank"
                    className={checkSelected("/lms-dashboard")}
                    onClick={e=>handleChangePage('/lms-dashboard',e)}
                >
                    LMS
                </a>
            }

            {
                localStorage.getItem('token') &&
                <a
                    className={checkSelected("")}
                    onClick={e=>[handleChangePage('/',e),localStorage.removeItem('token')]}
                >
                    Keluar
                </a>
            }

        </div>
    )

}

export default Home