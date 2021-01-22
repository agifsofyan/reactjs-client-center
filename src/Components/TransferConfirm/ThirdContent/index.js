import React from 'react'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// STYLE
import './style.css'

function ThirdContent () {

    return (
        <div className="transfer-08-tc">
            <h3>
                Setelah Melakukan Pembayaran Silahkan Isi Form ini
            </h3>
            <div className="transfer-08-tc-line">
            </div>
            <span>Tanggal Transfer</span>
            {/* <input/> */}
            <div className="transfer-08-tc-date">
                <DatePicker closeOnScroll={e => e.target === document} className="transfer-08-tc-date-2"/>
            </div>
            <span>Transfer Dari Bank</span>
            <input/>
            <span>Nama Rekening Pengirim</span>
            <input/>
            <span>Tanggal Transfer</span>
            <input/>
            <div style={{width : "90%"}}>
                <label className="transfer-08-b-upload">
                    <input type="file"  onChange={e=>console.log(e.target.files[0])}/>
                </label>
            </div>
            <button>
                Konfirmasi Pembayaran
            </button>
        </div>
    )

}


export default ThirdContent