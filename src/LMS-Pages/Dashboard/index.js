import React, { useEffect , useState } from 'react';

// MODULE
import axios from 'axios';
import { message, Rate } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

// COMPONENT
import Profile from '../../Components/LMS-Profile';
import ContentSection from '../../Components/Content';
import Footer from '../../Components/LMSFooter';
import ContentList from '../../Components/LMS-dashboard/Content'
import LoadingContent from '../../Components/LMS-dashboard/ContentLoading'

// GLOBAL ACTION
import { getPaidList } from '../../Redux/Actions/index'
import { getUserWhoAmI , getUserStory , getUserLMS  } from '../../Redux/Actions/userAction'

// REDUX 
import { setValueStory } from '../../Redux/Actions/storyAction'

// STYLING
import './style.css';

const Dashboard = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    // GLOBAL STATE
    const userInfo = useSelector(({ user }) => user.userMe);
    const dataProduct = useSelector(state=>state.user.stories)
    const dataLMS = useSelector(state=>state.user.userLMS)
    const loadingLMS = useSelector(state=>state.user.loading)

    console.log(dataLMS , ' <<< value data LMS HERE')

    // LOCAL STATE
    const [searchStr,setSearchStr] = useState("")
    const [storyData,setStoryData] = useState(null)
    const [productData,setProductData] = useState(null)
    const [unfinihsData,setUnfinish] = useState(null)
    const [contentData,setContentData] = useState(null)

    useEffect(()=>{
        dispatch(getPaidList());
        dispatch(getUserWhoAmI());
        dispatch(getUserStory())
        dispatch(getUserLMS( {trending : true,favorite : false} ))
    },[dispatch])

    useEffect(() => {
        document.title = 'Dashboard';
    }, [dispatch,localStorage]);

    useEffect(()=>{
        if (dataLMS) {
            let data = dataLMS
            setStoryData(data.stories)
            setProductData(data.products)
            setContentData(data.content)
            setUnfinish(data.productInProgress[0])
        }
    },[dataLMS])

    console.log(dataLMS , ' <<<< VALUE DATA LMS HERE LOL')

    let handleDescription = (text) => {
        return text.replace(/<\/?[^>]+(>|$)/g, "").slice(0,32) + "" + renderDot(text)
    }

    console.log(unfinihsData , ' <<<< CONSOLE.LOG')

    // useEffect(()=>{
    //     axios({
    //         method : "GET",
    //         url : `${SWAGGER_URL}/lms`,
    //         headers : {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         }
    //     })
    //     .then(({data})=>{
    //         setStoryData(data.data.stories)
    //         setProductData(data.data.products)
    //         console.log(data.data , ' <<< VALUE DATA')
    //     })
    //     .catch(err=>{
    //         console.log(err.response , ' <<< ERROR')
    //     })
    // },[])

    const storyImg = 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3784651/01_idea.jpg';
    const unfinishImg = 'https://wallpaperaccess.com/full/656648.jpg';
    const badge = 'https://i.ibb.co/DfxtJ6L/Obsidian.png';

    // HANDLE STORY WHEN TRIGGER
    const clickStory = (index) => {
        dispatch(setValueStory("isActive",true))
        dispatch(setValueStory("selectedData",index))
    }

    const renderStory = () => {
        return storyData.map((e,index) => {
            return (
                <div 
                    className='story-card'
                    onClick={e=>clickStory(index)}
                >
                    <img src={e.img} alt='boba' className='story-img' />
                </div>
            );
        });
    };

    const binderClick = () => {
        message.success('You just clicked the binder!');
    };

    const scheduleList = [
        {
            title: 'Jadwal Webinar',
            notification: null,
            url : "/lms-webinar",
            id : "webinar"
        },
        {
            title: 'Nonton Video',
            notification: null,
            url : "'/lms-video-list",
            id : "video"
        },
        {
            title: 'Baca Tips',
            notification: null,
            url: '/lms-tips-list',
            id : "tips"
        },
        {
            title: 'Isi Modul Praktek',
            notification: null,
            url: '/lms-module',
            id : "module"
        },
    ];

    const renderSchedule = () => {
        return scheduleList.map((val,index) => {
            return (
                <div 
                    // onClick={e=>history.push(val.url)} 
                    className='schedule-card' key={index}
                >
                    <div className='schedule-description'>
                        <span className='schedule-title'>
                            {val.title}
                        </span>
                        <br></br>
                        <span className='schedule-notification'>
                            {dataLMS[val.id].total + " " + val.id}
                        </span>
                    </div>
                </div>
            );
        });
    };

    let renderList = () => {
        if (searchStr === "") {
            return productData.map((el,index) => {
                // const items = el.items;
                // console.log(el)
                return (
                    <div
                        key={index}
                        onClick={(e) => history.push(`/lms-home/${el.slug}`)}
                    >
                        <img 
                            className="slides-3-content-c1"
                            // src={productRecom}
                            src={el.image_url}
                            alt={'recom'}
                        />
                        <span className="slides-3-content-c2">
                            {el.name.slice(0,27) + "" + renderDot(el.name,27)}
                        </span>
                        <div className="slides-3-content-c3">
                            {handleDescription( el.description).slice(0,60) + "" + renderDot(handleDescription( el.description),60)}
                        </div>
                        <div className="slides-3-content-c6">
                            Baca
                        </div>
                    </div>
                );
            });
        }else {
            let data = dataLMS.products.filter(e=> searchAction(e.name,searchStr) || searchAction(e.description,searchStr)  )
            if (data.length === 0 ) {
                return (
                    <div style={{width : "100%" ,display : "flex",justifyContent : "center",alignItems : "center",height : 100}}>
                        Content Tidak ditemukan
                    </div>
                )
            }
            return data.map((el,index) => {
                // const items = el.items;
                console.log(el)
                return (
                    <div
                        key={index}
                        onClick={(e) => history.push(`/lms-home/${el.slug}`)}
                    >
                        <img 
                            className="slides-3-content-c1"
                            // src={productRecom}
                            src={el.image_url}
                            alt={'recom'}
                        />
                        <span className="slides-3-content-c2">
                            {el.name.slice(0,27) + "" + renderDot(el.name,27)}
                        </span>
                        <div className="slides-3-content-c3">
                            {el.description.slice(0,60) + "" + renderDot(el.description,60)}
                        </div>
                        <div className="slides-3-content-c6">
                            Baca
                        </div>
                    </div>
                );
            });
        }
    };

    let searchAction = (e,str) => {
        console.log(e , ' <<< VALUE E')
        return (
            e.toUpperCase().search( str.toUpperCase() ) >= 0 
        )
    }

    const renderDot = (name,len = 30) => {
        if (name.length >= len) {
            return "...";
        } else {
            return "";
        }
    };

    const renderUnfinish = (percent, rank) => {
        return (
            <div style={{marginBottom : 50}}>
                <div className='unfinish-card'>
                    <img src={unfinihsData.image_url} alt='unfinish' className='unfinish-image' />
                    <div className='unfinish-status'>
                        <div className='status-desc'>
                            <b>{unfinihsData.name}</b>
                        </div>
                        <div className='status-desc'>
                            Progress: {unfinihsData.progress}% / <b>100%</b>
                        </div>
                        <button className='status-button'>
                            LANJUT BELAJAR
                        </button>
                    </div>
                </div>
                {/* <div className='unfinish-rank'>
                    <img src={badge} alt='badge' className='unfinish-badge' />
                    <div className='unfinish-rank-txt'>
                        Super Star Member
                    </div>
                    <div className='unfinish-rank-num'>
                        {rank}
                    </div>
                </div> */}
                <div className='schedule-box-section'>
                    {renderSchedule()}
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {/* <div className='dashboard-rating-container'>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{
                                margin:'0px 10px',
                                fontFamily: 'Rubik, sans-serif',
                                fontSize:'medium',
                            }}>
                                Beri Review
                            </div>
                            <Rate defaultValue={0} />
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div style={{
                                margin:'0px 10px',
                                fontFamily: 'Rubik, sans-serif',
                                fontSize:'medium',
                            }}>
                                Nilai Mentor
                            </div>
                            <Rate defaultValue={0} />
                        </div>
                        <button className='rating-advice-btn'>
                            SARAN
                        </button>
                    </div> */}
                </div>
            </div>
        );
    };

    const renderLoading = () => {
        return [0,1,2,3].map((el,index)=>{
            return (
                <div key={index}>
                    <Skeleton duration={0.3} width={"100%"} height={150}/>
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}}/>
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                    <Skeleton duration={0.3} width={"100%"} style={{marginTop : 5}} />
                </div>
            )
        })
    }

    const renderLoadCont = () => {
        return [0,1,2,3].map(()=>{
            return (
                <LoadingContent/>
            )
        })
    }

    const renderContent = () => {
        return contentData.map((e)=>{
            console.log(e , ' <<< E')
            return (
                <ContentList
                    data={e}
                />
            )
        })
    }

    return (
        <div className='root'>
            
            {/* PROFILE CHECK */}
            <Profile 
                complete={false} 
                user={userInfo}
            />

            {/* DIVIDER */}
            {/* <div className='divider' /> */}

            {/* SECTION CAROUSEL */}
            {/* <TopicSection dashboardTab={true} /> */}

            {/* DIVIDER */}
            <div className='divider' />

            <div className="story-title" >
                Cerita Hari Ini
            </div>

            {/* STORY */}
            <div className='story-section'>
                { storyData && renderStory()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />
            
            {/* CONTENT */}
            <ContentSection searchStr={searchStr} setSearchStr={setSearchStr} />
            <div style={{marginTop : 15}}>

            </div>
            {/* <ContentList/> */}
            {contentData && !loadingLMS ? renderContent() : renderLoadCont() }
            {/* {renderLoadCont()} */}

            {/* DIVIDER */}
            <div className='divider' />

            {/* PAID ITEMS */}
            <div className='paid-greeting'>
                {/* Hi, `name` 👋 */}
                Hi, {userInfo.name} 👋
            </div>
            <div className='paid-description'>
                Dapatkan content dari product
            </div>
            <div className='paid-content'>
                {/* <Content /> */}
                <div className="slides-paid-list">
                    { productData && !loadingLMS ? renderList() : renderLoading() }
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* UNFINISHED */}
            <div className="unfinish-section">
                <div className='unfinish-title'>
                    Kelas yang Belum Anda Selesaikan
                </div>
                { unfinihsData && renderUnfinish(15,211)}
            </div>

            {/* FOOTER */}
            <div className='lms-dashboard-footer'>
                <Footer />
            </div>            
        </div>
    );
};

export default Dashboard;
