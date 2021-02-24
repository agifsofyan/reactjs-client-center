import React , { useState, useEffect } from 'react'

// MODULES
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// ANTD DESING
import { notification } from 'antd';

// COMPONENT 
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'

// IMAGES
import rp from '../../Assets/Images/Illustration.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

function ChangePassword () {

    const history = useHistory()

    // LOCAL STATE 
    const [old_password,setOldPassword] = useState(null)
    const [password,setPassword] = useState(null)

    // LOCAL STATE LOADER
    const [isLoading,setIsLoading] = useState(false)

    // LOCAL STATE VALIDATION OLD PASSWORD
    const [oldError,setOldError] = useState(false)
    const [oldMessage,setOldMessage] = useState(null)

    // LOCAL STATE VALIDATION NEW PASSWORD
    const [newError,setNewError] = useState(false)
    const [newMessage,setNewMessage] = useState(null)

    // CHECK HAS CLICK BUTTON
    const [isClick,setIsclick] = useState(false)

    // HANDLE CHANGE PASSWORD
    let handlePassword = () => {
        setIsLoading(true)
        axios({
            method : "PUT",
            url : `${SWAGGER_URL}/users/change-password`,
            headers : {
                "x-auth-token" : localStorage.getItem('token')
            },
            data : {
                old_password,
                password
            }
        })
        .then(({data})=>{

            //  SET TIME OUT
            setTimeout(()=>{
                setIsLoading(false)
                history.push('/login')
                localStorage.removeItem('token')
            },4000)

            // OPEN NOTIFICATION
            notification.open({
                message: 'Sukses!!',
                description:
                  'Selamat anda berhasil mengganti password, silahkan login untuk melanjutkan!!',
                onClick: () => {
                  history.push('/login')
                },
            });

        })
        .catch(err=>{   
            let status = err.response.data.statusCode
            if (status === 400) {
                setOldError(true)
                setOldMessage("Password yang anda masukkan salah!")
            }else {
                setOldError(true)
                setOldMessage("Internal Server Error!")
            }
            setIsLoading(false)
        })
    }

    // CEK VALIDATION
    let checkValidation = () => {

        let isNext = true

        setIsclick(true)

        if (!old_password || old_password === "") {
            setOldError(true)
            setOldMessage("Password lama tidak bisa kosong")
            isNext = false
        }else if (old_password.length < 6) {
            setNewError(true)
            setNewMessage("Password harus 6 karakter atau lebih")
            isNext = false
        }
        else {
            setOldError(false)
            setOldMessage(null)
        }

        if (!password || password === "") {
            setNewError(true)
            setNewMessage("Password Baru tidak bisa kosong")
            isNext = false
        }else if (password.length < 6) {
            setNewError(true)
            setNewMessage("Password harus 6 karakter atau lebih")
            isNext = false
        }else {
            setNewError(false)
            setNewMessage(null)
        }

        if (isNext) {
            handlePassword()
        }

    }

    useEffect(()=>{
        if (isClick) {
            if (!old_password || old_password === "") {
                setOldError(true)
                setOldMessage("Password lama tidak bisa kosong")
            }else if (old_password.length < 6) {
                setOldError(true)
                setOldMessage("Password harus 6 karakter atau lebih")
            }else {
                setOldError(false)
                setOldMessage(null)
            }
    
            if (!password || password === "") {
                setNewError(true)
                setNewMessage("Password Baru tidak bisa kosong")
            }else if (password.length < 6) {
                setNewError(true)
                setNewMessage("Password harus 6 karakter atau lebih")
            }else {
                setNewError(false)
                setNewMessage(null)
            }
        }
    },[old_password,password,isClick])

    return (
        <div className="change-pass-container">
            <img
                src={rp}
                alt={'reset-pass'}
            />
            <span className="change-pass-bold" style={{width : "82%"}}>
                Ganti Password
            </span>
            <div className="change-pass-text" style={{width : "82%"}}>
                Silahkan Isi password lama anda dan password baru anda dan harus berbeda dengan password sebelumnya.
            </div>

            <Input
                text={"Password Lama"}
                value={old_password}
                setter={setOldPassword}
                style={{width : "82%",marginTop : 15}}
                isPassword={true}
                isError={oldError}
                message={oldMessage}
            />

            <Input
                text={"Password Baru"}
                value={password}
                setter={setPassword}
                style={{width : "82%",marginTop : 15}}
                isPassword={true}
                isError={newError}
                message={newMessage}
            />
            <Button
                text={'Confirm'}
                style={{width : "82%",marginTop : 20}}
                fn={checkValidation}
                loader={isLoading}
            />

        </div>
    )

}

export default ChangePassword