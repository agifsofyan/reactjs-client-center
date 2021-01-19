import React , { useState , useEffect } from 'react'

// PAGES COMPONENT
import Cart from '../Cart'
import CartNlg from '../CartNLog'

function CartContainer () {

    // LOCAL STATE
    const [selectedPage,setSelectedPage] = useState(0)

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            setSelectedPage(1)
        }
    },[])

    return (
        <div style={{display : "flex",justifyContent : "center",alignItems : "center",width : "100%"}}>
            {
                selectedPage === 0 ?
                <CartNlg setSelectedPage={setSelectedPage}/> 
                : <Cart setSelectedPage={setSelectedPage}/>
            }
        </div>
    )

}   

export default CartContainer