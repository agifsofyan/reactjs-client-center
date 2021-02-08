import React from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Menu (props) {

    const { showMenu,setShowMenu , address , selectedAddress,setSelectedAddress } = props

    let renderData = () => {
        return address.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>[setSelectedAddress(el),setShowMenu(false)]}
                >
                    {
                        el.detail_address
                    }
                </div>
            )
        })
    }

    return (
        <div style={{
                        height : showMenu && 157, 
                        overflowY : showMenu && "scroll",
                        marginTop : 26,
                        width : "86%"
                    }}  
            className="card-06-tc-c1"
            onClick={e=>setShowMenu(!showMenu)}
        >
            <div style={{height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                <span 
                    style={{fontWeight : 300,fontSize : 18}}
                >
                    { 
                        selectedAddress ?
                        selectedAddress.detail_address.slice(0,40)  + ( selectedAddress.detail_address.length > 40 ? "....." : "" ) :
                        "Pilih Alamat"
                    }
                </span>
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