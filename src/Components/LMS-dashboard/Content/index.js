import React from 'react'

// STYLE
import './style.css'

function Content (props) {
    
    const {image,title,desc,menthor} = props.data

    return (
        <div className="dashboard-content-19">
            <img
                src={image}
                alt="image-content"
                className="c1"
            />
            <div className="c2">
                <span className="t1">
                    {title}
                </span>
                <div className="t2">
                    Admin Laruno
                </div>
            </div>
        </div>
    )
}

export default Content