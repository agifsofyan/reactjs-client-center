import React , { useState } from 'react'

// COMPONENT 
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'

// IMAGES
import rp from '../../Assets/Images/Illustration.png'

function ResetPassword () {

    const [password,setPassword] = useState(null)
    const [confirm,setConfirm] = useState(null)

    return (
        <div className="change-pass-container">
            <img
                src={rp}
                alt={'reset-pass'}
            />
            <span className="change-pass-bold">
                Create New Password
            </span>
            <div className="change-pass-text">
                Your new password must be different from previous used password.
            </div>

            <Input
                text={"Password"}
                value={password}
                setter={setPassword}
                style={{width : 361}}
                isPassword={true}
                eyeStyle={{marginRight : 14}}
            />

            <Input
                text={"Confirm Password"}
                value={confirm}
                setter={setConfirm}
                style={{width : 361}}
                isPassword={true}
                eyeStyle={{marginRight : 14}}
            />

            <Button
                text={'Confirm'}
                style={{width : 290,marginTop : 20}}
            />
        </div>
    )

}

export default ResetPassword