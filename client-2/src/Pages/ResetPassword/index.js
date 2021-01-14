import React , { useState } from 'react'

// MODULES
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// ANTD DESING
import { notification } from 'antd';

// COMPONENT 
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'

// STYLE
import './style.css'

// IMAGES
import il from '../../Assets/Images/cp.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// REGEX
import { re } from '../../Support/re'

function ChangePass () {

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [email,setEmail] = useState(null)

    // ERROR EMAIL
    const [emailError,setEmailError] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    // LOCAL STATE LOADER
    const [isLoading,setIsLoading] = useState(false)

    let handleEmail = () => {
        setIsLoading(true)
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/users/verification?remember=true&confirmation=${email}`
        })
        .then(({data})=>{

            //  SET TIME OUT
            setTimeout(()=>{
                setIsLoading(false)
                history.push('/auth')
                localStorage.removeItem('token')
            },4000)

            // OPEN NOTIFICATION
            notification.open({
                message: 'Sukses!!',
                description:
                  'Berhasil mengirim, silahkan cek email anda!',
                onClick: () => {
                  history.push('/auth')
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
        </div>
    )

}

export default ChangePass