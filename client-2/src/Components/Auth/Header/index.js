import React  from 'react'

// STYLE
import './style.css'

function Header (props) {

    const {
        selectedTab,
        setSelectedTab
    } = props

    return (
        <div className="auth-header-root">
            <div className="auth-header-content">
                <div className="auth-header-before">
                    <div 
                        onClick={e=>setSelectedTab(0)}
                        className={selectedTab === 0 ? "auth-header-tab-selected" : "auth-header-tab" }
                    >
                        Login
                    </div>
                </div>
                <div className="auth-header-line">

                </div>
                <div className="auth-header-before">
                    <div 
                        onClick={e=>setSelectedTab(1)}
                        className={selectedTab === 1 ? "auth-header-tab-selected" : "auth-header-tab" }
                    >
                        Register
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header