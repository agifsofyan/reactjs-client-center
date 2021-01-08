import React from 'react'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// STYLE 
import './style.css'

function Carousel () {

    return (
        <div className="product-detail-carousel">
            <NavigateBeforeIcon style={{fontSize : 40}}/>
            <div className="pdc-carousel-55">

            </div>
            <NavigateNextIcon style={{fontSize : 40}}/>
        </div>
    )

}

export default Carousel