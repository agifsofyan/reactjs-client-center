import React from 'react'

function User (props) {

    const { detailData } = props

    return (
        <div className="c1">
            <div className="t3">
                <div className="img">
                    
                </div>
                <div className="t1">
                    { detailData && detailData.content && detailData.content.author.name}
                </div>
            </div>
        </div>
    )

}

export default User