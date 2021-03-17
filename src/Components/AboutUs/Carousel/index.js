import React from 'react'

// STYLE
import './style.css'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Carousel () {

    return (
        <div className="c6">
            <div 
                className="t1"
                // style={{marginLeft : "4.5%"}}
            >
                <NavigateBeforeIcon/>
            </div>
            <div className="t2">
                <div className="f1">

                </div>
                <div className="f2">
                    Some Text Title Here
                </div>
                <div className="f3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis, risus ac porta rhoncus, elit libero semper tellus.
                </div>
            </div>
            <div 
                className="t1"
                // style={{marginRight : "4.5%"}}
            >
                <NavigateNextIcon/>
            </div>            
        </div>
    )

}

export default Carousel;