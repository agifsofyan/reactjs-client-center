import React from 'react'

// STYLE
import './style.css'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// IMAGES 
import logo1 from '../../../Assets/Images/as-slide-1.svg'

function Carousel (props) {

    const { title,desc , index , setIndex , lastLen } = props

    let handlePlus = () => {
        if (index !== lastLen) {
            setIndex(index +1)
        }else {
            setIndex(0)
        }
    }
    
    let handleMin = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }else {
            setIndex(lastLen)
        }
    }

    return (
        <div className="c6">
            <div 
                className="t1"
                // style={{marginLeft : "4.5%"}}
            >
                <NavigateBeforeIcon
                    onClick={e=>handleMin()}
                />
            </div>
            <div className="t2">
                <div className="f1">
                    <img
                        src={logo1}
                        alt="1-as"
                    />
                </div>
                <div className="f2">
                    {title}
                </div>
                <div className="f3">
                    {desc}
                </div>
            </div>
            <div 
                className="t1"
                // style={{marginRight : "4.5%"}}
            >
                <NavigateNextIcon
                    // onC
                    onClick={e=>handlePlus()}
                />
            </div>            
        </div>
    )

}

export default Carousel;