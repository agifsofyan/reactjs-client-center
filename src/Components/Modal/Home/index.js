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

            <div className="bmc-content-4" >
                Tentang Laruno
            </div>

            <div
                className={checkSelected("/auth")}
                onClick={e=>handleChangePage('/auth')} 
            >
                Login & Register Akun
            </div>

            <div className="bmc-content-4" >
                Tentang Laruno
            </div>

            <div className="bmc-content-4" >
                Topik Belajar Laruno
            </div>

            <div
                className={checkSelected("/product-list")}
                onClick={e=>handleChangePage('/product-list')}
            >
                Produk Pembelajaran Laruno
            </div>
            {/* <div
                className={checkSelected("/order-history")}
                onClick={e=>handleChangePage('/order-history')}   
            >
                History Transaksi
            </div>

            <div
                className={checkSelected("/lms-dashboard")}
                onClick={e=>handleChangePage('/lms-dashboard')}
            >
                LMS
            </div> */}

        </div>
    )

}

export default Home