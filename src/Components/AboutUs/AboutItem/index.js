import React from 'react'

// MATERIAL ICON
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

// STYLE
import './style.css'

function AboutItem (props) {

    const {
        title,
        desc
    } = props

    return (
        <div className="t1">
            <DesktopWindowsIcon
            />
            <div className="w1">
                {title}
            </div>
            <div className="w2">
                {desc}
            </div>
        </div>        
    )

}

export default AboutItem;