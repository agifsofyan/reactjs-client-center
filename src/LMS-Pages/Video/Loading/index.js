import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';

function Loading () {

    const selector = document.getElementById('video-lms-loading-1')

    return (
        <div  className='videos-texts'>
            <div className="videos-live" id="'video-lms-loading-1">
                <Skeleton
                    width={selector && selector.offsetWidth}
                    height={400}
                    // style={{borderRadius : 14,marginTop : 14}}
                    duration={0.5}
                />
                    <Skeleton duration={0.5} width={selector && selector.offsetWidth} height={15} style={{marginTop : 13,borderRadius : 100 }} /> 
                    <Skeleton duration={0.5} width={selector && selector.offsetWidth} height={15} style={{marginTop : 6,borderRadius : 100 }} /> 
            </div>
        </div>
    )

}

export default Loading