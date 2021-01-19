import React from 'react'

// MATERIAL ICONS
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// STYLE
import './style.css'

function FirstContent () {

    return (
        <div className="home-main-content-fc-container">

            <div className="home-main-content-fc-content">

                <div className="home-main-c-fc-c-lc">
                    <div className="hmc-fc-c-lc-1">
                        TMA-2 MODULAR HEADPHONE 
                    </div>
                    <div style={{width : "100%" ,  display : "flex", alignItems : "center" , marginTop : 30}}>
                        <div 
                            className="hmc-shop-title"
                            style={{
                                color : "#FF4500"
                            }}
                        >   
                            Shop Now
                        </div>
                        <ArrowForwardIosIcon className="hmc-shop-icon" style={{color : "#FF4500"}}/>
                    </div>
                </div>

                <div className="home-main-c-fc-c-rc">

                </div>

            </div>

        </div>
    )

}

export default FirstContent