import React , { useState } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'

// IMAGES
import il from '../../Assets/Images/otp.png'

// MATERIAL ICONS
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// ANTD DESING
import { notification } from 'antd';

// STYLE
import './style.css'

// API URL
import { SWAGGER_URL } from '../../Support/API_URL'

function OtpEmail () {

    // LOCAL STATE
    const [otp,setOtp] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirm,setConfirm] = useState(null)

    // LOCAL STATE LOADING
    const [isLoading,setIsLoading] = useState(false)

    // LOCAL STATE ERROR OTP
    const [otpError,setOtpError] = useState(null)

    // LOCAL STATE ERROR PASSWORD
    const [passError,setPassError] = useState(null)

    // LOCAL STATE ERROR CONFIRM
    const [confirmError,setConfirmError] = useState(null)

    // CALL HISTORY
    const history = useHistory()

    let handleClick = () => {
        setIsLoading(true)
        axios({
            method : 'PUT',
            url : `${SWAGGER_URL}/users/new-password?otp=${otp}`,
            data : {
                password
            }
        })
        .then(({data})=>{
            setTimeout(()=>{
                setIsLoading(false)
                history.push('/auth')
            },4000)

            // OPEN NOTIFICATION
            notification.open({
                message: 'Sukses!!',
                description:
                  'Selamat anda berhasil mengganti password, silahkan login untuk melanjutkan!!',
                onClick: () => {
                  history.push('/auth')
                },
            });
        })
        .catch(err=>{
            let status;
            let messageErr;
            if (err.response) {
                if (err.response.data) {
                    status = err.response.data.statusCode
                    messageErr = err.response.data.message
                }
            }
            if (status && messageErr) {
                if (status === 404 ) {
                    setOtpError("OTP yang anda masukkan tidak valid")
                }else if (status === 400) {
                    setOtpError("")
                    setPassError("Password harus 6 kata atau lebih")
                    setConfirmError("Password harus 6 kata atau lebih")
                }
            }else {
                setOtpError('INTERNAL SERVER ERROR')
                setPassError("")
                setConfirmError("")
            }
            setIsLoading(false)
        })
    }

    let handleValidation = () => {
        let next = true
        if (!otp|| otp === '') {
            setOtpError("Harap Isi Semua Form")
            next = false
        }else {
            setOtpError(null)
        }

        if (!password|| password === '') {
            setPassError("Harap Isi Semua Form")
            next = false
        }else {
            setPassError(null)
        }

        if (!confirm|| confirm === '') {
            setConfirmError("Harap Isi Semua Form")
            next = false
        }else {
            setConfirmError(null)
        }


        if (password !== confirm) {
            setConfirmError("Password tidak sama")
            next = false
        }

        if (next) {
            handleClick()
        }

    }

    return (
        <div className="change-pass-email">
            <img
                src={il}
                alt="otp-password"
            />
            <span className="change-pass-bold" style={{width : "82%"}}>
                Buat Password Baru
            </span>
            <div className="change-pass-text" style={{width : "82%"}}>
                Password baru anda harus berbeda dengan password lama anda.
            </div>
            <Input 
                text={'OTP'}
                setter={setOtp}
                value={otp}
                style={{width : "82%",marginTop : 15}}
                isHasIcon={true}
                IconComponent={VpnKeyIcon}
                isError={otpError}
                message={otpError}
            />
            <Input 
                text={'Password'}
                setter={setPassword}
                value={password}
                isPassword={true}
                style={{width : "82%",marginTop : 15}}
                isError={passError}
                message={passError}
            />
            <Input 
                text={'Confirm Password'}
                setter={setConfirm}
                value={confirm}
                isPassword={true}
                style={{width : "82%",marginTop : 15}}
                isError={confirmError}
                message={confirmError}
            />
            <Button
                text={'Confirm'}
                style={{width : "82%",marginTop : 20,marginBottom : 70}}
                loader={isLoading}
                fn={handleValidation}
            />
        </div>
    )

}

export default OtpEmail