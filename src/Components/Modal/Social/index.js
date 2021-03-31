import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// IMAGES MEDIA SOCIAL
import ig from '../../../Assets/Images/instagram.png' 
import fb from '../../../Assets/Images/facebook.jpg' 
import yt from '../../../Assets/Images/yt.png' 
import tt from '../../../Assets/Images/tt.png' 

function Social (props) {

    const { handleModalClose } = props

    // HISTORY
    const history = useHistory()

    let handleRoute = () => {
        handleModalClose()
        history.push('/subscribe')
    }

    return (
        <div className="bmc-content-6">
            <img
                src={ig}
                alt="drawer-img-1"
                onClick={e=>handleRoute()}
                style={{marginLeft : 0}}
            />
            <img
                src={fb}
                alt="drawer-img-1"
                onClick={e=>handleRoute()}
            />
            <img
                src={yt}
                alt="drawer-img-1"
                onClick={e=>handleRoute()}
            />
            <img
                src={tt}
                alt="drawer-img-1"
                onClick={e=>handleRoute()}
            />
            <div>
                @larunocom
            </div>
        </div>
    )

}

export default Social