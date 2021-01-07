import React , { useState } from 'react'

// COMPONENT 
import Input from '../../Components/Auth/Input'
import Button from '../../Components/Button'

// STYLE
import './style.css'

// IMAGES
import il from '../../Assets/Images/cp.png'

function ChangePass () {

    const [email,setEmail] = useState(null)

    return (
        <div className="change-pass-container">
            <img
                src={il}
                alt={'change-pass'}
            />
            <span className="change-pass-bold">
                Reset Password
            </span>
            <div className="change-pass-text">
                Enter the email associated with your account to confirm the ownership of the account.
            </div>
            <Input
                text={"Email Address"}
                value={email}
                setter={setEmail}
                style={{width : 361}}
            />
            <Button
                text={'Confirm'}
                style={{width : 290,marginTop : 20}}
            />
        </div>
    )

}

export default ChangePass