import React , { useState } from 'react'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// STYLE 
import './style.css'

function Carousel (props) {
    
    const { detail } = props

    // SELECTED IMAGE
    const [selected,setSelected] = useState(0)
    const [lastLen] = useState(detail.image_url.length -1)


    console.log(detail , ' <<< VALUE DETAIL >>>> uuu')

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
    
    return (
        <div
            style={{justifyContent : detail.image_url.length <= 1 && "center"}}
            className="product-detail-carousel"
        >
            {
                detail.image_url.length > 1 &&
                <NavigateBeforeIcon 
                    style={{fontSize : 40}}
                    onClick={e=>handleMin()}
                />
            }
            <img
                src={detail.image_url[selected]}
                className="pdc-carousel-55"
            />
            {/* <div className="pdc-carousel-55">

            </div> */}
            {
                detail.image_url.length > 1 &&
                <NavigateNextIcon 
                    style={{fontSize : 40}}
                    onClick={e=>handlePlus()}
                />
            }
        </div>
    )

}

export default Carousel