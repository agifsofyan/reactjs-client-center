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
                className={checkSelected("/home")}
                onClick={e=>handleChangePage("/home")}
            >
                Beranda
            </div>

            <div className='bmc-content-4'>
                Tentang Laruno
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-profile")}
                onClick={e=>handleChangePage("/lms-dashboard")}
            >
                My Profile
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-dashboard")}
                onClick={e=>handleChangePage("/lms-dashboard")}
            >
                LMS Dashboard
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-webinar")}
                onClick={e=>handleChangePage("/lms-webinar")}
            >
                LMS Webinar
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-video-list")}
                onClick={e=>handleChangePage("/lms-video-list")}
            >
                LMS Video
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-tips-list")}
                onClick={e=>handleChangePage("/lms-tips-list")}
            >
                LMS Tips
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-module")}
                onClick={e=>handleChangePage("/lms-module")}
            >
                LMS Module
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-group")}
                onClick={e=>handleChangePage("/lms-group")}
            >
                LMS Group
            </div>

            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-reseller")}
                onClick={e=>handleChangePage("/lms-reseller")}
            >
                LMS Reseller
            </div>

            <div
                className={checkSelected("/product-list")}
                onClick={e=>handleChangePage('/product-list')}
            >
                Produk Pembelajaran Laruno
            </div>

            <div className='bmc-content-4'>
                FAQ
            </div>
        </div>
    )

}

export default Home