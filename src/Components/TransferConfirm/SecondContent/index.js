import React from 'react'

// IMAGES
import Bca from '../../../Assets/Images/bca.png'
import Bni from '../../../Assets/Images/bni.png'
import copy from '../../../Assets/Images/copy.png'

// STYLE
import './style.css'

function SecondContent () {

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
                    <span>
                        88 3131 0006
                    </span>
                    <img
                        className="icon-copy"
                        src={copy}
                        alt="copy-logo"
                    />
                </div>
                <div>
                    <img
                        alt="icon-bank"
                        src={Bni}
                    />
                    <span>
                        88 3131 0000
                    </span>
                    <img
                        className="icon-copy"
                        src={copy}
                        alt="copy-logo"
                    />
                </div>
            </div>
        </div>
    )

}

export default SecondContent