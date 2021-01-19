import React , { useState } from 'react'

// COMPONENT
import {  CheckEmail , Login , Register } from '../../Components/Auth'

function Auth () {

    // LOCAL STATE
    const [selectedTab,setSelectedTab] = useState(0)
    const [email,setEmail] = useState(null)

    // RENDER PAGE 
    let renderPage = () => {
        if (selectedTab === 0) { 
            return ( 
                <CheckEmail 
                    email={email} 
                    setEmail={setEmail} 
                    setSelectedTab={setSelectedTab}
                /> 
            )
        } else if (selectedTab === 1) { 
            return ( 
                <Login
                    email={email}
                /> 
            ) 
        } else if (selectedTab === 2) { 
            return ( 
                <Register
                    email={email}
                /> 
            ) 
        }
    }

    return (
        <div style={{width : "100%",display : "flex" , flexDirection : "column" ,alignItems : "center" ,  minHeight : "100vh" , backgroundColor : "#FFFFFF"}}>
           {
               renderPage()
           }
        </div>
    )

}

export default Auth