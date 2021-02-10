import React , { useState } from 'react'

// IMAGES
import Bca from '../../../Assets/Images/bca.png'
import Bni from '../../../Assets/Images/bni.png'
import copy from '../../../Assets/Images/copy.png'

// STYLE
import './style.css'

function SecondContent () {

    // LOCAL STATE
    const [bcaCopy,setBcaCopy] = useState("Copy Text Ini")
    const [bniCopy,setBniCopy] = useState("Copy Text Ini")

    let handleCopy = () => {
        let el = document.querySelector(`#bca-rekening-sel`)
        el.select()
        setBcaCopy("Berhasil Di Copy")
        document.execCommand('copy')
    }

    let handleCopy2 = () => {
        let el = document.querySelector(`#bni-rekening-sel`)
        el.select()
        setBniCopy("Berhasil Di Copy")
        document.execCommand('copy')
    }

    // COPY BCA
    document.querySelector("#bca-copy-cl") && document.querySelector("#bca-copy-cl").addEventListener("click",handleCopy)

    // COPY BNI
    document.querySelector("#bni-copy-cl") && document.querySelector("#bni-copy-cl").addEventListener("click",handleCopy2)

    return (
        <div className="transfer-08-sc">
            <div className="transfer-08-sc-1">
                <h3>
                    Ke Rekening A/N CV. Pelatihan Indonesia Sukses
                </h3>
            </div>
            <div className="transfer-08-sc-2">
                <div>
                    <img
                        alt="icon-bank"
                        src={Bca}
                    />
                    <input
                        value="8831310006"
                        id="bca-rekening-sel"
                        type="text"
                    />
                    <div
                        onMouseLeave={e=>setBcaCopy("Copy Text Ini")}
                    >
                        <img
                            id="bca-copy-cl"
                            className="icon-copy"
                            src={copy}
                            alt="copy-logo"
                        />
                        <div className="tooltiptext">
                            {bcaCopy}
                        </div>
                    </div>
                </div>
                {/* <div>
                    Berhasil di copy ke clipboard!
                </div> */}
                <div>
                    <img
                        alt="icon-bank"
                        src={Bni}
                    />
                    <input
                        value="8831310000"
                        id="bni-rekening-sel"
                        type="text"
                    />
                    <div
                        onMouseLeave={e=>setBniCopy("Copy Text Ini")}
                    >
                        <img
                            id="bni-copy-cl"
                            className="icon-copy"
                            src={copy}
                            alt="copy-logo"
                        />
                        <div className="tooltiptext">
                            {bniCopy}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SecondContent