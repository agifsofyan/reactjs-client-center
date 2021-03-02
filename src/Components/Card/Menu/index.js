import React from 'react'

// MODULE
import axios from 'axios'

// API
import {  SWAGGER_URL } from '../../../Support/API_URL'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Menu (props) {

    const { showMenu,setShowMenu , address , selectedAddress,setSelectedAddress , cart , setShipmentPrice } = props

    let getWeight = () => {
        let numR = 0
        cart.forEach(e=>{
            let check = e.product_info.type
            if (check === 'ecommerce') {
                let ec = e.product_info.ecommerce
                if (ec) {
                    numR += (ec.weight * e.quantity)
                }
                // console.log(e , ' <<<< PER ITEM ECOMMERCE')
            }
        })
        console.log(numR , ' <<<< NUM R')
        return numR
    }

    let handleShipping = (data) => {
        setSelectedAddress(data)
        setShowMenu(false)
        // getWeight()
        // console.log(data , ' <<<<< DATA SHIPPING')
        // console.log(getWeight() , ' <<< RESULT WEIGHT')
        // setShipmentPrice( getWeight() )
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/rajaongkirs/cost`,
            data : {
                "destination": data ? data.city_id.toString() : "",
                "weight": getWeight()
            },  
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }                       
        })
        .then(({data})=>{
            if (data.data) {
                if (data.data.cost) {
                    console.log(data.data.cost , ' <<<< FIX DATA ONGKIR DATA ONGKIR PENTING 88898989898998)()()() >>>')
                    setShipmentPrice(data.data.cost.value)
                }
            }               
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERROR SHIPMENT')
        })
    }

    let renderData = () => {
        return address.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>handleShipping(el)}
                >
                    {
                        el.detail_address
                    }
                </div>
            )
        })
    }

    return (
        <div style={{
                        height : showMenu && 157, 
                        overflowY : showMenu && "scroll",
                        marginTop : 26,
                        width : "86%"
                    }}  
            className="card-06-tc-c1"
            onClick={e=>setShowMenu(!showMenu)}
        >
            <div style={{height : showMenu &&  48, marginTop : showMenu && 6.5}} className="card-06-tc-c1-1">
                <span 
                    style={{fontWeight : 300,fontSize : 18}}
                >
                    { 
                        selectedAddress ?
                        selectedAddress.detail_address.slice(0,40)  + ( selectedAddress.detail_address.length > 40 ? "....." : "" ) :
                        "Pilih Alamat"
                    }
                </span>
                {
                    showMenu ? 
                        <ExpandLessIcon onClick={e=>setShowMenu(false)} className="card-06-tc-c1-1-icon"/> :
                        <ExpandMoreIcon onClick={e=>setShowMenu(true)} className="card-06-tc-c1-1-icon"/>
                }
            </div>
            {
                showMenu && renderData()
            }
        </div>
    )

}

export default Menu