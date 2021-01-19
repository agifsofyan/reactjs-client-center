import React , { useState } from 'react'

// MODULE
import axios from 'axios'


// COMPONENT
import Input from '../../Auth/Input' 
import Button from '../../Button'

// API 
import { SWAGGER_URL } from '../../../Support/API_URL'

// REGEX EMAIL
import { re } from '../../../Support/re'

function Email (props) {

    // PARENT PROPS
    const { email , setEmail , setSelectedTab   } = props

    // LOCAL STATE
    const [loading1,setLoading1] = useState(false)

    // LOCAL STATE ERROR STATUS
    const [message,setMessage] = useState("")
    const [isError,setIsError] = useState(false)

    let HandleEmail = () => {
        let status;
        setLoading1(true)
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/users/check-account?email=${email}`
        })
        .then(({data})=>{
            status = data.statusCode
            if (status === 200) {
                setSelectedTab(1)
            }
            setLoading1(false)
        })
        .catch(err=>{
            status = err.response.status
            if (status === 404) {
                setSelectedTab(2)
            }else {
                console.log('INTERNAL SERVER ERROR')
            }
            setLoading1(false)
        })
    }

    // CHECK VALIDATION
    let checkValidation = (e) => {
        e.preventDefault()
        let check = re.test(String(email))
        if (!email || email === "" ) {
            setIsError(true)
            setMessage("Email tidak boleh kosong")
        }else if (email.length < 3) {
            setIsError(true)
            setMessage("Email tidak valid")
        }else if (!check) {
            setIsError(true)
            setMessage("Email tidak valid")
        }
        else {
            setIsError(false)
            setMessage(null)
            HandleEmail()
        }
    }

    return (
        <form className="cardn-auth-container">
            <div className="cardn-container-07-title-1 ">
                <h1>Silahkan isi email anda</h1>
            </div>
            <Input 
                text={"Email Address"}
                value={email}
                setter={setEmail}
                style={{width : "82%",marginTop : 15}}
                isError={isError}
                message={message}
            />
            <Button
               text={'Confirm'}
               style={{width : "82%",marginTop : 15}}
               fn={checkValidation}
               loader={loading1}
            />
        </form>
    )

}

export default Email