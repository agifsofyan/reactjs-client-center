import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// IMAGE
import Logo from '../../Assets/Images/success.png'

// STYLING ../PaymentSuccess/style.css

function PaymentSuccess () {

    const history = useHistory()

    return (
        <div className="payment-09-container">
            <h1>Terima Kasih</h1>
            <img
                src={Logo}
                alt="success-logo"
            />
            <h2>
                Selamat! Pembayaran Anda Sedang di Konfirmasi
            </h2>
            <h3>
                Terima kasih atas pembayaran Anda. Tanda terima otomatis akan dikirim ke email Anda yang terdaftar.
            </h3>
            <div className="payment-09-button3">
                Lanjut Belajar
            </div>
            <div
                style={{marginTop : 20}}
                className="payment-09-button3"
            >
                Pilih Kelas Lainnya
            </div>
            <h4>
                Kembali Ke Beranda
            </h4>
        </div>
    )

}

export default PaymentSuccess