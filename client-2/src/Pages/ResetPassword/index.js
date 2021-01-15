import React , { useState } from 'react'

// MODULES
import axios from 'axios'

// ANTD DESING
import { notification } from 'antd';

// COMPONENT 
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'
import OtpPassword from '../../Components/ResetPassword'

// STYLE
import './style.css'

// IMAGES
import il from '../../Assets/Images/cp.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// REGEX
import { re } from '../../Support/re'

function ChangePass () {

    // LOCAL STATE
    const [email,setEmail] = useState(null)

    // ERROR EMAIL
    const [emailError,setEmailError] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    // LOCAL STATE LOADER
    const [isLoading,setIsLoading] = useState(false)

    // PAGES
    const [page,setPage] = useState(0)

    let handleEmail = () => {
        setIsLoading(true)
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/users/forget-password?email=${email}`
        })
        .then(({data})=>{

            console.log(data , ' <<< DONE')

            //  SET TIME OUT
            setTimeout(()=>{
                setIsLoading(false)
                setPage(1)
                localStorage.removeItem('token')
            },5000)

            // OPEN NOTIFICATION
            notification.open({
                message: 'Sukses!!',
                description:
                  'Berhasil mengirim, silahkan cek email anda!',
                onClick: () => {
                //   history.push('/auth')
                 setPage(1)
                },
            });

        })
        .catch(err=>{
            let status = err.response.data.statusCode
            console.log(err.response , ' <<< RESPONSER')
            if (status === 404) {
                setEmailError(true)
                setErrorMessage("Email anda belum terdaftar!")
            }else {
                setEmailError(true)
                setErrorMessage("Internal Server Error!")
            }
            setIsLoading(false)
        })
    }

    let checkValidation = () => {
        let check = re.test(String(email))
        if (!email || email === "" ) {
            setEmailError(true)
            setErrorMessage("Email tidak boleh kosong")
        }else if (email.length < 3) {
            setEmailError(true)
            setErrorMessage("Email tidak valid")
        }else if (!check) {
            setEmailError(true)
            setErrorMessage("Email tidak valid")
        }
        else {
            // setEmailError(false)
            // setErrorMessage(null)
            handleEmail()
        }
    }

    return (
        <div className="change-pass-container">
            {
                page === 0 ?
                <div className="change-pass-email">
                    <img
                        src={il}
                        alt={'change-pass'}
                    />
                    <span className="change-pass-bold" style={{width : "82%"}}>
                        Lupa Password
                    </span>
                    <div className="change-pass-text" style={{width : "82%"}}>
                        Silahkan isi email anda yang terkait dengan akun anda untuk mengkonfirmasi kepemilikan atas akun yang terkait.
                    </div>
                    <Input
                        text={"Email Address"}
                        value={email}
                        setter={setEmail}
                        style={{width : "82%",marginTop : 15}}
                        isError={emailError}
                        message={errorMessage}
                    />
                    <Button
                        text={'Confirm'}
                        style={{width : "82%",marginTop : 15}}
                        fn={checkValidation}
                        loader={isLoading}
                    />
                </div>:
                <OtpPassword/>
            }
        </div>
    )

}

export default ChangePass