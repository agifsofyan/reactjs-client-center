import React , { useEffect } from 'react'

// MODULE
import { useSelector } from 'react-redux'

// STYLE
import './style.css'

function TabFilter (props) {

    const {
        selectedTab,setSelectedTab
    } = props

    const list = useSelector(state=>state.product.topicList)

    useEffect(()=>{
        // console.log(list , ' <<< LIST')
    },[list])

    useEffect(()=>{
        console.log(selectedTab , ' <<< SELECTED TAB >>>>')
    },[selectedTab])

    let renderList = () => {
        return list.map((e,i)=>{
            // console.log(e._id , '  <<< E')
            return (
                <div
                    key={e._id}
                    onClick={e=>setSelectedTab(i)}
                    className={selectedTab === i ? "home-main-content-c1-item-active" : "home-main-content-c1-item" }
                >
                    {
                        e.name.split(' ')[0]
                    }
                </div>
            )
        })
    }

    return (
        <div className="home-main-content-c1 slides-2 ">

            {
                list && 
                renderList()
            }

        </div>
    )

}

export default TabFilter