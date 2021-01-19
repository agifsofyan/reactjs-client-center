import React from 'react'

// IMAGES 
import dummy from '../../../Assets/Images/dummy.jpg'

// STYLE
import './style.css'

function SecondContent () {

    return (
        <div className="card-06-sc-container">
            
            <div className="card-06-sc-c1">
                <div className="card-06-sc-c1-fc">
                    <input type="checkbox"/>
                    <span>Judul Order Bump</span>
                </div>
            </div>
            <div className="card-06-sc-c2">
                <img
                    className="card-06-sc-c2"
                    src={dummy}
                    alt="dummy-card"
                />
            </div>
            <div className="card-06-sc-c3">
                <div className="card-06-sc-c3-fc">
                    <h4>Title Goes Here</h4>
                    <div>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Donec semper tincidunt sodales. 
                        Vestibulum venenatis porttitor lorem, quis finibus 
                        velit viverra ac. Ut a varius nulla. 
                        Nam tempus dapibus leo non vulputate.
                    </div>
                </div>
            </div>
            <div className="card-06-sc-c4">
                <div className="card-06-sc-c4-fc">
                    Footer starting cats are CUTE little animals
                </div>
            </div>
        </div>
    )

}

export default SecondContent