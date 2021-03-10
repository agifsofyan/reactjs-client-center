import React from 'react'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// STYLE
import './style.css'

function Carousel () {

    return (
        <div className="cl-carousel-11">
            <div className="c1">
                <NavigateBeforeIcon
                    className="c-icon-11"
                />
                <div className="content">

                </div>
                <NavigateNextIcon
                    className="c-icon-11"
                />
            </div>

            <div className="c2">
                Epic Business Concepts!
            </div>
            <div className="c3">
                Lorem Ipsum
            </div>
            <div className="c4">
                7 Desember 2020
            </div>
        </div>
    )

}

export default Carousel