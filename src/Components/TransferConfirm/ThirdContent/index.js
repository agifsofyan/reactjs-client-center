import React , { useState } from 'react'

import DatePicker from "react-datepicker";

// COMPONENT
import Menu from '../../CheckOut/Menu'
import Loader from '../../Loader'

// REACT DATE PICKER STYLE 
import "react-datepicker/dist/react-datepicker.css";

// STYLE
import './style.css'

function ThirdContent (props) {

    const {
        tanggalTransfer,
        setTanggalTransfer,
        bank,
        setBank,
        order,
        num,
        setNum,
        name,
        setName,
        image,
        setImage,
        handleConfirmation,
        handleConfirmation2,
        loading,
    } = props

    // const [dateShow,setDateShow] = useState(true)

    const [showMenu,setShowMenu] = useState(false)

    // VALIDATION ERROR
    const [dateVal,setDateVal] = useState(null)
    const [nameVal,setNameVal] = useState(null)
    const [numVal,setNumVal] = useState(null)


    const CustomDate = ({value,onClick}) => {
        // if (dateShow ) {
        //     return (
        //         <CalendarTodayIcon
        //             onClick={onClick}
        //             style={{marginTop : 5}}
        //         />
        //     )
        // }else {
        //     return null
        // }
        return (
            <div onClick={onClick} className="transfer-08-date-root">
                {
                    tanggalTransfer ?
                    formatDate(tanggalTransfer) :
                    "Pilih Tanggal"
                }
                <div style={{width : 100, cursor : "pointer",}} onClick={onClick}>

                </div>
            </div>
        )
    }

    const validation = () => {

        console.log('JNDSJFNDJSNFDSJNF')

        let isNext = true

        if (num === "" || !num) {
            setNumVal("Harap isi Nomor Rekening")
            isNext = false
        }else if (num.length < 10) {
            setNumVal("Minimal Nomor Rekening 10 digit")
            isNext = false
        }
        
        if (name === "" || !name ) {
            setNameVal("Harap isi Nama Pengiririm")
            isNext = false
        }

        if (tanggalTransfer === "" || !tanggalTransfer) {
            setDateVal("Harap isi Tanggal Transfer")
            isNext = false
        }

        if (isNext ) {
            if (image) {
                handleConfirmation()
            }else {
                handleConfirmation2()
            }
        }

    }

    const handleChangeDate = (date) => {
        console.log(date , ' <<<< VALUE DATE')
        let date1 = new Date().getTime()
        let date2 = new Date(date).getTime()
        if (date2 <= date1) {
            setTanggalTransfer(date)
        }else {
            alert("Tanggal kelebihan")
        }
    }

    const formatDate = (date) => {
        let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        let months = ['Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        
        let day = new Date(date).getDay()
        let date2 = new Date (date).getDate()
        let month = new Date(date).getMonth()
        let year = new Date(date).getFullYear()

        return `${days[day]}, ${(date2 <= 9 ? "0" + date2 : date2)} ${months[month]} ${year}` 

    }

    return (
        <div className="transfer-08-tc">
            <h3>
                Setelah Melakukan Pembayaran Silahkan Isi Form ini
            </h3>
            <div className="transfer-08-tc-line">
            </div>
            
            {/* INVOICE  */}
            <span>Invoice No.</span>
            <div className="invoice">
                {
                    order.invoice
                }
            </div>

            <span>Tanggal Transfer</span>
            <div 
                className="transfer-08-tc-date"
                style={{border : dateVal && '0.1px solid red'}}
            >
                
                {/* <div>
                    {   tanggalTransfer &&
                        new Date(tanggalTransfer).toDateString()
                    }
                </div> */}

                {/* DATE PICKER */}
                <DatePicker 
                    onChange={date=>handleChangeDate(date)}
                    closeOnScroll={e => e.target === document} 
                    // onCalendarClose={e=>setDateShow(true)}
                    // onCalendarOpen={e=>setDateShow(false)}
                    calendarClassName="transfer-08-calendar"
                    // className="transfer-08-tc-date-2"
                    customInput={<CustomDate/>}
                    dateFormat="MM/yyyy"
                    endDate={new Date("2021/23/02")}
                />
            </div>
            
            {/* ERROR DATE */}
            {
                dateVal &&
                <div className="error-m-08">{dateVal}</div>
            }
            
            {/* PILIH BANK */}
            <span>Transfer Dari Bank</span>
            <Menu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                style={{width : "90%",height : 38,marginTop : 5}}
                titleStyle={{fontSize : 16,fontWeight : "normal"}}
                data={['BCA',"BNI"]}
                selected={bank}
                setSelected={setBank}
            />
            
            {/* NAMA PENGIRIM */}
            <span>Nama Rekening Pengirim</span>
            <input
                style={{border : nameVal && '0.1px solid red'}}
                onChange={e=>setName(e.target.value)}
                placeholder={"Nama Pengirim"}
            />

            {/* ERROR NAME PENGIRIRM */}
            {
                nameVal &&
                <div className="error-m-08">{nameVal}</div>
            }
            
            {/* NOMOR PENGIRIM */}
            <span>Nomor Rekening Pengirim</span>
            <input
                style={{border : numVal && '0.1px solid red'}}
                onChange={e=>setNum(e.target.value)}
                placeholder={"Nomor Rekening Pengirim"}
            />
            {
                numVal &&
                <div className="error-m-08">{numVal}</div>
            }
            
            {/* UPLOAD IMAGE */}
            <div style={{width : "90%"}}>
                <label className="transfer-08-b-upload">
                    <input type="file"  onChange={e=>setImage(e.target.files[0])}/>
                    <span>Upload</span>
                </label>
            </div>

            <div style={{marginTop : 5,width : "90%"}}>
                {
                    image && image.name
                }
            </div>
            
            <button
                onClick={e=>validation()}
            >
                {
                    loading ? 
                    <Loader/> :
                    "Konfirmasi Pembayaran"
                }
            </button>
        
        </div>
    )

}


export default ThirdContent