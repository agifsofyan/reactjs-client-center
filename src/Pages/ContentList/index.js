import React from 'react'

// COMPONENT 
import { Search , FirstTitle , Item } from '../../Components/ContentList'

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

            <div className="title-2">
                <h3>
                    Featured Posts
                </h3>
            </div>

            {
                [0,1,2].map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                })
            }

            <div className="title-2">
                <h3>
                    Laruno's Blog
                </h3>
            </div>

            {
                [0,1,2].map((e,index)=>{
                    return (
                        <Item
                            e={e}
                            index={index}
                        />
                    )
                })
            }

        </div>
    )

}

export default Content