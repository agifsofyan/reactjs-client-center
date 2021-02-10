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

    // LOCAL STATE
    const [arrImg] = useState([image1,image2,image3,image4])
    const [selected,setSelected] = useState(0)
    const [lastLen] = useState(arrImg.length -1)

    // HISTORY
    const history = useHistory()

    useEffect(()=>{
        console.log(selected , ' <<<< VALUE SELECTED >>>')
        console.log(lastLen , ' <<< LAST LEN')
    },[selected,lastLen])

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

    console.log(productHeader , ' <<<< HEADER')

    return (
        <div className="plc-carousel-container">
            
            <div className="plc-carousel-fc">
                <NavigateBeforeIcon
                    onClick={e=>handleMin()}
                    style={{fontSize : 44,cursor : 'pointer'}}
                />
                    {
                        list ?
                        <img
                            src={arrImg[selected]}
                            alt="list-p"
                        />  :
                        <Skeleton duration={0.3} height={194} width={197} style={{borderRadius : 6}}/> 
                    }
                <NavigateNextIcon
                    onClick={e=>handlePlus()}
                    style={{fontSize : 40,cursor : 'pointer'}}
                />
            </div>
            {   
                list ?
                <h1>
                    {productHeader && productHeader.name}
                </h1> :
                <Skeleton duration={0.1} width={220} height={15} style={{marginTop : 15}} /> 
            }

            {
                list ?
                <h2>
                    {productHeader && productHeader.description}
                </h2> :
                <Skeleton duration={0.1} width={200} height={15} style={{marginTop : 15}} /> 
            }

            <button
                onClick={e=> productHeader && history.push(`/product-detail/${productHeader.slug}?utm=origin`)}
            >
                JOIN
            </button>

            <div className="plc-carousel-container-pagination">
                {
                    arrImg.map((el,index)=>{
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

            </div>

        </div>
    )

}

export default Carousel