import React , { useState , useEffect } from 'react'

// MODULE
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'

// REDUX
import { getUserWhoAmI } from '../../../../Redux/Actions/userAction'

// MATERIAL UI ICONS
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// COMPONENTS
import Loading from '../../../Loader'

// SWAGGER API
import { SWAGGER_URL } from '../../../../Support/API_URL'

function Edit () {

    // USE DISPATCH
    const dispatch = useDispatch()

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);

    // LOADING STATE
    const [isLoading,setIsLoading] = useState(false)

    // INPUT STATE
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [ktp_numb,setKtp_numb] = useState(null)

    // INPUT NUMBER STATE
    const [numArr,setNumArr] = useState([])

    // STATUS KTP 
    const [isKtp,setIsKtp] = useState(false)

    let changeNumArr = () => {
        let arr = [...numArr]
        let result = []
        arr = arr.filter(e=>e.phone_number !== "" )
        arr.forEach(e=>{
            let { country_code , isWhatsapp , isDefault , phone_number } = e
            result.push({ country_code , isWhatsapp , isDefault , phone_number })
        })
        return result
    }

    // HANDLE API
    let handleClick = (e) => {
        e.preventDefault()
        console.log(changeNumArr() , ' <<< VALUE FUNCITON CHANGE NUM ARR >>> 989899898 *(*(*( *98 989898989 ((*(*(*(98989898')
        setIsLoading(true)
        axios({
            method : 'POST',
            url : `${SWAGGER_URL}/users/profile`,
            data : {
                name,
                email,
                phone_numbers : changeNumArr()
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(({data})=>{
            console.log(data , ' <<< success')
            console.log('SUCCESS ADD PROFILE')
            dispatch(getUserWhoAmI());
            alert("sukses add profile")
            setIsLoading(false)
        })
        .catch(err=>{
            setIsLoading(false)
            console.log(err.response)
        })
    }
    
    // SET DATA INPUT VALUE SAME WITH DB
    useEffect(()=>{
        if (userInfo) {
            console.log(userInfo , ' <<< USER INFO RESULT')
            console.log(userInfo.ktp_numb , ' <<<< RESULT KTP')
            if (userInfo.phone_numbers) {
                if (userInfo.phone_numbers.length > 0) {
                    console.log('HERE 9999999 ((())))')
                    setNumArr(userInfo.phone_numbers)
                }else {
                    setNumArr([
                        {
                            country_code: "+62",
                            phone_number: "",
                            isWhatsapp: true,
                            isDefault: true,
                            note: ""
                        }
                    ])
                }
            }else {
                setNumArr([
                    {
                        country_code: "+62",
                        phone_number: "",
                        isWhatsapp: true,
                        isDefault: true,
                        note: ""
                    }
                ])
            }
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    },[userInfo])

    // HANDLE ADD INPUT
    let handleAdd = (e) => {
        let arr = [...numArr]
        // let id = arr[arr.length-1].id + 1
        arr.push({
            // id ,
            country_code: "+62",
            phone_number: "",
            isWhatsapp: false,
            isDefault: false,
            note: ""
        })
        setNumArr(arr)
    }

    // HANDLE REMOVE INPUT
    let handleRemove = (e,index) => {
        let arr = [...numArr]
        arr = arr.filter((el,i)=> i !== index)
        setNumArr(arr)
    }

    // HANLDE CHANGE INPUT
    let handleChange = (val,index) => {
        let arr = [...numArr]
        arr[index].phone_number = val
        setNumArr(arr)
    }

    // HANLDE CHANGE BOX
    let handleCheck = (val,index,type) => {
        let arr = [...numArr]
        arr.forEach((el,i)=>{
            if ( el[type]) {
                el[type] = false
            }
        })
        arr[index][type] = !val
        setNumArr(arr)
    }

    // RENDER PHONE INPUT
    let phoneInput = () => {
        return numArr.map((el,index)=>{
            return (
                <div className="input2">
                    <div className="t">
                        Nomor Hp
                    </div>
                    <div className="c">
                        <input
                            type="text"
                            onChange={e=>handleChange(e.target.value,index)}
                            value={ el.phone_number}
                        />
                        <div>
                            {
                                index !== 0 &&
                                <RemoveIcon
                                    style={{marginRight : index === numArr.length - 1 && 10 }}
                                    onClick={e=>handleRemove(e,index)}
                                />
                            }
                            {
                                index === numArr.length - 1 &&
                                <AddIcon
                                    onClick={e=>handleAdd(e)}
                                />
                            }
                        </div>
                    </div>
                    <div className="c2">
                        <div style={{marginRight : 19}}>
                            <div>
                                Utama
                            </div>
                            <input 
                                type="checkbox"
                                checked={el.isDefault}
                                onClick={e=>handleCheck(el.isDefault,index,"isDefault")}
                            />
                        </div>
                        <div>
                            <div>
                                WhatsApp
                            </div>
                            <input 
                                type="checkbox"
                                checked={el.isWhatsapp}
                                onClick={e=>handleCheck(el.isWhatsapp,index,"isWhatsapp")}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <form onSubmit={e=>handleClick(e)} className="container">
            <div className="title" style={{marginTop : 30}}>Full Name</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setName(e.target.value)}
                value={name}
            />

            <div className="title">Email</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setEmail(e.target.value)}
                value={email}
            />

            <div className="title">Nomor KTP</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setEmail(e.target.value)}
                value={email}
            />

            {
                phoneInput()
            }
            <div 
                className="button1"
                onClick={e=>handleClick(e)}
            >
                {
                    isLoading ? <Loading/> : "Simpan"
                }
            </div>
        </form>
    )
}

export default Edit