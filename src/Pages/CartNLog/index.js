import React , { useState } from 'react'

// MODULE
import Cookies from 'js-cookie';

// COMPONENT
import { Email , Login , Register } from '../../Components/CardNLog'

// STYLE
import './style.css'

function CardNotLoggendIn (props) {

    // PARENT PROPS
    const { setSelectedPage } = props

    // LOCAL STATE
    const [email,setEmail] = useState(null)
    const [selectedTab,setSelectedTab] = useState(0)

    const cookieCart = JSON.parse(Cookies.get('cartList'));

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

    return (
        <div className="cardn-container-07">
            {renderPage()}
            <div className="cardn-line-07">

            </div>
            <div className="cardn-title-2">
                Enrolled Course
            </div>

            {
                cookieCart ?
                <div className="carnd-cart-list">
                    
                    <h4>
                        {
                            cookieCart[0].slug
                        }
                    </h4>

                    <div>
                        <div>
                            <span>Rp.1.900.000</span>
                            <div>Rp.210.000</div>
                        </div>
                        <button>Hemat 80%</button>
                    </div>

                </div> :
                <div style={{marginTop : 20}}>
                    Belum ada data
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


            <div className="cardn-line-07" style={{marginTop : 35}}>

            </div>
        </div>
    )
}

export default CardNotLoggendIn