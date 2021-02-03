import React  from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// STYLE
import './style.css'

function DropDown (props) {

    const { text , 
            style , 
            showMenu , 
            setShowMenu ,
            dataMenu,
            setter,
            value,
            objName,
            isError,
            message,
        } = props

    return (
        <div
            className="dropdown-comp" 
            style={{
                    // flexDirection : showMenu ? "row" : "column",
                    ...style
            }}
        >
            <div style={{width : "100%"}}>{text}</div>
            <div
                style={{
                    height : showMenu && 157, 
                    overflowY : showMenu && "auto",
                    paddingTop : !showMenu ? 3 : 4.5,
                    border : isError && "1px solid #ff3333"
                }}
                className="dropdown-comp-i"
            >
                <div 
                    // style={{position : "sticky",top : 0}}
                >
                    <span style={{zIndex : 99}} >
                        {
                            value &&
                            objName.map((el2,index)=>{
                                return value[el2] + " "
                            }) 
                        }
                    </span>
                    {
                        showMenu ? 
                            <ExpandLessIcon onClick={e=>setShowMenu(false)} className="icon"/> :
                            <ExpandMoreIcon onClick={e=>setShowMenu(true)} className="icon"/>
                    }
                </div>
                {
                    showMenu && dataMenu.map((el,index)=>{
                        return (
                            <div
                                onClick={e=>[setter(el),setShowMenu(false)]}
                                style={{marginTop : 8,zIndex : 0,cursor : "pointer"}} 
                                key={index}
                            >
                                <span 
                                    style={{zIndex : 0}}
                                > 
                                    {
                                        objName.map((el2,index)=>{
                                            return el[el2] + " "
                                        })
                                    }
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            {
                isError &&
                <span className="auth-input-error-m">
                    {message}
                </span>
            }
        </div>
    )

}

export default DropDown;