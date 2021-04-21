import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './content.css';

// REDUX GLOBAL
import { getUserWhoAmI , getUserStory , getUserLMS } from '../../Redux/Actions/userAction';


const Trending = (props) => {

    const { video, getVideoBonus } = props

    const renderVideos = () => {
        if (getVideoBonus) {
            return (
                <video className='content-video' style={{width : "87%" ,height : 280}} controls>
                    <source src={getVideoBonus()} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            )
        }else {
            
                return (
                    <div style={{
                        marginRight: '20px',
                        width: '100%',
                        borderRadius: '5px',
                        overflow: 'hidden',
                    }}>
                        <iframe 
                            title='business' 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/PO_d169ibZ8" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                            className='content-video'
                        />
                        {/* <video className='content-video' controls>
                            <source src={video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                );
            };
        }

    return (
        <div className='content-video-group' style={{width : "100%",display : "flex" ,flexDirection : "column" , alignItems : "center",justifyContent : "center"}}>
            {renderVideos()}
        </div>
    );
};

const tabList = [
    {
        id: 1,
        title: "Trending",
        Content: Trending ,
        filter : {trending : "true",favorite : "false"}
    },
    {
        id: 2,
        title: "Favorit",
        Content: Trending,
        filter : {trending : "false",favorite : "true"}
    },
    {
        id: 3,
        title: "Topik",
        Content: Trending ,
        filter : {topic : true}
    },
];

const FilterTab = ({
    title = "",
    onItemClicked = () => console.error('You passed no action'),
    isActive = false,
    dispatch,
    filter,
    renderTopic
}) => {
    return (
        <div>
            <button 
                onClick={e=> [dispatch(getUserLMS(filter,renderTopic())),onItemClicked()]}
                className={
                    isActive 
                    ? `content-btn active-btn`
                    : `content-btn`
                }
            >
                {title}
            </button>
        </div>
    );
};

const ContentSection = (props) => {

    const { searchStr,setSearchStr } = props

    const dispatch = useDispatch();

    const list = useSelector(state=>state.product.productList)

    // GLOBAL STATE
    const userInfo = useSelector(({ user }) => user.userMe);

    let renderTopic = () => {
        // console.log(userInfo , ' <<< USER INFO')
        let result = "topic="
        let arr = []
        if (userInfo.favorite_topics) {
            arr = [...userInfo.favorite_topics]
        }
        arr.forEach((e,i)=>{
            result+= e._id
            if (i!== arr.length -1) {
                result += "&topic="
            }
        })
        console.log(result , ' << VALUE QUERY')
        return result
    }

    const [active, setActive] = useState(1);
    const [video,setVideo] = useState(null);
    const [isFocus,setIsFocus] = useState(false)

    let getVideoBonus = () => {
        let result = list.filter(e=>e.type === "bonus")
        if (result.length >= 1) {
            return result[0].media_url
        }else {
            return video
        }
    }

    return (
        <div className='content-section' style={{position : "relative",display : "flex" ,flexDirection : "column" , alignItems : "center"}}>
            {/* SEARCH */}
            <TextField
                onChange={e=>setSearchStr(e.target.value)}
                onFocus={e=>setIsFocus(true)}
                onBlur={e=>setIsFocus(false)}
                // onFocuso={e=>alert("LOL")}
                variant="outlined"
                placeholder="Mau Cari Apa?"
                style={{
                    width:  "100%",
                    marginBottom: '20px',
                    boxShadow: '0 0 5px 1.25px #E6E6E6',
                    // position :  "absolute"
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {/* FILTER */}
            <div className='content-button-group' id="filter-lms-tab-1">
                {userInfo && tabList.map(({ id, title , filter }) => 
                    <FilterTab
                        key={title}
                        title={title}
                        onItemClicked={() => setActive(id)}
                        isActive={active === id}
                        filter={filter}
                        dispatch={dispatch}
                        renderTopic={renderTopic}
                    />
                )}
            </div>

            {/* <Content getVideoBonus={getVideoBonus} /> */}
            {/* {tabList.map(({ id, Content }) => {
                return active === id
                ? <Content getVideoBonus={getVideoBonus} />
                : null
            })} */}
            {/* LIST */}
            {/* {
                list &&
                <div style={{marginTop:'20px',width : "100%",display : "flex" ,flexDirection : "column" , alignItems : "center",justifyContent : "center"}}>
                    <Trending getVideoBonus={getVideoBonus}/>
                </div>
            } */}
        </div>
    );
};

export default ContentSection;
