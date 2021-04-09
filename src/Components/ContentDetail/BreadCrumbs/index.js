import React from 'react'

// STYLE
import './style.css'

function BreadCrumbs (props) {

    const { detailData } = props

    // console.log(detailData , ' <<< DETAIL BLOG HERE &&&&')
    
    return (
        <div className="cd-13-bc">
            <div className="t1">{"LARUNO / TOPIC / "}</div>
            {/* <div className="t2"> { props.location && props.location.search && props.location.search.split("=")[1].split("%").join(" ")}</div> */}
            <div className="t2"> { detailData && detailData.content.title}</div>
        </div>
    )

}

export default BreadCrumbs