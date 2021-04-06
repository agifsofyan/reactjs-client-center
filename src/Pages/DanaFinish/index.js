import React , { useEffect } from 'react'

// MODULE
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// ENDPOINT
import { SWAGGER_URL } from '../../Support/API_URL'

// IMAGE
import Logo from '../../Assets/Images/success.png'

// STYLING ../PaymentSuccess/style.css

function DanaFinish (props) {

    const history = useHistory()

    useEffect(()=>{
        let str = props.location.search.split('?')[1]
        let divided = str.split("&")
        let id = null
        let exd = null
        divided.forEach(e=>{
            console.log(e.split('=')[0])
            if (e.split('=')[0] === "id") {
                id = e.split('=')[1]
            }else {
                exd = e.split('=')[1]
            }
        })
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/orders/confirm`,
            data : {
                id, exd
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((data)=>{
            console.log('SUKSES')
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    },[])

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
            <div 
                className="payment-09-button3"
                onClick={e=>history.push('/lms-dashboard')}
            >
                Lanjut Belajar
            </div>
            <div
                style={{marginTop : 20}}
                className="payment-09-button3"
                onClick={e=>history.push('/product-list')}
            >
                Pilih Kelas Lainnya
            </div>
            <h4 onClick={e=>history.push('/')}>
                Kembali Ke Beranda
            </h4>
        </div>
    )

}

export default DanaFinish