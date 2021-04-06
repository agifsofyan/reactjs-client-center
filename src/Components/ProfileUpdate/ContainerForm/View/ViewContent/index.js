import React from 'react'

// MATERIAL ICONS
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// IMAGES
import checkmark from '../../../../../Assets/Images/checkmark.png';

function ViewContent (props) {

    const {
        title,
        action,
        status
    } = props

    return (
        <div 
            className="view"
            onClick={e=>action(e)}
        >
            <div style={{display : "flex",alignItems : "center",}}>
                <div className="t1">
                    {title}
                </div>
                {
                    status ?
                    <img
                        src={checkmark}
                        className="img"
                        alt="check"
                    />
                    : 
                    <ErrorOutlineIcon
                        style={{
                            // color : "#999999",
                            marginLeft : 15,
                            color : "#FF4500",
                            fontSize : 25,
                            cursor : "pointer"
                        }}
                    />
                }
            </div>
            <ArrowForwardIosIcon
                    style={{
                        // color : "#999999",
                        fontSize : 20,
                        cursor : "pointer"
                    }}
            />
        </div>
    )

}

export default ViewContent