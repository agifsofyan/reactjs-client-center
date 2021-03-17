import React from 'react'

// MATERIAL ICON
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

// STYLE
import './style.css'

function AboutItem () {

    return (
        <div className="t1">
            <DesktopWindowsIcon
            />
            <div className="w1">
                Fast & effective
            </div>
            <div className="w2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>        
    )

}

export default AboutItem;