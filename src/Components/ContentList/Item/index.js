import React from 'react'

// STYLE
import './style.css'

function Item (props) {

    const { style } = props

    return (
        <div
            style={{...style}}
        >

        </div>
    )

}

export default Item