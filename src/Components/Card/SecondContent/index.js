import React from 'react'

// STYLE
import './style.css'

function SecondContent (props) {

    const { bump , index } = props

    return (
        <div style={{marginTop : index !== 0 && 0 }} className="card-06-sc-container">
            
            <div className="card-06-sc-c1" style={{borderTop : index !== 0 && "none"}}>
                <div className="card-06-sc-c1-fc">
                    <input type="checkbox"/>
                    <span>{bump.bump_heading}</span>
                </div>
            </div>
            <div className="card-06-sc-c2">
                <img
                    className="card-06-sc-c2"
                    src={bump.bump_image}
                    alt="dummy-card"
                />
            </div>
            <div className="card-06-sc-c3">
                <div className="card-06-sc-c3-fc">
                    <h4>{bump.bump_name}</h4>
                    <div>
                        {bump.bump_desc}
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