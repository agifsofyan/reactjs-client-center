import React , { useState } from 'react'

// MODULE
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

// COMPONENT
import { ContainerForm } from '../../Components/ProfileUpdate'
import Footer from '../../Components/LMSFooter'

// MATERIAL ICON
import PermMediaIcon from '@material-ui/icons/PermMedia';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

// STYLE
import './style.css'

function ProfileUpdate (props) {

    // USE HISTORY
    const history = useHistory()

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);
    
    console.log(userInfo , ' <<< value user info')

    // LOCAL STATE
    const [isEdit,setIsEdit] = useState(false)

    // LOCAL STATE TAB
    const [selectedTab,setSelectedTab] = useState(0)

    return (
        <div className="profile-update-17">


            <div className="c1">
                {/* <div>

                </div> */}
                <div className="t1">
                    Profil
                </div>
                <div 
                    className="t2"
                    // onClick={e=>setIsEdit(!isEdit)}
                    onClick={e=>props.location.search === "" ? [history.push('/profile-update?edit=true'),setSelectedTab(0)] : history.push('/profile-update')}
                >
                    {
                        props.location.search !== "" &&
                        <KeyboardBackspaceIcon style={{color : "#ffffff",fontSize : 21,cursor : "pointer",marginLeft : 5}}/>
                    }
                    <div className="text">
                        {props.location.search !== "" ? "Kembali" : "Edit"}
                    </div>
                    {
                        props.location.search === "" &&
                        <EditIcon style={{color : "#ffffff",fontSize : 21,cursor : "pointer"}}/>
                    }
                </div>
            </div>
            <div className="c2">
                <div className="profile">
                    <div className="t1">
                        <PermMediaIcon/>
                    </div>
                </div>
                <div className="list-data">
                    <div>
                        {
                            userInfo && userInfo.name
                        }
                    </div>
                    <div>
                        {
                            userInfo && userInfo.email
                        }
                    </div>
                    <div>
                        {
                            userInfo && userInfo.phone_numbers && userInfo.phone_numbers.length > 0 && userInfo.phone_numbers[0].country_code +   userInfo.phone_numbers[0].phone_number   
                        }
                    </div>
                </div>
            </div>
            <ContainerForm
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                {...props}
            />

            <Footer/>
            
        </div>
    )

}

export default ProfileUpdate;