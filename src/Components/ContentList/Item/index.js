import React , { useState } from 'react'

// IMAGE
import newsImg from '../../../Assets/Images/news-img.png'

// STYLE
import './style.css'

function Item (props) {

    const { style } = props

    const [title] = useState(`
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
    `)
    const [content] = useState(`
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
    `)

    return (
        <div
            style={{...style}}
            className="cl-item-11"
        >

            <img
                src={newsImg}
                alt={"news"}
            />

            <div className="c1">
                <div className="t1">
                    {title.slice(0,54) + ( title.length >= 54 && "...." )}
                </div>
                <div className="t2">
                    {content.slice(0,90) + ( content.length >= 90 && "...." )}
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