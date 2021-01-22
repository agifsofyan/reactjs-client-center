import React from 'react'

// COMPONENT
import { FirstContent , SecondContent , ThirdContent } from '../../Components/TransferConfirm'

// IMAGES
import logo from '../../Assets/Images/transfer.png' 

// STYLE
import './style.css'

function TransferBank () {

    return (
        <div className="transfer-08-container">
            <h1>Hi, John Doe</h1>
            <div className="transfer-08-line"></div>
            <h2>Order Anda Sedang Diproses</h2>
            <img
                src={logo}
                alt="tranfer-logo"
            />
            <div className="transfer-08-t1">
                Silahkan lakukan 3 langkah mudah dibawah untuk mendapatkan akses kelas dan merasakan manfaatnya dengan segera
            </div>
            <div className="transfer-08-t2">
                1. Review Pesanan
            </div>
            <FirstContent/>
            <div className="transfer-08-t2">
                2. Lakukan Pembayaran
            </div>
            <SecondContent/>
            <div className="transfer-08-t2">
                3. Konfirmasi Pembayaran
            </div>
            <ThirdContent/>
        </div>
    )

}

export default TransferBank