import React from 'react'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// STYLE
import './style.css'

function ThirdContent () {

    return (
        <div className="card-06-tc-container">
            <div className="card-06-tc-c1">
                <div className="card-06-tc-c1-1">
                    <span>BAYAR75</span>
                    <ExpandMoreIcon className="card-06-tc-c1-1-icon"/>
                </div>
            </div>
            <div className="card-06-tc-c2">
                Mendapat diskon sebesar 75%
            </div>
            <div className="card-06-tc-c3">
                <div className="c06-tc-c3-1">
                    <div className="c06-tc-c3-1-ta" style={{marginTop :0}}>
                        <div style={{display : "flex",alignItems : "center",justifyContent : "center"}}>
                            <div className="c06-tc-c3-1-ta-text">Courses : </div>
                            <div className="c06-tc-c3-1-ta-bold"> 5</div>
                        </div>
                        <span className="c06-tc-c3-1-ta-text" style={{paddingTop : 2}}>
                            Rp 9.500.000
                        </span>
                    </div>
                    <div className="c06-tc-c3-1-ta">
                        <span className="c06-tc-c3-1-ta-text">Harga : </span>
                        <span className="c06-tc-c3-1-ta-text">Rp 6.800.000</span>
                    </div>
                    <div className="c06-tc-c3-1-ta">
                        <span className="c06-tc-c3-1-ta-text">Hemat : </span>
                        <span className="c06-tc-c3-1-ta-text">Rp 2.200.000</span>
                    </div>
                    <div className="c06-tc-c3-1-tb">
                        <div className="c06-tc-c3-1-tb-text2">
                            Total Sale Price
                        </div>
                        <div className="c06-tc-c3-1-tb-bold2">
                            Rp 6.800.000
                        </div>
                    </div>
                    <div className="c06-tc-c3-1-tb">
                        <div className="c06-tc-c3-1-tb-button">
                            PILIH METODE PEMBAYARAN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ThirdContent