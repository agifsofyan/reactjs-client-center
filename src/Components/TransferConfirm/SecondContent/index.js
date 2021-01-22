import React from 'react'

// MATERIAL UI ICONS
import FileCopyIcon from '@material-ui/icons/FileCopy';

// IMAGES
import Bca from '../../../Assets/Images/bca.png'
import Bni from '../../../Assets/Images/bni.png'

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
                        88 9991 0006
                    </span>
                    <FileCopyIcon
                        style={{color : "5F5F5F", cursor : "pointer"}}
                        className="transfer-08-sc-icon"
                    />
                </div>
                <div>
                    <img
                        alt="icon-bank"
                        src={Bni}
                    />
                    <span>
                        88 9991 0006
                    </span>
                    <FileCopyIcon
                        style={{color : "5F5F5F", cursor : "pointer"}}
                        className="transfer-08-sc-icon"
                    />
                </div>
            </div>
        </div>
    )

}

export default SecondContent