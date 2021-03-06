import React from 'react'

// COMPONENT
import Loader from '../Loader/index'

// STYLE
import './style.css'

function Button (props) {

    const {
        text,
        fn,
        style,
        loader
    } = props

    return (
       <div
        className="button-comp-style"
        onClick={e=>fn(e)}
        style={{...style}}
       >
           {
            loader ?   
             <Loader/> :
             text
           }
       </div>
    )

}

export default Button