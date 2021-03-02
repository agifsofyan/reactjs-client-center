import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// IMAGE
import Logo from '../../Assets/Images/success.png'
import wa from '../../Assets/Images/Whatsapp.png'

// STYLE
import './style.css'

function PaymentSuccess () {

    const history = useHistory()

    // let handleWa = () => {
    //     let text = `
    //         Text Here
    //     `
    //     axios({
    //         method : "GET",
    //         url : `https://api.whatsapp.com/send?phone=6287878500139&text=${text}`,
    //         headers : {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //             // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         }
    //     })
    //     .then(({data})=>{
    //         console.log(data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }

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
                Mau tanya bonus/ konfirmasi pembayaran atau pertanyaan lainnya silahkan hubungi CS, (Agen)" Klik Tombol di bawah
            </h3>
            <a
                href={`https://api.whatsapp.com/send?phone=6287878500139&text=Text Here!`} 
                className="payment-09-button1"
            >
                <span>Tanya Via Whatsapp</span>
                <img
                    alt="wa-logo"
                    src={wa}
                />
            </a>
            {/* <div className="payment-09-button2">
                Check Order History
            </div> */}
        </div>
    )

}

export default PaymentSuccess