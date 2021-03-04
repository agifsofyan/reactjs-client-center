import React from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Menu (props) {

    const { showMenu,setShowMenu , style , titleStyle , data , selected , setSelected } = props

    let renderData = () => {
        return data.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{paddingLeft : 10 ,height : 20,marginBottom : 10,width : "100%" ,}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>[setSelected(el),setShowMenu(false)]}
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
                        overflowY : showMenu && "auto",
                        marginTop : 26,
                        width : "86%",
                        ...style,
                        height : showMenu ? 145 : style.height, 
                        borderWidth : 0.1
                        // backgroundColor : "pink"
                    }}  
            className="card-06-tc-c1"
            onClick={e=>setShowMenu(!showMenu)}
        >
            <div style={{width : "100%" , height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                <span style={{paddingLeft : 10 , color : "#959595", fontWeight : 400  ,...titleStyle}}>{ selected}</span>
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