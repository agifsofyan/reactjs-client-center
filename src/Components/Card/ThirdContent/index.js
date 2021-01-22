import React , { useState } from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// COMPONENT
import Loader from '../../../Components/Loader'

// STYLE
import './style.css'

function ThirdContent (props) {

    // PARENT PROPS
    const { 
            coupons , 
            selectedCoupon , 
            setSelectedCoupon , 
            handleOrder , 
            loadingOrder,
        } = props

    // LOCAL STATE
    const [showMenu,setShowMenu] = useState(false)

    // RENDER MENU
    let renderMenu = () => {
        return coupons.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>setSelectedCoupon(el)}
                >
                    {
                        el.code
                    }
                </div>
            )
        })
    }

    return (
        <div className="card-06-tc-container">
            <div style={{height : showMenu && 220, overflowY : showMenu && "scroll"}}  className="card-06-tc-c1">
                <div style={{height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                    <span>{selectedCoupon.code}</span>
                    {
                        showMenu ? 
                            <ExpandLessIcon onClick={e=>setShowMenu(false)} className="card-06-tc-c1-1-icon"/> :
                            <ExpandMoreIcon onClick={e=>setShowMenu(true)} className="card-06-tc-c1-1-icon"/>
                    }
                </div>
                {
                    showMenu && coupons &&
                    renderMenu()
                }
            </div>
            <div className="card-06-tc-c2">
                Mendapat diskon sebesar 75%
            </div>
            <div className="card-06-tc-c3">
                <div className="c06-tc-c3-1">
                    <div className="c06-tc-c3-1-ta" style={{marginTop :0}}>
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center"}}>
                            <div className="c06-tc-c3-1-ta-text">Courses : </div>
                            <div className="c06-tc-c3-1-ta-bold"> 5</div>
                        </div>
                        <span className="c06-tc-c3-1-ta-text" style={{paddingTop : 2}}>
                            Rp 9.500.000
                        </span>
                    </div>
                    <div className="c06-tc-c3-1-ta">
                        <span className="c06-tc-c3-1-ta-text">Harga : </span>
                        <span className="c06-tc-c3-1-ta-text">Rp 6.800.000</span>
                    </div>
                    <div className="c06-tc-c3-1-ta">
                        <span className="c06-tc-c3-1-ta-text">Hemat : </span>
                        <span className="c06-tc-c3-1-ta-text">Rp 2.200.000</span>
                    </div>
                    <div className="c06-tc-c3-1-tb">
                        <div className="c06-tc-c3-1-tb-text2">
                            Total Sale Price
                        </div>
                        <div className="c06-tc-c3-1-tb-bold2">
                            Rp 6.800.000
                        </div>
                    </div>
                    <div className="c06-tc-c3-1-tb">
                        <div
                            onClick={e=>handleOrder()} 
                            className="c06-tc-c3-1-tb-button">
                            {
                                loadingOrder ? 
                                <Loader/> :
                                "PILIH METODE PEMBAYARAN"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ThirdContent