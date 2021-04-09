import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'

// REDUX
import { getUserWhoAmI } from '../../../../Redux/Actions/userAction'

// COMPONENTS
import Loading from '../../../Loader'

// SWAGGER API
import { SWAGGER_URL } from '../../../../Support/API_URL'

function Edit4 () {

    // USE DISPATCH
    const dispatch = useDispatch()

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);

    // LOADING STATE
    const [isLoading,setIsLoading] = useState(false)

    // DATA STATE
    const [ktp_numb,setKtp_numb] = useState("")

    // STATUS KTP 
    const [isKtp,setIsKtp] = useState("")

    // MESSAGE ERROR
    const [noInput,setNoInput] = useState(null)
    const [ktpMsg,setKtpMsg] = useState(null)

    // CHECK IF INPUT NOT CHANGING
    const [isChange,setIsChange] = useState(false)

    let changeKtp = (val) => {
        setIsChange(true)
        if (!isKtp) {
            setIsKtp(true)
        }
        setKtp_numb(val)
    }

    // SET DATA INPUT VALUE SAME WITH DB
    useEffect(()=>{
        if (userInfo) {
            if (userInfo.ktp_numb) {
                setKtp_numb(userInfo.ktp_numb)
                setIsKtp(true)
            }
        }
    },[userInfo])

    // HANDLE INPUT VALIDATION
    let handleValidation = (e) => {
        e.preventDefault()
        let isNext = true
        if (!isChange) {
            setNoInput("Harap Isi Form yang di sediakan")
            isNext = false
        }else {
            setNoInput(null)
        } 

        if (ktp_numb.length !== 16) {
            setKtpMsg("Input KTP kurang dari 16")
            isNext = false
        }else {
            setKtpMsg(null)
        }

        if (isNext) {
            console.log('HERE 2')
            handleClick(e)
        }
    }

    // HANDLE DATA INPUT
    let handleObj = () => {
        let res = {}
        if (ktp_numb) {
            res = {...res , ktp_numb}
        }
        return res
    }

    // HANLDE TO API
    let handleClick = (e) => {
        e.preventDefault()
        setIsLoading(true)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/users/profile`,
            data : handleObj(),
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(({data})=>{
            dispatch(getUserWhoAmI());
            alert("sukses add profile")
            setIsLoading(false)
        })
        .catch(err=>{
            setIsLoading(false)
            console.log(err.response)
        })
    }

    return (
        <form className="container">
            <div className="title" style={{marginTop : 30}}>Nomor KTP</div>
            <input 
                type="number" 
                className="input1"
                onChange={e=>changeKtp(e.target.value)}
                value={ktp_numb}
                style={{ border : ktpMsg && "1px solid #ff3333" }}
            />
                {
                    ktpMsg &&
                    <span className="auth-input-error-m" style={{width : "90%"}}>
                        {ktpMsg}
                    </span>
                }
             <div 
                className="button1"
                onClick={e=>handleValidation(e)}
            >
                {
                    isLoading ? <Loading/> : "Simpan"
                }
            </div>
            {
                noInput &&
                <span className="auth-input-error-m" style={{width : "90%"}}>
                    {noInput}
                </span>
            }
        </form>
    )

}

export default Edit4