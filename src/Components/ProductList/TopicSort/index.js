import React , { useState } from 'react'

// MODULE
import {  useSelector } from 'react-redux'

// MATERIAL UI ICONS
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';

// STYLE
import './style.css'

function TopicSort (props) {

    // PARENT PROPS
    const { arrTopic,setArrTopic , showMenu,setShowMenu } = props

    // GLOBAL STATE
    const topicList = useSelector(state=>state.product.topicList)


    let renderTopic = () => {
        return topicList.map((el,index)=>{
            return (
                <div
                    onClick={e=>addSelectedTopic(el)}
                    key={index}
                >
                    {el.name}
                </div>
            )
        })
    }

    let renderSelectedTopic = () => {
        // console
        return arrTopic.map((el,index)=>{
            return (
                <div>
                    <span>
                        {el.name}   
                    </span>
                    <CloseIcon 
                        className="plc-topic-close"
                        onClick={e=>removeSelectedTopic(el._id)}
                    />
                </div>
            )
        })
    }

    let addSelectedTopic = (data) => {
        let arr = [...arrTopic]
        if (arr.filter(e=>e._id === data._id).length === 0) {
            arr.push(data)
        }
        setArrTopic(arr)
    }

    let removeSelectedTopic = (id) => {
        let arr = [...arrTopic]
        arr = arr.filter(e=>e._id !== id)
        setArrTopic(arr)
    }

    let handleShowMenu = (e) => {
        // e.preventDefault()
        // e.stopPropagation()
        if (showMenu) {
            alert('LOL')
            setShowMenu(false)
        }else {
            setShowMenu(true)
            // let el = document.getElementById('product-list-root')
            // el.addEventListener('click',e=>setShowMenu(false))
            // el.removeEventListener('click' ,e=>setShowMenu(false))
        }
    }
    

    return (
        <div className="plc-topic-root">
            
            <div className="plc-topic-content1">

                <h4>Topic</h4>

                <div 
                    onClick={e=>setShowMenu(!showMenu)}
                    className="t1"
                    // style={{boxShadow : showMenu && "0px 0px 10px rgba(0, 0, 0, 0.25)"}}
                >
                    <div className="c1">
                        <h6>Choose Topic</h6>
                        <ArrowDropDownIcon className="plc-topic-icon"/>
                    </div>
                    {
                        showMenu &&
                        <div className="c2">
                            {
                                topicList && renderTopic()
                            }
                        </div>
                    }
                </div>

            </div>

            <div className="plc-topic-content2">
                {
                    renderSelectedTopic()
                }
            </div>

        </div>
    )

}

export default TopicSort