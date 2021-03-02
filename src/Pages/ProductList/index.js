import React , { useEffect , useState } from 'react'

// MODULE
import {  useSelector } from 'react-redux'

// STYLE
import './style.css'

// COMPONENT
import { Content , Carousel , TopicSort , Rating  } from '../../Components/ProductList'

// IMAGE
import Content1 from '../../Assets/Images/content-pl.jpg'

function ProductList () {

    // GLOBAL STATE
    const topicList = useSelector(state=>state.product.topicList)

    // SELECTED TOPIC
    const [arrTopic,setArrTopic] = useState([])

    // LOCAL STATE
    const [showMenu,setShowMenu] = useState()

    useEffect(()=>{
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
                window.fbq('track', 'Lead',)
            }
        }
    },[])

    useEffect(()=>{
        if (!showMenu) {
            // let el = document.getElementById('product-list-root')
            // el.removeEventListener('click',e=>setShowMenu(false))
            // setTimeout(()=>{
            // },200)
        }
    },[showMenu])

    useEffect(() => {
        console.log(topicList , ' <<<< ARR TOPIC >>>')
    }, [topicList])

    return (
        <div 
            className="product-list-container"
            // onClick={e=>[e.preventDefault() , e.stopPropagation() ,setShowMenu(false)]}
            // id="product-list-root"
        >
            <Carousel/>
            <div className="plc-p-line" >

            </div>
            <span 
                className="plc-p-title"
                style={{marginTop : 12}}
            >
                Business
            </span>
            <Content
                isFilter={true}
                filterData={topicList ? topicList.filter(e=>e.name === "Business & Entrepreneurship") : []}
            />
            <div className="plc-p-line">

            </div>
            <span className="plc-p-title">
                Health
            </span>
            <Content
                isFilter={true}
                filterData={topicList ? topicList.filter(e=>e.name === "Health") : []}
            />
            <div className="plc-p-line">

            </div>

            <span className="plc-p-title">
                Office Productivity
            </span>
            <Content
                isFilter={true}
                filterData={topicList ? topicList.filter(e=>e.name === "Office Productivity") : []}
            />

            <div className="plc-p-line">

            </div>
            <img 
                src={Content1}
                className="plc-image-content1"
                alt="list-content-1"
            />
            <div className="plc-p-line" style={{marginTop : 0}}>

            </div>

            <TopicSort
                arrTopic={arrTopic}
                setArrTopic={setArrTopic}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <Content isFilter={ arrTopic.length > 0 &&true} filterData={arrTopic} style={{marginTop : arrTopic.length > 0 ?30 : 20}}/>
            <div className="plc-p-line" style={{marginTop : 25}}>

            </div>
            <Rating/>
        </div>
    )

}

export default ProductList