import React , { useState  } from 'react'

// MATERIAL UI ICONS
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// STYLE
import './style.css'

function Expand (props) {

    const { data } = props

    // const [data] = useState([0,1,2,3,4])
    const [lastLength] = useState(data.length-1)
    const [isShow,setIsShow] = useState([])

    let handleAccordionPush = (res) => {
        let result = [...isShow]
        result.push(res)
        setIsShow(result)
    }

    let handleAccordionFilter = (res) => {
        let result = [...isShow]
        result = result.filter(e=> e !== res)
        setIsShow(result)
    }

    let checkAccordion = (res) => {
        if (isShow) {
            if (isShow.filter(e=> e=== res).length ===1) {
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }

    let renderData = () => {
        return data.map((el,index)=>{
            return (
                <div key={index} className="pdce-c13-container">
                    <div 
                        className="pdce-c13-content"
                        style={{
                            borderTopRightRadius : index === 0 && 5,
                            borderTopLeftRadius : index === 0 && 5,
                            borderBottom : index === lastLength && !checkAccordion(el)  && "0.5px solid #000000",
                            borderBottomRightRadius : index === lastLength && !checkAccordion(el)  && 5,
                            borderBottomLeftRadius : index === lastLength && !checkAccordion(el)  && 5,
                        }}
                    >
                        <div className="pdce-c13-content-1">
                            {el.title}
                        </div>

                        <div className="pdce-c13-content-2">
                            <div className="pdce-c13-content-2-a">
                                {el.note}
                            </div>
                            {
                                checkAccordion(el)  ?
                                <ExpandLessIcon
                                    onClick={e=>handleAccordionFilter(el)}
                                    className="pdce-c13-content-2-b"
                                />:
                                <ExpandMoreIcon
                                    onClick={e=>handleAccordionPush(el)}
                                    className="pdce-c13-content-2-b"
                                /> 
                            }
                        </div>
                    </div>
                    {
                        checkAccordion(el) &&
                        <div style={{
                                width : "100%" , 
                                height : "auto", 
                                backgroundColor : "#FFFFF",
                                borderLeft : "0.5px solid #000000" , 
                                borderRight : "0.5px solid #000000",
                                borderBottom : index === lastLength && "0.5px solid #000000",
                                borderBottomRightRadius : index === lastLength && 5,
                                borderBottomLeftRadius : index === lastLength && 5,
                                padding : "10px 10px 10px 10px"
                            }}>
                                {el.content }
                                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy */}
                        </div> 
                    }
                </div>
            )
        })
    }

    return (
        <div className="product-detail-c13-expand">
           {
               renderData()
           }
        </div>
    )

}

export default Expand