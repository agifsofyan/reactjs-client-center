import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import { FirstContent , SecondContent , ThirdContent } from '../../Components/TransferConfirm'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// IMAGES
import logo from '../../Assets/Images/transfer.png' 

// STYLE
import './style.css'

function TransferBank () {

    // CALL HISTORY
    const history = useHistory()

    // LOCAL STATE DATE TRANSFER
    const [tanggalTransfer,setTanggalTransfer] = useState(null)

    // LOCAL STATE SELECTED BANK
    const [bank,setBank] = useState('BCA')

    // LOCAL STATE NAME AND Number SENDER
    const [name,setName] = useState(null)
    const [num,setNum] = useState(null)

    // LOCAL STATE INPUT TYPE FILE
    const [image,setImage] = useState(null)

    // LOCAL STATE DATA ORDER
    const [order,setOrder] = useState(null)

    useEffect(()=>{
        // GET ORDER
        axios({
           method : "GET",
           url : `${SWAGGER_URL}/orders/self`,
           headers : {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
               'Authorization': `Bearer ${localStorage.getItem('token')}`,
           }
       })
       .then(({data})=>{
           console.log(data.data[0] , '   HMMM <><><><><><><><><>>')
           setOrder(data.data[0])
       })
       .catch(err=>{
           console.log(err ,  ' <<< ERROR GET ORDER LIST')
       })
    },[])

    let handleConfirmation = () => {
        // console.log(order.invoice , ' <<< INVOICE')
        // console.log(tanggalTransfer , ' <<< TANGGA')
        // console.log(bank , ' <<<< BANK')
        // console.log(num , ' <<< NOMOR PENGIRIM')
        // console.log(name , ' <<< NAMA PENGIRIM')
        // console.log(image , ' <<< GAMBAR')
        const data = new FormData() 
        data.append('file', image)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/uploads/transfer`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            },
            data
        })
        .then(({data})=>{
            let url = data.result.url
            return axios({
                method : "POST",
                url : `${SWAGGER_URL}/transfer_confirms`,
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                data : {
                        transfer_date :tanggalTransfer ,
                        bank_name :bank ,
                        account_owner_name :name ,
                        account_number : num ,
                        destination_bank : bank ,
                        invoice_number : order.invoice ,
                        struct_url : url
                }
            })
        })
        .then(({data})=>{
            history.push('/payment=true')
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERROR')
        })

    }

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
            {
                order &&
                <ThirdContent
                    tanggalTransfer={tanggalTransfer}
                    setTanggalTransfer={setTanggalTransfer}
                    order={order}
                    bank={bank}
                    setBank={setBank}
                    num={num}
                    setNum={setNum}
                    name={name}
                    setName={setName}
                    image={image}
                    setImage={setImage}
                    handleConfirmation={handleConfirmation}
                />
            }
        </div>
    )

}

export default TransferBank