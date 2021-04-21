import React , { useState , useEffect } from 'react'

// MODULE
import { useSelector, useDispatch } from 'react-redux';

// MATERIAL ICONS
import CloseIcon from '@material-ui/icons/Close';

// REDUX ACTION
import { setValueStory } from '../../Redux/Actions/storyAction'

// STYLE
import './style.css'

function StoriesLMS () {

    //  DISPATCH
    const dispatch = useDispatch();

    // GLOBAL STATE
    const dataProduct = useSelector(state=>state.user.stories)
    const activeIndex = useSelector(state=>state.story.selectedData)

    const [data,setData] = useState(["0%","1A","2S","3X","4J","5BC","6-0099","7-431","8-0","9#","10Z"])
    const [first,setFirst] = useState(0)
    const [last,setLast] = useState(3)
    const [active,setActive] = useState(0)

    let handleActive = () => {
        if (active <= data.length -1) {
            setLast(last+1)
            setFirst(first+1)
            setActive(active+1)
        }else {
            setLast(3)
            setFirst(0)
            setActive(0)
        }
    }

    useEffect(()=>{
        // setInterval()
        return setTimeout(()=>{
            dispatch(setValueStory("isActive",false))
        },5000)
    })

    useEffect(()=>{
        // console.log(first , ' <<< FIRST')
        // console.log(last , ' <<< LAST')
        console.log(active , ' <<< ACTIVE ')
    },[first,last,active])

    let renderitem = () => {
        let res = data.filter((e,index)=>index >= first && index <= last)
        return res.map((e,index)=>{
            return (
                <div 
                    className={index === active ? "item-active" : "item"}
                    onClick={e=>handleActive()}
                >
                    <div className="text">
                        {e}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="stories-pages-18">
            <div className="c1">
                <CloseIcon
                    onClick={e=>dispatch(setValueStory("isActive",false))}
                    style={{fontSize : 32,color : "white",cursor : "pointer"}}
                />
            </div>
            <div 
                className="c2"
                style={{backgroundImage: `url(${dataProduct[activeIndex].content.images[0]})`}}
            >
                <div className="timer-container">
                    <div className="timer">

                    </div>
                </div>
                <div className="t1">
                    <div className="avatar">

                    </div>
                    <div className="name">
                        Admin
                    </div>
                </div>
               {/* {renderitem()} */}
            </div>
        </div>
    )

}

export default StoriesLMS