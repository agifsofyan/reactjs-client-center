import React , { useState } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch , useSelector } from 'react-redux'

// GLOBAL ACTION
import { changeValue , changeValueUser , getPaidList } from '../../../Redux/Actions/index'
import { setDataSetting ,getUserWhoAmI , getUserStory , getUserLMS  } from '../../../Redux/Actions/userAction'

// COMPONENT
import Input from '../Input' 
import Button from '../../Button'

// IMAGES
import image from '../../../Assets/Images/login-image.png'

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

function Login (props) {

    // USE DISPATCH
    const dispatch = useDispatch()

    // PARENT PROPS
    const { email } = props

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    // LOCAL STATE ERROR STATUS
    const [message,setMessage] = useState("")
    const [isError,setIsError] = useState(false)

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
            history.push('/')
            setIsLoading(false)
            Cookies.remove('cartList')
            Cookies.remove('productId')
            handleGlobalAction()
            if (typeof window !== "undefined") {
                if (window.fbq != null) { 
                  window.fbq('track', 'Subscribe');
                }
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

    let handleGlobalAction = () => {
      dispatch(setDataSetting())
      dispatch(getPaidList());
      dispatch(getUserWhoAmI());
      dispatch(getUserStory())
      dispatch(getUserLMS( {trending : true,favorite : false} ))
    }

    let handleValidation = (e) => {
        e.preventDefault()
        if (!password || password === '' ) {
            setIsError(true)
            setMessage('Password tidak boleh kosong')
        }else {
            handleClick()
        }
    }

    return (
        <form 
            className="auth-check-email-container" 
            onSubmit={e=>handleValidation(e)}
        >
            <img
                src={image}
                alt="check-email"
            />
            <h1 style={{textAlign : "center"}}>
                Silahkan Isi password anda
            </h1>
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
                text={'Confirm'}
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