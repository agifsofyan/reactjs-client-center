import React , { useState , useEffect } from 'react'

// MODULE 
import axios from 'axios'

// COMPONENTS
import DropDown from '../../../DropDown'
import Loading from '../../../Loader'

// API
import { SWAGGER_URL } from '../../../../Support/API_URL'

function Edit3 () {

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
                "sub_district": Number(subDistrict),
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
            // setParent2(data.data.address)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response.data ,'  <<<< ERROR')
        })
    }
    

    return (
        <div className="container-input" >
            <div className="title" style={{marginTop : 30}}>Nama Alamat</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setAddress(e.target.value)}
                value={address}
            />
            <DropDown
                style={{width : "90%"}}
                styleI={{borderRadius : 5}}
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
                style={{width : "90%"}}
                styleI={{borderRadius : 5}}
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
            <div className="title">Kecamatan</div>
            <input 
                type="number" 
                className="input1"
                onChange={e=>setDistrict(e.target.value)}
                value={district}
            />
            <div className="title">Kelurahan/Desa</div>
            <input 
                type="number" 
                className="input1"
                onChange={e=>setSubDistrict(e.target.value)}
                value={subDistrict}
            />
            <div className="title">Detail Alamat</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setDetail(e.target.value)}
                value={detail}
            />
            <div className="title">Postcal Kode</div>
            <input 
                type="text" 
                className="input1"
                onChange={e=>setCode(e.target.value)}
                value={code}
            />
            <div 
                className="button1"
                onClick={e=>handleInAddress(e)}
            >
                {
                    loading ? <Loading/> : "Simpan"
                }
            </div>
        </div>
    )

}

export default Edit3