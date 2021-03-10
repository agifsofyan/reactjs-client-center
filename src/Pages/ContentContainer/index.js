import React from 'react'

// STYLE
import './style.css'

// PAGES
import ContentList from '../ContentList'
import ContentDetail from '../ContentDetail'

function ContentContainer (props) {

    console.log(props.location.search , ' <<<< LOCATION >>>')

    return (
        <div className="content-container-12">
            {
                props.location.search === "" ?
                <ContentList {...props}/>  :  <ContentDetail {...props}/>
                
            }
        </div>
    )

}

export default ContentContainer