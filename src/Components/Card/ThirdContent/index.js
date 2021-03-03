import React , { useState } from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// COMPONENT
// import Loader from '../../../Components/Loader'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import './style.css'

function ThirdContent (props) {

    // PARENT PROPS
    const { 
            coupons , 
            selectedCoupon , 
            setSelectedCoupon , 
            sale,
            setSale,
            saleBef,
            minDis,setMinDisk
            // handleOrder , 
            // loadingOrder,
            // price,
            // cart
        } = props

    // LOCAL STATE
    const [showMenu,setShowMenu] = useState(false)

    let handleCoupon = (el) => {
        setSelectedCoupon(el)

        let { value , max_discount } = el
        // let res = sale - value
        // let disk = value/sale * 100
        // console.log(el , ' <<<< VALUE EL')
        // let disk = Math.ceil((value / 100) * saleBef)
        // if (disk > max_discount ) {
        //     // console.log('HERE')
        //     disk = max_discount
        // }
        // console.log(disk , ' <<<< DISK')
        // setDisPre( Math.ceil(disk) )
        // let num = sale
        // let num = 
        // console.log(saleBef , " , << SALE BEF")
        // console.log(sale , ' <<< VALUE SALE')
        setShowMenu(false)

    }

    // RENDER MENU
    let renderMenu = () => {
        return coupons.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>handleCoupon(el)}
                >
                    <div>
                        {
                            el.name
                        }
                    </div>
                    <div>
                        { el.max_discount && `Mendapatkan diskon sebesar ${ moneyConvert(el.max_discount.toString(),"Rp. ")}`}
                    </div>
                </div>
            )
        })
    }

    return (
        <div 
            className="card-06-tc-container"
            style={{marginBottom : showMenu && 40}}    
        >
            <div 
                style={{height : showMenu && 220, overflowY : showMenu && "auto"}}  
                className="card-06-tc-c1"
                onClick={e=>setShowMenu(!showMenu)}
            >
                <div style={{height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                    <span>{ selectedCoupon ? selectedCoupon.name : "Pilih Kupon"}</span>
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
            {
                minDis ?
                <div className="card-06-tc-c2">
                    Mendapat diskon sebesar { moneyConvert(minDis.toString(),"Rp.")}
                </div> : null
            }
            {/* <div className="card-06-tc-c3">
                <div className="c06-tc-c3-1">
                    <div className="c06-tc-c3-1-ta" style={{marginTop :0}}>
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center"}}>
                            <div className="c06-tc-c3-1-ta-text">Courses : </div>
                            <div className="c06-tc-c3-1-ta-bold"> {cart.length}</div>
                        </div>
                        <span className="c06-tc-c3-1-ta-text" style={{paddingTop : 2}}>
                            {cart.length}
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
                            {moneyConvert(price.toString(),"Rp. ")}
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
            </div> */}
        </div>
    )

}

export default ThirdContent