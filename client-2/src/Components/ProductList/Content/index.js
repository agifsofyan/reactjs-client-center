import React from 'react'

// MODULES
// import { useSelector } from 'react-redux'

// ANT DESIGN 
import { Rate } from 'antd';
import '../style.css'

// STYLE
import 'antd/dist/antd.css';

// IMAGES
import productRecom from '../../../Assets/Images/recommended.png'

function Content () {

    // const list = useSelector(state=>state.product.productList)

    // let renderList = () => {
    //     return list.map((el,index)=>{
    //         return 
    //     })
    // }

    return (
        <div className="slides-3">
            <div>
                <img 
                    className="slides-3-content-c1"
                    src={productRecom}
                    alt={'recom'}
                />
                <span className="slides-3-content-c2">
                    BOE THE MAN PO
                </span>
                <div className="slides-3-content-c3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the  
                </div>
                <div className="slides-3-content-c4">
                    <Rate 
                        allowHalf 
                        defaultValue={5} 
                        style={{color : "#EB8A2F",fontSize : 15}}
                    />
                    <div className="slides-3-content-c4-t">
                        (5) 1.200
                    </div>
                </div>
                <div className="slides-3-content-c5">
                    <span>
                        Rp. 1.900.000,00
                    </span>
                    <div>
                        Rp. 9.000.00,00
                    </div>
                </div>
                <div className="slides-3-content-c6">
                    JOIN
                </div>
            </div>
        </div>
    )

}

export default Content