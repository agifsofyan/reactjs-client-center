import React , { useState , useEffect} from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// IMAGE
import image1 from '../../../Assets/Images/p-list-1.png'
import image2 from '../../../Assets/Images/product.png'
import image3 from '../../../Assets/Images/dummy.jpg'
import image4 from '../../../Assets/Images/content-1.png'


// STYLE
import './style.css'

function Carousel () {

    // GLOBAL STATE
    const list = useSelector(state=>state.product.productList)
    const productHeader = useSelector(state=>state.product.productHeader)

    console.log(list , ' <<< VALUE LIST HERE ****')

    // LOCAL STATE
    const [arrImg] = useState([image1,image2,image3,image4])
    const [selected,setSelected] = useState(0)
    const [lastLen,setlastLen] = useState(0)

    // HISTORY
    const history = useHistory()

    useEffect(()=>{
        console.log(productHeader , ' <<< PRODUK HEADER LOL')
        if (productHeader) {
            if (productHeader.image_url) {
                setlastLen(productHeader.image_url.length -1)
            }
        }
    },[productHeader])

    useEffect(()=>{
        if (list) {
            setlastLen(list.length -1)
        }
    },[list])

    let handlePlus = () => {
        if (selected !== lastLen) {
            setSelected(selected +1)
        }else {
            setSelected(0)
        }
    }
    
    let handleMin = () => {
        if (selected !== 0) {
            setSelected(selected - 1)
        }else {
            setSelected(lastLen)
        }
    }

    let renderNav = () => {
        let arr;
        if (productHeader ) {
            if (productHeader.image_url) {
                arr = productHeader.image_url
            }else {
                arr = arrImg
            }
        }else {
            arr = arrImg
        }
        return arr.map((el,index)=>{
            if (index === selected) {
                return (
                    <main style={{marginLeft : index === 0 && 0}}>

                    </main>
                )
            }else {
                return (
                    <div style={{marginLeft : index === 0 && 0}}>
        
                    </div>
                )
            }
        })
    }

    // let

    return (
        <div className="plc-carousel-container">
            
            <div 
                style={{
                    justifyContent : lastLen < 1 && "center"
                }}
                className="plc-carousel-fc"
            >
                {
                    lastLen >= 1 &&
                    <NavigateBeforeIcon
                        onClick={e=>handleMin()}
                        style={{fontSize : 44,cursor : 'pointer'}}
                    />
                }
                {
                    list ?
                    <img
                        src={ list ? list[selected].image_url[0] : arrImg[selected]}
                        alt="list-p"
                    />  :
                    <Skeleton duration={0.3} height={194} width={197} style={{borderRadius : 6}}/> 
                }
                {
                    lastLen >= 1 &&
                    <NavigateNextIcon
                        onClick={e=>handlePlus()}
                        style={{fontSize : 40,cursor : 'pointer'}}
                    />
                }
            </div>
            {   
                list ?
                <h1>
                    {list && list[selected].name}
                </h1> :
                <Skeleton duration={0.1} width={220} height={15} style={{marginTop : 15}} /> 
            }

            {
                list ?
                <h2>
                    {list && list[selected].description.replace(/<\/?[^>]+(>|$)/g, "")}
                </h2> :
                <Skeleton duration={0.1} width={200} height={15} style={{marginTop : 15}} /> 
            }

            <button
                onClick={e=> list && history.push(`/product-detail/${list[selected].slug}?utm=origin`)}
            >
                JOIN
            </button>
            <div style={{marginBottom : 13}}>

            </div>

            {/* <div className="plc-carousel-container-pagination">
                {
                    renderNav()
                }
            </div> */}

        </div>
    )

}

export default Carousel