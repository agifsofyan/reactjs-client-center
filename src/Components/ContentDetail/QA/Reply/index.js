import React , { useState } from 'react'

function Reply (props) {

    // PARENT PROPS
    const { e , reaction } = props

    return (
        <div className="d5">

            <img
                alt="avatar-user"
                src={e.user.avatar}
                className="t1"
            />
            {/* <div className="t1">
                RH
            </div> */}
            
            <div className="t2">
                <div className="d1">
                    {e.user.name}
                </div>
                <div className="d2">
                    {reaction.comment}
                </div>
                <div className="d3">
                    <div className="like">
                        {e.likes.length} likes
                    </div>
                    <span>
                        Jawab
                    </span>
                    <div className="dot">
                        
                    </div>
                    <span 
                        // onClick={()=>addLike(e._id)}
                    >
                        Setuju
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Reply