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

function TransferBank (props) {

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

    // LOADING
    const [loading,setLoading] = useState(false)

    // LOCAL STATE DATA USER
    const [user,setUser] = useState(null)

    useEffect(()=>{
        // GET ORDER
    //     axios({
    //        method : "GET",
    //        url : `${SWAGGER_URL}/orders/self`,
    //        headers : {
    //            'Access-Control-Allow-Origin': '*',
    //            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //            'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //        }
    //    })
    //    .then(({data})=>{
    //        console.log(data.data[0] , '   HMMM <><><><><><><><><>>')
    //        setOrder(data.data[0])
    //    })
    //    .catch(err=>{
    //        console.log(err ,  ' <<< ERROR GET ORDER LIST')
    //    })

       axios({
            method : 'GET',
            url : `${SWAGGER_URL}/users/me`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            if (data && data.data) {
                console.log(data.data.user , ' <<, fix <><>>< pppp')
                setUser(data.data.user)
            } 
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERORR')
        })

    },[])

    let handleConfirmation = () => {
        // console.log(order.invoice , ' <<< INVOICE')
        // console.log(tanggalTransfer , ' <<< TANGGA')
        // console.log(bank , ' <<<< BANK')
        // console.log(num , ' <<< NOMOR PENGIRIM')
        // console.log(name , ' <<< NAMA PENGIRIM')
        // console.log(image , ' <<< GAMBAR')
        setLoading(true)
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
            setLoading(false)
            history.push('/payment=true')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<< ERROR TF')
        })

    }

    let handleConfirmation2 = () => {
        setLoading(true)
        axios({
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
            }
        })
        .then(({data})=>{
            setLoading(false)
            history.push('/payment=true')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<< ERROR TF')
        })
    }

    return (
        <div className="transfer-08-container">
            <h1>Hi, {user && user.name}</h1>
            <div className="transfer-08-line"></div>
            <h2>Order Anda Sedang Diproses</h2>
            <img
                src={logo}
                alt="tranfer-logo"
            />
            <div className="transfer-08-t1">
                Silahkan lakukan 3 langkah mudah dibawah untuk mendapatkan akses kelas dan merasakan manfaatnya dengan segera
            </div>
            <div className="transfer-08-t2" style={{marginTop : 50}}>
                1. Review Pesanan
            </div>
            <FirstContent
                order={order}
                setOrder={setOrder}
                {...props}
            />
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
                    handleConfirmation2={handleConfirmation2}
                    loading={loading}
                    setLoading={setLoading}
                />
            }
        </div>
    )

}

export default TransferBank