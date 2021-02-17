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
            {/* LMS MENU */}
            <div 
                style={{marginTop : 19}}
                className={checkSelected("/lms-dashboard")}
                onClick={e=>handleChangePage('/lms-dashboard')}
            >
                Beranda
            </div>
        </div>
    )

}

export default Home