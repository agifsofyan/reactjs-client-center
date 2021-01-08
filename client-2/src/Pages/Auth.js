import React , { useState } from 'react'

// COMPONENT
import { Header , Login ,Register } from '../Components/Auth'

function Auth () {

    const [selectedTab,setSelectedTab] = useState(0)

    return (
        <div style={{width : "100%",display : "flex" , flexDirection : "column" ,alignItems : "center" ,  minHeight : "100vh" , backgroundColor : "#FFFFFF"}}>
           <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
           />
           {
               selectedTab === 0 ? 
               <Login 
                    setSelectedTab={setSelectedTab}
                /> : 
                <Register
                    setSelectedTab={setSelectedTab}
                />
           }
        </div>
    )

}

export default Auth