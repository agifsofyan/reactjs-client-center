import React , { useEffect , useState } from 'react'

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

    // PROPS PARENT
    const { setSelectedTab } = props

    // HANLDE CHANGE TAB
    let handleChange = (index) => {
        setSelectedTab(index)
        history.push('/profile-update?edit=true')
    }

    // LOCAL STATE
    const [progress,setProgress] = useState(0)
    const [isChangeNumb,setIsChangeNumb] = useState(false)

    useEffect(()=>{
        if (userInfo && !isChangeNumb) {
            setIsChangeNumb(true)
            setProgress(progress + 4)
            if (userInfo.ktp_numb) {
                setProgress(progress + 24)
            }
            if (userInfo.phone_numbers) {
                if (userInfo.phone_numbers.length > 0) {
                    setProgress(progress + 24)
                }
            }
            if ( userInfo.favorite_topics) {
                if (userInfo.favorite_topics.length > 0) {
                    setProgress(progress + 24)
                }
            }
            if (userInfo.avatar) {
                setProgress(progress + 24)
            }
        }
    },[userInfo,isChangeNumb])

    let numbChange = () => {
        let num = 4
        if (userInfo.ktp_numb) {
            num+= 14
        }
        if (userInfo.phone_numbers) {
            if (userInfo.phone_numbers.length > 0) {
                num+= 14
            }
        }
        if ( userInfo.favorite_topics) {
            if (userInfo.favorite_topics.length > 0) {
                num+= 24
            }
        }
        if (userInfo.avatar) {
            num+= 9
        }
        return num
    }

    return (
        <div className="container">
            <div className="view-title">
                Lengkapi Profil Anda
            </div>

            <React.Fragment>
                {
                    userInfo && <ProgressBar style={{width : "100%"}} bgcolor='#FFCA41' completed={numbChange()} />
                }
            </React.Fragment>

            {
                userInfo && userInfo.favorite_topics &&
                <ViewContent
                    title={"Topik"}
                    status={userInfo.favorite_topics.length > 0 ? true : false}
                    action={()=>handleChange(2)}
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
                    status={ userInfo.ktp_numb && userInfo.ktp_numb ? true : false}
                    action={()=>handleChange(3)}
                />
            }

            {
                userInfo && userInfo.phone_numbers &&
                <ViewContent
                    title={"Nomor HP"}
                    status={ userInfo.phone_numbers && userInfo.phone_numbers[0].phone_number ? true : false}
                    action={()=>handleChange(3)}
                />
            }

        </div>
    )

}

export default View