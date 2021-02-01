import React from 'react'

// IMAGES
import image1 from '../../../Assets/Images/lp-1.png'
import image2 from '../../../Assets/Images/lp-2.png'
import image3 from '../../../Assets/Images/lp-3.png'
import image4 from '../../../Assets/Images/lp-4.png'


// STYLING DI pages/LandingPage

function List () {

    return (
        <div className="lp-10-c3">

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Strategic Planning
                </div>
                <div className="t2">
                    Lorem Ipsum dolor sit amet, this is dummy text
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Strategic Planning
                </div>
                <div className="t2">
                    Lorem Ipsum dolor sit amet, this is dummy text
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Strategic Planning
                </div>
                <div className="t2">
                    Lorem Ipsum dolor sit amet, this is dummy text
                </div>
            </div>

            <div> 
                <img
                    src={image1}
                    alt={"lp-1"}
                />
                <div className="t1">
                    Strategic Planning
                </div>
                <div className="t2">
                    Lorem Ipsum dolor sit amet, this is dummy text
                </div>
            </div>

        </div>
    )

}

export default List