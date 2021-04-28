import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';

function Loading () {

    const id = document.getElementById('webinar-loader-c-39')

    return (
        <div>
            <div className="nearest-webinar" id="webinar-loader-c-39" >
                <Skeleton
                    width={id &&id.offsetWidth}
                    height={350}
                    style={{padding : "0px 35px"}}
                />
            </div>
        </div>
    )
}

export default Loading