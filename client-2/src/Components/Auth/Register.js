import React , { useState , useEffect } from 'react'

// MODULE 
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import Input from './Input'
import Button from '../Button'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

function Login () {

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [password,setPassword] =  useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    // LOCAL STATE CHECKBOX
    const [check1,setCheck1] = useState(false)

    let handleClick = () => {
        if (password === confirmPassword) {
            axios({
                method : "POST",
                url : `${SWAGGER_URL}/users`,
                data : {
                    name : firstName + " " + lastName,
                    email : email,
                    phone_number : phoneNumber,
                    password : password
                }
            })
            .then(({data})=>{
                console.log(data)
                console.log('BERHASIL REGISTER')
                history.push('/')
            })
            .catch(err=>{
                for(let i in err) {
                    console.log(i , ' <<< VALUE I')
                }
                console.log(err.response , ' <<< ERROR')
            })
        }
    }

    useEffect(()=>{
        console.log(firstName , ' << firstName')
        console.log(lastName , ' <<< LAST NAME')
        console.log(email , ' <<< ENAIL')
        console.log(phoneNumber , ' <<< PHONE NUMBER')
        console.log(password , ' <<< PASSWORD')
        console.log(confirmPassword , ' <<< CONFIRM PASSWORD')
        console.log(typeof Number(phoneNumber)  , ' <<< PHONE NUMBER')
    },[firstName,lastName,email,phoneNumber,password,confirmPassword])

    return (
        <div style={{width : "100%",display : "flex",flexDirection : "column",justifyContent : "center",alignItems : "center", paddingBottom : 40,marginTop : 5}}>
            <Input 
                text={'First Name'}
                setter={setFirstName}
                value={firstName}
            />
            <Input 
                text={'Last Name'}
                setter={setLastName}
                value={lastName}
            />
            <Input 
                text={'Email'}
                setter={setEmail}
                value={email}
            />
             <Input 
                text={'Phone Number'}
                setter={setPhoneNumber}
                value={phoneNumber}
                isNumber={true}
            />
            <Input 
                text={'Password'}
                setter={setPassword}
                value={password}
                isPassword={true}
            />
            <Input 
                text={'Confirm Password'}
                setter={setConfirmPassword}
                value={confirmPassword}
                isPassword={true}
            />
            <div style={{display : "flex",width : "82%" , marginTop : 25, alignItems : "center" , height : 30}}>
                <input 
                    type="checkbox" 
                    className="auth-checkbox"
                    onClick={e=>setCheck1(!check1)}
                />
                <label style={{marginLeft : 10}}>Saya telah membaca dan menyetujui Aturan Penggunaan dan kebijakan Privasi Larunocom</label>
            </div>

            <Button
                text={'Register'}
                fn={handleClick}
                style={{marginTop : 25}}
            />

        </div>
    )

}

export default Login