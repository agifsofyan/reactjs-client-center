import React  from 'react'

// STYLE
import './style.css'

function Payment (props) {

    // PARENT PROPS
    const { payment , selectedPayment,setSelectedPayment } = props

    // LOCAL STATE
    // const [eWallet,setEWallet] = useState(null)
    // const [retail,setRetail] = useState(null)
    // const [virtual,setVirtual] = useState(null)
    // const [bank,setBank] = useState(null)
    // const [credit,setCredit] = useState(null)

    let renderData = (type) => {
        return payment.map((el,index) => {
            if (el.info === type) {
                return (
                    <div>
                        <input
                            type="checkbox"
                            onClick={e=>setSelectedPayment(el)}
                            checked={el===selectedPayment && true}
                        />
                        <img
                            alt={`${index}-payment-${type}`}
                            src={el.icon}
                        />
                    </div>
                )
            }else {
                return null
            }
        })
    }

    return (
        <div
            className="order-08-payment"
        >

            {/* <div style={{marginTop : 25}}>
                <header>E-Wallet</header>
                <main>Bayar langsung dari akun e-wallet</main>
                <section></section>
                {
                    renderData("EWallet")
                }
            </div> */}

            {/* <div style={{marginTop : 30}}>
                <header>Virtual Account</header>
                <main>Bayar langsung dari akun e-wallet</main>
                <section></section>
                {
                    renderData("Virtual-Account")
                }
            </div> */}

            <div style={{marginTop : 30}}>
                <header>Bank Transfer</header>
                {/* <main>Bayar dengan akhir nominal 4 angka verifikasi</main> */}
                <section></section>
                {
                    renderData("Bank-Transfer")
                }
            </div>

            {/* <div style={{marginTop : 30}}>
                <header>Retail Outlet</header>
                <main>Bayar langsung ke Retail Outlet</main>
                <section></section>
                {
                    renderData("Retail-Outlet")
                }
            </div> */}

        </div>
    )

}

export default Payment