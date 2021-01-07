import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// COMPONENT
import Input from './Input'
import Button from '../Button'
import Party from './Party'

// IMAGES 
import facebook from '../../Assets/Images/facebook.jpg'
import google from '../../Assets/Images/google.png'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Login (props) {

    // PROPS
    const {  setSelectedTab } = props

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    // USE EFFECT
    useEffect(()=>{
        console.log(email , ' << EMAIL')
        console.log(password, '  << PASSWORD')
    },[email,password])

    // LOGIN
    let handleClick = (e) => {
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
            history.push('/')
            setIsLoading(false)
            // alert("bERHASIL LOGIN")
        })
        .catch(err=>{
            // alert('GAGAL PPPPPPPPPPPPPPPPP')
            setIsLoading(false)
            // console.log(err , ' <<< ERROR')
        })
    }

    return (
        <div style={{width : "100%",display : "flex",flexDirection : "column",justifyContent : "center",alignItems : "center", marginTop : 5}}>

            <Input 
                text={'Email'}
                setter={setEmail}
                value={email}
            />

            <Input 
                text={'Password'}
                setter={setPassword}
                value={password}
                isPassword={true}
            />

            <Button
                text={'Login'}
                fn={handleClick}
                style={{marginTop : 25}}
                loader={isLoading}
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

            <div className="auth-last-content">
                <div 
                    onClick={e=>history.push('/change-password')}
                    style={{color : "#326282", cursor : "pointer"}}
                >
                    Lupa Password
                </div>
                <div className="auth-lc-c">

                </div>
                <div 
                    onClick={e=>setSelectedTab(1)}
                    style={{color : "#D33030", cursor : "pointer"}}
                >
                    Belum Punya Akun
                </div>
            </div>

        </div>
    )

}

export default Login