import React from 'react'

// MODULES
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

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
            return "..."
        }else {
            return ""
        }
    }

    let handleDescription = (el) => {
        if (el.description[0] === "<" && el.description[1] === 'p' && el.description[2] === '>' ) {
            return el.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0,36) + "" + renderDot(el.description)
        }else {
            return el.description.slice(0,36) + "" + renderDot(el.description)
        }
    }

    let imageExists = (image_url) => {

        // var http = new XMLHttpRequest();
        // http.open('HEAD', image_url , true);
        // http.send();
        // // console.log(http.status , ' <<< STATUS')
        // return http.status != 404;
        return true
    }


    let checkArr = (img) => {
        let status = Array.isArray(img)
        if (status) {
            return img[0]
        }else {
            return img
        }
    }

    // LOCAL ACTION
    let renderList = () => {
        return list.map((el,index)=>{
            return (
            <div
                // onClick={e=>history.push(`/product-detail?utm=origin&id=${el._id}`)}
                onClick={e=>history.push(`/product-detail/${el.slug}?utm=origin`)}
            >
                <img 
                    className="slides-3-content-c1"
                    src={ imageExists(el.image_url) ? checkArr(el.image_url) : productRecom}
                    alt={'Image Not Found'}
                />
                <span className="slides-3-content-c2">
                    {
                      el.name && el.name.slice(0,23) + "" + renderDot(el.name)
                    }
                </span>
                <div className="slides-3-content-c3">
                    {
                        el.description && handleDescription(el)
                    }
                </div>
                <div className="slides-3-content-c4">
                    {/* <Rate 
                        allowHalf 
                        defaultValue={5} 
                        style={{color : "#EB8A2F",fontSize : 20}}
                    /> */}
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked" style={{marginRight : 0}}></span>
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