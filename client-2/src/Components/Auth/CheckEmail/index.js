import React , { useState } from 'react'

// MODULE
import { useHistory  } from 'react-router-dom'
import axios from 'axios'

// COMPONENT
import Input from '../Input' 
import Party from '../Party'
import Button from '../../Button'


// IMAGE 
import image from '../../../Assets/Images/check-email.png'
import facebook from '../../../Assets/Images/facebook.jpg'
import google from '../../../Assets/Images/google.png'

// STYLE
import './style.css'
import '../style.css'

// API 
import { SWAGGER_URL } from '../../../Support/API_URL'

// REGEX EMAIL
import { re } from '../../../Support/re'

function CheckEmail (props) {

    // HISTORY
    const history = useHistory()

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

    let checkValidation = () => {
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
        <div className="auth-check-email-container">
            <img
                src={image}
                alt="check-email"
            />
            <h1>
                Masuk dengan Email atau dengan Facebook / Google
            </h1>
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

            <div className="auth-login-content-01">
                <div className="auth-lc1-line">

                </div>
                <div className="auth-lc1-text">
                    Atau
                </div>
                <div className="auth-lc1-line">

                </div>
            </div>

            <Party
                image={facebook}
                text={"Masuk dengan Facebook"}
            />

            <Party
                image={google}
                text={"Masuk dengan Google"}
            />

            <div className="auth-last-content" style={{marginBottom : 40}}>
                <div 
                    onClick={e=>history.push('/forget-password')}
                    style={{color : "#326282", cursor : "pointer"}}
                >
                    Lupa Password
                </div>
                <div className="auth-lc-c">

                </div>
                <div 
                    // onClick={e=>setSelectedTab(1)}
                    style={{color : "#D33030", cursor : "pointer"}}
                >
                    Belum Punya Akun
                </div>
            </div>

        </div>
    )

}

export default CheckEmail