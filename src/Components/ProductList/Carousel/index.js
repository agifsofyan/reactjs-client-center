import React from 'react'

// MODULE
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// IMAGE
import image1 from '../../../Assets/Images/p-list-1.png'

// STYLE
import './style.css'

function Carousel () {

    // GLOBAL STATE
    const list = useSelector(state=>state.product.productList)

    return (
        <div className="plc-carousel-container">
            
            <div className="plc-carousel-fc">
                <NavigateBeforeIcon
                    style={{fontSize : 40,cursor : 'pointer'}}
                />
                    {
                        list ?
                        <img
                            src={image1}
                            alt="list-p"
                        />  :
                        <Skeleton duration={0.3} height={194} width={197} style={{borderRadius : 6}}/> 
                    }
                <NavigateNextIcon
                    style={{fontSize : 40,cursor : 'pointer'}}
                />
            </div>
            {   
                list ?
                <h1>
                    BOE The Business Booster
                </h1> :
                <Skeleton duration={0.1} width={220} height={15} style={{marginTop : 15}} /> 
            }

            {
                list ?
                <h2>
                    Lorem Ipsum dolor sit amet
                </h2> :
                <Skeleton duration={0.1} width={200} height={15} style={{marginTop : 15}} /> 
            }

            <button>
                JOIN
            </button>

            <div className="plc-carousel-container-pagination">
                <main style={{marginLeft : 0}}>

                </main>
                <div>
                
                </div>
                <div>

                </div>
                <div>
                
                </div>

            </div>

        </div>
    )

}

export default Carousel