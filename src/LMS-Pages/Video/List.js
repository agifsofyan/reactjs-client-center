import React, { useEffect, useState } from 'react';

// MODULE
import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux'

// API SWAGGER
import { SWAGGER_URL } from '../../Support/API_URL'

// COMPONENT
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import ListComponent from './ListComponent'
import Loading from './Loading'

// GLOBAL STATE
import { setAvailableMenu } from '../../Redux/Actions/userAction';

// STYLE
import './List.css';

const FilterTab = ({
    title = "",
    onItemClicked = () => console.error('You passed no action'),
    isActive = false,
}) => {
    return (
        <div 
            className={isActive ? `filter choosen` : `filter`}
            onClick={onItemClicked}
        >
            {title}
        </div>
    );
};

const List = (props) => {

    // USE DISPATCH
    const dispatch = useDispatch()

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

    // LOCAL STATE
    const [active, setActive] = useState(0);
    const [video,setVideo] = useState(null)
    const [loading,setLoading] = useState(false)
    const [tabList] = useState([
        {
            // id: 1,
            title: 'Terbaru',
            query: "sortby=expired_date&sortval=desc"
            // content: <Terbaru />,
        },
        {
            // id: 2,
            title: 'Rekomendasi',
            query: "trending=true"
            // content: <Rekomendasi />,
        },
        {
            // id: 3,
            title: 'Telah Ditonton',
            query: "sortby=expired_date&sortval=desc"
            // content: <TelahDitonton />,
        },
        {
            // id: 4,
            title: 'Sesuai Topik',
            query: renderTopic() 
            // content: <SesuaiTopik />,
        },
    ]);

    useEffect(()=>{
        document.title = 'LMS Video';
        getData(0)
    },[])

    let getData = (index) => {
        console.log(tabList.filter((e,i)=>i=== index)[0].query , ' <<< query')
        console.log(renderTopic() , ' <<< RENDER TOPIC')
        let slug = props.location.pathname.split('/')[2]
        setLoading(true)
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url : index < 3 ? `${SWAGGER_URL}/userproducts/videos?type=video&${tabList.filter((e,i)=>i=== index)[0].query}` : 
            // `${SWAGGER_URL}/userproducts?content_post_type=video&as_user=false&${renderTopic()}` ,
            url : `${SWAGGER_URL}/lms/${slug}/video`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data , ' <<< VALUE VIDEO HERE')
            // setWebinarData(data.data)
            // console.log(data.data , ' << VIDOE LIST (((((')
            dispatch(setAvailableMenu(data.data.available_menu))
            setLoading(false)
            setVideo(data.data.videos)
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response)
        })
    }

    // HANDLE CHANGE TAB
    let handleTab = (el,index) => {
        console.log(index ,)
        setActive(index)
        getData(index)
    }

    let renderTab = () => {
        return tabList.map((el,index)=>{
            const {title} = el
            return (
                <div 
                    // className={isActive ? `filter choosen` : `filter`}
                    className={index === active ? "filter choosen" : "filter"}
                    onClick={e=>handleTab(el,index)}
                    // onClick={onItemClicked}
                >
                    {title}
                </div>
            )
        })
    }

    return (
        <div className='root'>
            
            {/* SECTION CAROUSEL */}
            <div style={{marginTop:'20px'}}>
                <TopicSection {...props} videoTab={true} />
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* FILTER */}
            <div className='filter-container'>
                {
                   renderTab()
                }
            </div>
            {
                video && !loading ?
                <ListComponent
                    active={active}
                    setActive={setActive}
                    video={video}
                    slug={props.location.pathname.split('/')[2]}
                /> : 
                <Loading/>
            }

            <div style={{marginBottom : "40px"}}/>

            {/* FOOTER */}
            <div className='lms-video-list-footer'>
                <Footer />
            </div>
            

        </div>
    );
};

export default List;
