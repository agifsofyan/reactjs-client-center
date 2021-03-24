import React , {useState} from 'react'

// MODULE
import { useSelector } from 'react-redux'

// MATERIAL ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// STYLE
import './style.css'

function Sort (props) {

    // PARENT PROPS
    const {
        setDataNews ,
        NewsTemp,
        dataNews
    } = props

    // GLOBAL STATE
    const topicList = useSelector(state=>state.product.topicList)

    // LOCAL STATE
    const [showMenu,setShowMenu] = useState(false)
    const [showMenu2,setShowMenu2] = useState(false)
    
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [topic] = useState([{name : "a"}])

    
    let handleChangeTopic = (el) => {
        console.log(dataNews)
        let result = []
        NewsTemp.forEach(e1=>{
            let co = false
            e1.topic.forEach(e2=>{
                if (el.name === e2.name) {
                    co = true
                }
            })
            if (co) {
                result.push(e1)
            }
        })
        setDataNews(result)
        // setDataNews(NewsTemp.filter(e=>e.topic === el.name))
        setSelectedTopic(el)
    }

    // RENDER MENU
    let renderMenu = () => {
        let sortTopic = [{name : "Semua"},...topicList]
        return sortTopic.map((el,index)=>{
            return (
                <div 
                    key={index} 
                    style={{height : 48}} 
                    className="card-06-tc-c1-2"
                    onClick={e=>el.name !== "Semua" ? handleChangeTopic(el) : [setSelectedTopic(el),setDataNews(NewsTemp)]}
                >
                    <div>
                        {
                            el.name
                        }
                    </div>
                    <div>
                        {/* { el.max_discount && `Diskon sebesar ${ moneyConvert(renderDisk(el).toString(),"Rp. ")}`} */}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="sort-container">
            <div 
                style={{height : showMenu ? 180 : 44, overflowY : showMenu && "auto",borderRadius: 6,width : "48%",paddingBottom : showMenu && 20}}  
                className="card-06-tc-c1"
                onClick={e=>setShowMenu(!showMenu)}
            >
                <div style={{height : showMenu &&  48, marginTop : showMenu && 3}} className="card-06-tc-c1-1">
                    <span>{ selectedTopic ? (selectedTopic.name.slice(0,9)) : "Pilih Topik"}</span>
                    {
                        showMenu ? 
                            <ExpandLessIcon onClick={e=>setShowMenu(false)} className="card-06-tc-c1-1-icon"/> :
                            <ExpandMoreIcon onClick={e=>setShowMenu(true)} className="card-06-tc-c1-1-icon"/>
                    }
                </div>
                {
                    showMenu && topic &&
                    renderMenu()
                }
            </div>
            {/* <div 
                style={{height : showMenu2 ? 100 : 44, overflowY : showMenu2 && "auto",borderRadius: 6,width : "48%"}}  
                className="card-06-tc-c1"
                onClick={e=>setShowMenu2(!showMenu2)}
            >
                <div style={{height : showMenu2 &&  48, marginTop : showMenu2 && 6.5}} className="card-06-tc-c1-1">
                    <span>{ selectedTopic ? selectedTopic.name.slice(0,10) : "Pilih Kupon"}</span>
                    {
                        showMenu2 ? 
                            <ExpandLessIcon onClick={e=>setShowMenu2(false)} className="card-06-tc-c1-1-icon"/> :
                            <ExpandMoreIcon onClick={e=>setShowMenu2(true)} className="card-06-tc-c1-1-icon"/>
                    }
                </div>
                {
                    showMenu2 && topic &&
                    renderMenu()
                }
            </div> */}
        </div>
    )

}

export default Sort

// export default Sort