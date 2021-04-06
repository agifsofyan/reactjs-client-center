import React from 'react'

// MODULE
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

// COMPONENT
import ProgressBar from '../../../../Components/ProgressBar/index';
import ViewContent from './ViewContent'

function View (props) {

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);

    // HISTORY
    const history = useHistory()

    const { setSelectedTab } = props

    let handleChange = (index) => {
        setSelectedTab(index)
        history.push('/profile-update?edit=true')
    }

    return (
        <div className="container">
            <div className="view-title">
                Lengkapi Profil Anda
            </div>
            <React.Fragment>
                <ProgressBar style={{width : "100%"}} bgcolor='#FFCA41' completed={10} />
            </React.Fragment>

            {
                userInfo && userInfo.favorite_topics &&
                <ViewContent
                    title={"Topic"}
                    status={userInfo.favorite_topics.length > 0 ? true : false}
                    action={()=>handleChange(1)}
                />
            }
            
            {
                userInfo && userInfo.address &&
                <ViewContent
                    title={"Daftar Alamat Pengiriman"}
                    status={ userInfo.address && userInfo.address.length > 0 ? true : false}
                    action={()=>handleChange(3)}
                />
            }

            {
                userInfo && 
                <ViewContent
                    title={"Verifikasi KTP"}
                    status={ userInfo.ktp_verified}
                    action={()=>handleChange(3)}
                />
            }

        </div>
    )

}

export default View