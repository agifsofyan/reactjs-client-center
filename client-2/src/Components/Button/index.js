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
       <button
        className="button-comp-style"
        onClick={e=>fn()}
        style={{...style}}
       >
           {
            loader ?   
             <Loader/> :
             text
           }
       </button>
    )

}

export default Button