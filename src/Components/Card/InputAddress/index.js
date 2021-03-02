import React , { useState , useEffect } from 'react'

// MODULE 
import axios from 'axios'

// COMPONENT
import Input from '../../Auth/Input'
import Button from '../../Button'
import DropDown from '../../DropDown'

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

// STYLE
import './style.css'

function InputAddress (props) {

    const {
        // setInputNext,
        setParent2
    } = props

    // LOCAL STATE
    const [address,setAddress] = useState(null)
    const [province,setProvince] = useState(null)
    const [city,setCity] = useState(null)
    const [district,setDistrict] = useState(null)
    const [subDistrict,setSubDistrict] = useState(null)
    const [detail,setDetail] = useState(null)
    const [code,setCode] = useState(null)

    // LCCAL STATE ERROR MESSAGE
    const [address2,setAddress2] = useState(null)
    const [province2,setProvince2] = useState(null)
    const [city2,setCity2] = useState(null)
    const [district2,setDistrict2] = useState(null)
    const [subDistrict2,setSubDistrict2] = useState(null)
    const [detail2,setDetail2] = useState(null)
    const [code2,setCode2] = useState(null)

    // LOCAL STATE DROPDOWN
    const [showProvince,setShowProvince] = useState(false)
    const [showCity,setShowCity] = useState(false)

    // LOCAL STATE DATA PROVINCE & CITY
    const [dataProv,setDataProv] = useState([])
    const [dataCity,setDataCity] = useState([])

    // LOCAL STATE INPUT CLICK
    const [isClick,setIsClick] = useState(false)

    // LOCAL STATE LOADER
    const [loading,setLoading] = useState(false)

    let handleInAddress = () => {
        // let arr = [address,province,city,district,subDistrict,detail,code]
        setLoading(true)
        axios({
            method : "PUT",
            url : `${SWAGGER_URL}/users/profile/address`,
            data : {
                "title": address,
                "province_id": Number(province.province_id),
                "city_id": Number(city.city_id),
                "districts": district,
                "sub_district": subDistrict,
                "detail_address": detail,
                "postal_code": Number(code)
            },
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            return axios({
                method : 'GET',
                url : `${SWAGGER_URL}/users/profile`,
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
        })
        .then(({data})=>{
            // console.log('TAHAP 1 <<<<<<<')
            setLoading(false)
            setParent2(data.data.address)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response.data ,'  <<<< ERROR')
        })
    }

    let handleValidation = () => {
        setIsClick(true)
        let arr = [address,province,city,district,subDistrict,detail,code]
        let arr2 = [setAddress2,setProvince2,setCity2,setDistrict2,setSubDistrict2,setDetail2,setCode2]
        let arr3 = ['Alamat','Provinsi','Kota',"Kecamatan","Kelurahan","Detail Alamat","Postcal Code"]
        let next = true
        arr.forEach((e,i)=>{
            if (!e) {
                arr2[i](arr3[i] + " Harap di isi")
                next = false
            }
        })
        if (next) {
            handleInAddress()
        }
    }

    useEffect(()=>{
        if (isClick) {
            let arr = [address,province,city,district,subDistrict,detail,code]
            let arr2 = [setAddress2,setProvince2,setCity2,setDistrict2,setSubDistrict2,setDetail2,setCode2]
            let arr3 = ['Alamat','Provinsi','Kota',"Kecamatan","Kelurahan","Detail Alamat","Postcal Code"]
            // let next = true
            arr.forEach((e,i)=>{
                if (!e) {
                    arr2[i](arr3[i] + " Harap di isi")
                    // next = false
                }else {
                    arr2[i](null)
                }
            })
        }
    },[address,province,city,district,subDistrict,detail,code,isClick])

    let getCity = (el) => {
        setProvince(el)
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/rajaongkirs/cities?province=${el.province_id}`
        })
        .then(({data})=>{
            // console.log(' UUUUUUUU')
            setDataCity(data.data)
            // setDataProv(data.data)
        })
        .catch(err=>{
            console.log(err , ' <<, ERROR')
        })
    }

    useEffect(()=>{
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/rajaongkirs/provinces`
        })
        .then(({data})=>{
            setDataProv(data.data)
        })
        .catch(err=>{
            console.log(err , ' <<, ERROR')
        })
    },[])
    
    return (
        <div id="InputRef" className="cart-06-inpAdd">
            <h2>Address</h2>
            <Input
                style={{width : "100%",marginTop : 0}}
                text="Nama Alamat"
                setter={setAddress}
                value={address}
                isError={address2}
                message={address2}
            />
            <DropDown
                style={{width : "100%"}}
                text="Provinsi"
                setter={getCity}
                value={province}
                isError={province2}
                message={province2}
                showMenu={showProvince}
                setShowMenu={setShowProvince}
                dataMenu={dataProv}
                objName={["province"]}
            />
            <DropDown
                style={{width : "100%"}}
                text="Kota"
                setter={setCity}
                value={city}
                isError={city2}
                message={city2}
                showMenu={showCity}
                setShowMenu={setShowCity}
                dataMenu={dataCity}
                objName={["type","city_name"]}
            />
            <Input
                style={{width : "100%"}}
                text="Kecamatan"
                setter={setDistrict}
                value={district}
                isError={district2}
                message={district2}
            />
            <Input
                style={{width : "100%"}}
                text="Kelurahan"
                setter={setSubDistrict}
                value={subDistrict}
                isError={subDistrict2}
                message={subDistrict2}
            />
            <Input
                style={{width : "100%"}}
                text="Detail Alamat"
                setter={setDetail}
                value={detail}
                isError={detail2}
                message={detail2}
            />
             <Input
                style={{width : "100%"}}
                text="Postal Code"
                setter={setCode}
                value={code}
                isError={code2}
                message={code2}
            />
            {/* <DropDown/> */}
            <Button
                text={"Konfirmasi"}
                style={{width : "100%",marginTop : 20}}
                fn={handleValidation}
                loader={loading}
            />
        </div>
    )

}

export default InputAddress