import React , { useState } from 'react'

// MATERIAL UI ICONS
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// STYLE
import './style.css'

function Expand () {

    const [data] = useState([0,1,2,3,4])
    const [lastLength] = useState(data.length-1)

    let renderData = () => {
        return data.map((e,index)=>{
            return (
                <div className="pdce-c13-container">
                    <div 
                        className="pdce-c13-content"
                        style={{
                            borderTopRightRadius : index === 0 && 5,
                            borderTopLeftRadius : index === 0 && 5,
                            borderBottom : index === lastLength && "0.5px solid #000000",
                            borderBottomRightRadius : index === lastLength && 5,
                            borderBottomLeftRadius : index === lastLength && 5,
                        }}
                    >
                        <div className="pdce-c13-content-1">
                            Do Some Soul Searching
                        </div>

                        <div className="pdce-c13-content-2">
                        <div className="pdce-c13-content-2-a">
                            30 minutes
                        </div>
                        <ExpandMoreIcon
                            className="pdce-c13-content-2-b"
                        />
                        </div>
                    </div>
                    {/* <div style={{width : "100%" , height : 60, backgroundColor : "#C4C4C4"}}>

                    </div> */}
                </div>
            )
        })
    }

    return (
        <div className="product-detail-c13-expand">
           {
               renderData()
           }
        </div>
    )

}

export default Expand