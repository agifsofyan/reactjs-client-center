import React , { useState } from 'react'

// MODULE
import axios from 'axios'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'

// COMPONENT
import Input from '../../Auth/Input' 
import Button from '../../Button'

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

function Login (props) {
    
    // PARENT PROPS
    const { email , setSelectedPage ,  landingPage , style , finishFunction } = props

    // COOKIES
    const cookieId = Cookies.get('productId') ? Cookies.get('productId') : null;

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    // LOCAL STATE ERROR STATUS
    const [message,setMessage] = useState("")
    const [isError,setIsError] = useState(false)

    // ADD CART
    let handleAddCart = () => {
        console.log(cookieId.length , ' <<< COOKIE ID')
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/carts/add`,
            data : {
                product_id : JSON.parse(cookieId),
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            Cookies.remove('cartList')
            Cookies.remove('productId')
            setIsLoading(false)
            setSelectedPage(1)
        })
        .catch(err=>{
            if (err.response.data.statusCode === 500) {
                setIsError(true)
                setMessage("Internal Server Error")
            }
            console.log(err.response , ' << BUG')
        })
    }

    // LOGIN
    let handleClick = (e) => {
        let messageError;
        setIsLoading(true)
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/users/login`,
            data : {
                email,
                password
            }
        })
        .then(({data})=>{
            let tokenR = data.data.accessToken
            localStorage.setItem('token',tokenR)
            if (typeof window !== "undefined") {
                if (window.fbq != null) { 
                  window.fbq('track', 'Subscribe');
                }
            }
            // ACTION CHANGE TO CART LOGGED IN HERE
            if (landingPage) {
                finishFunction()
                .then(data=>{
                    console.log('MASUK RESOLVE <m<<')
                    history.push('/lms-dashboard')
                    setIsLoading(false)
                })
                .catch(err=>{
                    setIsLoading(false)
                })
            }else {
                handleAddCart()
            }
        })
        .catch(err=>{
            if (err.response.data)
            messageError = err.response.data ? err.response.data.message : null
            if (messageError === "The password you've entered is incorrect." ) {
                setIsError(true)
                setMessage("Password yang anda masukkan salah!")
            } else if (err.response.data.statusCode === 500) {
                setIsError(true)
                setMessage("Internal Server Error")
            }
            else {
                setIsError(true)
                setMessage("Password yang anda masukkan salah!")
            }
            setIsLoading(false)
        })
    }

    let handleValidation = (e) => {
        e.preventDefault()
        console.log('MANTAP')
        if (!password || password === '' ) {
            setIsError(true)
            setMessage('Password tidak boleh kosong')
        }else {
            handleClick()
        }
    }

    return (
        <form 
            className="cardn-auth-container" 
            onSubmit={e=>handleValidation(e)}
            style={{...style}}
        >
            <div className="cardn-container-07-title-1 ">
                <h1>Silahkan isi password anda</h1>
            </div>
            <Input 
                text={'Password'}
                setter={setPassword}
                value={password}
                isPassword={true}
                style={{width : "82%",marginTop : 15}}
                isError={isError}
                message={message}
            />
            <Button
                text={'Lanjut'}
                style={{width : "82%",marginTop : 15}}
                loader={isLoading}
                fn={handleValidation}
            />
            <div 
                onClick={e=>history.push('/change-password')}
                style={{color : "#033E66", cursor : "pointer",marginTop : 21}}
            >
                Lupa Password?
            </div>
        </form>
    )

}

export default Login