import React , { useState } from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Menu (props) {

    const { showMenu,setShowMenu } = props

    // LOCAL STATE
    const [dummyData] = useState(['JNE','TIKI','SICEPAT',"ANTER AJA","GOSEND","GRAB"])

    let renderData = () => {
        return dummyData.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                >
                    {
                        el
                    }
                </div>
            )
        })
    }

    return (
        <div style={{
                        height : showMenu && 500, 
                        overflowY : showMenu && "scroll",
                        marginTop : 26,
                        width : "86%"
                    }}  
            className="card-06-tc-c1"
        >
            <div style={{height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                <span>{dummyData[0]}</span>
                {
                    showMenu ? 
                        <ExpandLessIcon onClick={e=>setShowMenu(false)} className="card-06-tc-c1-1-icon"/> :
                        <ExpandMoreIcon onClick={e=>setShowMenu(true)} className="card-06-tc-c1-1-icon"/>
                }
            </div>
            {
                showMenu && renderData()
            }
        </div>
    )

}

export default Menu