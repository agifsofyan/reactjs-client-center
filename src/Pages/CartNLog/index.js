import React , { useState } from 'react'

// MODULE
import Cookies from 'js-cookie';

// COMPONENT
import { Email , Login , Register } from '../../Components/CardNLog'

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// STYLE
import './style.css'

function CardNotLoggendIn (props) {

    // PARENT PROPS
    const { setSelectedPage } = props

    // LOCAL STATE
    const [email,setEmail] = useState(null)
    const [selectedTab,setSelectedTab] = useState(0)

    const cookieCart = Cookies.get('cartList') ? JSON.parse(Cookies.get('cartList')) : null;

    let renderPage = () => {
        if (selectedTab === 0) {
            return (
                <Email
                    email={email}
                    setEmail={setEmail}
                    setSelectedTab={setSelectedTab}
                />
            )
        }else if (selectedTab === 1) {
            return (
                <Login
                    email={email}
                    setSelectedPage={setSelectedPage}
                />
            )
        }else {
            return (
                <Register
                    email={email}
                    setSelectedPage={setSelectedPage}
                />
            )
        }
    }

    let renderDiskon = (data) => {
        let {price,sale_price} = data
        let min = price - sale_price
        let presentase = min/price * 100
        return Math.round(presentase)
    }

    return (
        <div className="cardn-container-07">
            {renderPage()}
            {
                cookieCart && cookieCart[0] &&
                <div className="cardn-line-07">

                </div>
            }
            {
                cookieCart && cookieCart[0] &&
                <div className="cardn-title-2">
                    Kelas yang Anda Pelajari
                </div>
            }

            {
                cookieCart && cookieCart[0] ?
                <div className="carnd-cart-list">
                    
                    <h4>
                        {
                            cookieCart[0].name
                        }
                    </h4>

                    <div>
                        <div>
                            <span>{ moneyConvert(cookieCart[0].price.toString(),"Rp. ") }</span>
                            <div>{moneyConvert(cookieCart[0].sale_price.toString(),"Rp. ")}</div>
                        </div>
                        <button>Hemat {renderDiskon(cookieCart[0])}%</button>
                    </div>

                </div> :
                <div style={{marginTop : 20}}>
                    Anda belum memiliki Kelas
                </div>
            }

                {/* <div className="carnd-cart-list">
                    
                    <h4>
                        {
                            cookieCart || "lalalal"
                        }
                    </h4>

                    <div>
                        <div>
                            <span>Rp.1.900.000</span>
                            <div>Rp.210.000</div>
                        </div>
                        <button>Hemat 80%</button>
                    </div>

                </div> */}

            {
                cookieCart && cookieCart[0] &&
                <div className="cardn-line-07" style={{marginTop : 35}}>

                </div>
            }
        </div>
    )
}

export default CardNotLoggendIn