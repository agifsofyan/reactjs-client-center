import React from 'react'

// IMAGES
import icon1 from '../../Assets/Images/404-2.png'
import icon2 from '../../Assets/Images/404.png'

// STYLE
import './style.css'

function Error404 () {

    return (
        <div className="error-404-container">
            <img
                src={icon1}
                className="error-404-container-1"
                alt="not-found-page"
            />
            <img
                src={icon2}
                className="error-404-container-2"
                alt="not-found-page-2"
            />
            <h1>
                Oh god, sorry about that, but this page does not exist!
            </h1>

            <button>
                Back to Home
            </button>

        </div>
    )

}

export default Error404