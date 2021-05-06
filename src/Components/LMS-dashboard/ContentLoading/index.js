import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';

function ContentLoading () {

    return (
        <div className="dashboard-content-19">
            <Skeleton
                width={150}
                height={95}
                duration={0.5}
            />
            <div className="c2" style={{marginLeft : 20}}>
                <Skeleton
                    width={300}
                    height={15}
                    duration={0.5}
                />
                 <Skeleton
                    style={{marginTop : 20}}
                    width={300}
                    height={15}
                    duration={0.5}
                />
            </div>
        </div>
    )

}

export default ContentLoading;