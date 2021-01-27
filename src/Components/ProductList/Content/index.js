import React from 'react'

// MODULES
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

// ANT DESIGN 
import { Rate } from 'antd';
import './style.css'

// HELPER
import moneyConvert from '../../../Support/moneyConvert'

// STYLE
import 'antd/dist/antd.css';

// IMAGES
import productRecom from '../../../Assets/Images/recommended.png'

function Content (props) {

    // PARENT PROPS
    const { style } = props 

    // DECLARE HISTORY
    const history = useHistory()

    // GLOBAL STATE
    const list = useSelector(state=>state.product.productList)

    // LOCAL ACTION
    let renderDot = (name) => {
        if (name.length >= 27) {
            return "......"
        }else {
            return ""
        }
    }

    // LOCAL ACTION
    let renderList = () => {
        return list.map((el,index)=>{
            return (
            <div
                onClick={e=>history.push(`/product-detail?utm=origin&id=${el._id}`)}
            >
                <img 
                    className="slides-3-content-c1"
                    src={productRecom}
                    alt={'recom'}
                />
                <span className="slides-3-content-c2">
                    {
                        el.name.slice(0,23) + "" + renderDot(el.name)
                    }
                </span>
                <div className="slides-3-content-c3">
                    {
                        el.description.slice(0,23) + "" + renderDot(el.name)
                    }
                </div>
                <div className="slides-3-content-c4">
                    <Rate 
                        allowHalf 
                        defaultValue={5} 
                        style={{color : "#EB8A2F",fontSize : 20}}
                    />
                    <div className="slides-3-content-c4-t">
                        (5) 1.200
                    </div>
                </div>
                <div className="slides-3-content-c5">
                    {
                        el.sale_price >0 &&
                        <span>
                            {
                                moneyConvert(el.price.toString(),'Rp. ')
                            }
                        </span>
                    }
                    <div
                        style={{
                            marginLeft : el.sale_price <= 0 ? 0 : null 
                        }}
                    >
                        {
                            el.sale_price > 0 ? moneyConvert(el.sale_price.toString(),'Rp. ')  : moneyConvert(el.price.toString(),'Rp. ')
                        }
                    </div>
                </div>
                <div className="slides-3-content-c6">
                    Daftar
                </div>
            </div>
            ) 
        })
    }

    let renderSkeleton = () => {
        return [0,1,2,3,4].map(()=>{
            return (
                <div>
                    <Skeleton duration={0.3} width={"100%"} height={150}/>
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}}/>
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                </div>
            )
        })
    }

    return (
        <div className="slides-3" style={{...style}}>
            { list ? renderList() : renderSkeleton()}
        </div>
    )

}

export default Content