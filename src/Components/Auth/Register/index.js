import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import Input from '../Input' 
import Button from '../../Button'

// IMAGES
import image from '../../../Assets/Images/register-image.png'

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

function Register (props) {

    // HISTORY
    const history = useHistory()

    // PARENT PROPS
    const { email } = props

    // LOCAL STATE CHECK CLICK
    const [isClick,setIsClick] = useState(false)

    //LOCAL STATE INPUT
    const [name,setName] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [password,setPassword] = useState(null)

    // LOCAL STATE CHECKBOX
    const [check1,setCheck1] = useState(false)

    // LOCAL STATE
    const [loading,setLoading] = useState(false)

    // LOCAL STATE ERROR NAME
    const [errorName,setErrorName] = useState(false)
    const [nameMessage,setNameMessage] = useState("")

    // LOCAL STATE ERROR PHONE
    const [errorPhone,setErrorPhone] = useState(false)
    const [phoneMessage,setPhoneMessage] = useState("")

    // LOCAL STATE ERROR PASSWORD
    const [errorPass,setErrorPass] = useState(false)
    const [passMessage,setPassMessage] =  useState("")

    let handleError = (data) => {

        let arr = data.data.message

        let phoneError = [];
        let passError;

        for (let i in arr) {
            let el = arr[i]
            if (el === "phone_number must be longer than or equal to 10 characters") {
                // phoneError = "Nomor Hp minimal 10 angka"
                phoneError.push("Nomor Hp minimal 10 angka")
            }else if (el === "phone_number must be a valid phone number") {
                // phoneError = "Nomor Hp tidak valid"
                phoneError.push("Nomor Hp tidak valid")
            } 
            if (el === "password must be longer than or equal to 6 characters") {
                passError = "Password harus 6 karakter atau lebih"
            }
        }

        if (phoneError.length > 0) {
            setErrorPhone(true)
            setPhoneMessage(phoneError[0])
        }

        if (passError) {
            setErrorPass(true)
            setPassMessage(passError)
        }

    }

    // HANDLE REGISTER
    let handleClick = () => {
        setLoading(true)
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/users`,
            data : {
                name : name,
                email : email,
                phone_number : phoneNumber,
                password : password
            }
        })
        .then(({data})=>{
            let tokenR = data.data.accessToken
            localStorage.setItem('token',tokenR)
            history.push('/')
            setLoading(false)
            if (typeof window !== "undefined") {
                if (window.fbq != null) { 
                  window.fbq('track', 'CompleteRegistration');
                }
            }
        })
        .catch(err=>{
            handleError(err.response)
            setLoading(false)
        })
    }

    useEffect(()=>{
        if (isClick) {
            if (!name || name === "") {
                setErrorName(true)
                setNameMessage("Nama tidak boleh kosong")
            }else {
                setErrorName(false)
                setNameMessage(null)
            }
    
            if (!phoneNumber || phoneNumber === "" ) {
                setErrorPhone(true)
                setPhoneMessage("Nomor Hp tidak boleh kosong")
            }else {
                setErrorPhone(false)
                setPhoneMessage(null)
            }
    
            if (!password || password === "") {
                setErrorPass(true)
                setPassMessage('Password tidak boleh kosong')
            }else {
                setErrorPass(false)
                setPassMessage(null)
            }
        }
    },[name,phoneNumber,password,isClick])

    // VALIDATION CHECK
    let handleValidation = () => {
        let isNext = true
        setIsClick(true)
        if (!name || name === "") {
            setErrorName(true)
            setNameMessage("Nama tidak boleh kosong")
            isNext = false
        }else {
            setErrorName(false)
            setNameMessage(null)
        }

        if (!phoneNumber || phoneNumber === "" ) {
            setErrorPhone(true)
            setPhoneMessage("Nomor Hp tidak boleh kosong")
            isNext = false
        }else {
            setErrorPhone(false)
            setPhoneMessage(null)
        }

        if (!password || password === "") {
            setErrorPass(true)
            setPassMessage('Password tidak boleh kosong')
            isNext = false
        }else {
            setErrorPass(false)
            setPassMessage(null)
        }

        if (!check1) {
            isNext = false
        } 

        if (isNext) {
            handleClick()
        }
    }

    return (
        <div className="auth-check-email-container" >
            <img
                src={image}
                alt="check-email"
            />
            <h1 style={{textAlign : "center"}}>
                Silahkan isi data diri anda
            </h1>
            <Input
                text={"Name"}
                value={name}
                setter={setName}
                style={{width : "82%",marginTop : 15}}
                isError={errorName}
                message={nameMessage}
            />
            <Input 
                text={'Phone Number'}
                setter={setPhoneNumber}
                value={phoneNumber}
                isNumber={true}
                style={{width : "82%",marginTop : 15}}
                isError={errorPhone}
                message={phoneMessage}
            />
            <Input 
                text={'Password'}
                setter={setPassword}
                value={password}
                isPassword={true}
                style={{width : "82%",marginTop : 15}}
                isError={errorPass}
                message={passMessage}
            />
            <div style={{display : "flex",width : "82%" , marginTop : 15, alignItems : "center" , height : 30}}>
                <input 
                    type="checkbox" 
                    className="auth-checkbox"
                    onClick={e=>setCheck1(!check1)}
                />
                <label  style={{marginLeft : 10}}>Saya telah membaca dan menyetujui Aturan Penggunaan dan kebijakan Privasi Larunocom</label>
            </div>
            <Button
                text={'Confirm'}
                style={{width : "82%",marginTop : 15,marginBottom : 40}}
                fn={handleValidation}
                loader={loading}
            />

        </div>
    )

}

export default Register