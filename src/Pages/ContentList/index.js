import React from 'react'

// COMPONENT 
import { Search , FirstTitle } from '../../Components/ContentList'

// STYLE
import './style.css'

function Content () {

    return (
        <div
            // style={{width : "100%" ,height : "99vh" , backgroundColor : "white",display : "flex"}}
            className="content-list-container-11"
        >

            <Search/>

            <FirstTitle/>

        </div>
    )

}

export default Content