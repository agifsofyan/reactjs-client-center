import React , { useState } from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// IMAGE
import newsImg from '../../../Assets/Images/news-img.png'

// STYLE
import './style.css'

function Item (props) {

    // PARENT PROPS
    const { style , e } = props
    
    // HISTORY
    const history = useHistory()

    // console.log(e , ' <<< VALUE E')

    return (
        <div
            style={{...style}}
            className="cl-item-11"
            onClick={e2=>history.push(`/blog?title=${e.content.title}&id=${e._id}`)}
        >
            <img
                src={newsImg}
                alt={"news"}
            />

            <div className="c1">
                <div className="t1">
                    { e.content && e.content.title.slice(0,34) + ( e.content.title.length >= 34 ? "...." : "" )}
                </div>
                <div className="t2">
                    {e.content && e.content.desc.slice(0,90) + ( e.content.desc.length >= 90 ? "...." : "" )}
                </div>
                <div className="t3">
                    <div className="img">
                        
                    </div>
                    <div className="t1">
                        John Doe . 4h ago. 5 min read
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Item