import React from 'react'

// MATERIAL UI ICONS
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

// IMAGE
import image1 from '../../../Assets/Images/p-list-1.png'

// STYLE
import './style.css'

function Carousel () {

    return (
        <div className="plc-carousel-container">
            
            <div className="plc-carousel-fc">
                <NavigateBeforeIcon
                    style={{fontSize : 40,cursor : 'pointer'}}
                />
                    <img
                        src={image1}
                        alt="list-p"
                    />  
                <NavigateNextIcon
                    style={{fontSize : 40,cursor : 'pointer'}}
                />
            </div>

            <h1>
                BOE The Business Booster
            </h1>

            <h2>
                Lorem Ipsum dolor sit amet
            </h2>

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