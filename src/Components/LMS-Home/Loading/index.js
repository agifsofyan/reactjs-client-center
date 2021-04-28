import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';

function Loading (props) {

    // const { selector } = props

    const selector = document.getElementById('rating-container-sel')

    return (
        <div id="rating-container-sel" style={{width : "100%"}}>
            <Skeleton
                width={selector && selector.offsetWidth}
                height={400}
                // style={{borderRadius : 14,marginTop : 14}}
                duration={0.5}
            />
            <Skeleton duration={0.5} width={selector && selector.offsetWidth} height={15} style={{marginTop : 13,borderRadius : 100 }} /> 
            <Skeleton duration={0.5} width={selector && selector.offsetWidth} height={15} style={{marginTop : 6,borderRadius : 100 }} /> 
        </div>
    )

}

export default Loading