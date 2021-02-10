import React , { useEffect, useState } from 'react'

// MODULE
import axios from 'axios'

// API
import { SWAGGER_URL } from '../../../Support/API_URL'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import './style.css'

function FirstContent () {

    // LOCAL STATE DATA ORDER
    const [order,setOrder] = useState(null)

    // PRICE
    const [price,setPrice] = useState(0)
    const [sale,setSale] = useState(0)
    const [diskon,setDiskon] = useState(0)

    useEffect(()=>{

        let priceNum = 0
        let saleNum = 0
        // GET ORDER
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/orders/self`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data[0] , ' DATA ORDER')
            let arr = data.data[0].items
            let bumpArr = []
            // ecommerce
            arr.forEach(e=>{
                priceNum += e.product_info.price
                saleNum += e.product_info.sale_price
                if (e && e.product_info && e.product_info.bump) {
                    bumpArr.push(...e.product_info.bump)
                }
                // setBump(bumpArr)
                // setPrice(priceNum)
                // setSale(saleNum)
                // e = {...e,isChecked : true}
            })
            setPrice(priceNum)
            setSale(saleNum)
            setDiskon(priceNum - saleNum)
            console.log(data.data[0] , ' <<< DATA ORDER >>>>')
            setOrder(data.data[0])
        })
        .catch(err=>{
            console.log(err ,  ' <<< ERROR GET ORDER LIST')
        })
    },[])

    let renderItems = () => {
        return order.items.map((e,index)=>{
            return (
                <div>
                    <span>{e.product_info.name}</span>
                    <span>
                        {
                            moneyConvert(e.product_info.price.toString(), "Rp. " )
                        }
                    </span>
                </div>
            )
        })
    }

    return (
        <div className="transfer-08-fc">
            <div className="transfer-08-fc-1">
                <h3>
                    Kelas
                </h3>
            </div>
            <div className="transfer-08-fc-2">
                {
                    order && renderItems()
                }
                <div>
                    <span>{order&&order.coupon.code}</span>
                    <span>{order&& moneyConvert( order.coupon.value.toString(),"Rp. ")}</span>
                </div>
                <div className="transfer-08-fc-2-line">

                </div>
                <div>
                    <b>Silahkan Transfer</b>
                    <b>Rp. 210.112</b>
                </div>
            </div>
        </div>
    )

}

export default FirstContent