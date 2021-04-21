import React, { useEffect , useState } from 'react';

// MODULE
// import axios from 'axios';
import { message, Rate } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

// COMPONENT
import Profile from '../../Components/LMS-Profile';
import ContentSection from '../../Components/Content';
import Footer from '../../Components/LMSFooter';

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

    // LOCAL STATE
    const [searchStr,setSearchStr] = useState("")

    useEffect(() => {
        document.title = 'Dashboard';
    }, [dispatch,localStorage]);

    useEffect(()=>{
        console.log(loadingLMS , ' <<<< LOADING LMS VALUE HERE')
    },[loadingLMS])

    const storyImg = 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3784651/01_idea.jpg';
    const unfinishImg = 'https://wallpaperaccess.com/full/656648.jpg';
    const badge = 'https://i.ibb.co/DfxtJ6L/Obsidian.png';

    // HANDLE STORY WHEN TRIGGER
    const clickStory = (index) => {
        dispatch(setValueStory("isActive",true))
        dispatch(setValueStory("selectedData",index))
    }

    const renderStory = () => {
        return dataProduct.map((e,index) => {
            return (
                <div 
                    className='story-card'
                    onClick={e=>clickStory(index)}
                >
                    <img src={e.content.images[0]} alt='boba' className='story-img' />
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
            url : "/lms-webinar"
        },
        {
            title: 'Nonton Video',
            notification: null,
            url : "'/lms-video-list"
        },
        {
            title: 'Baca Tips',
            notification: null,
            url: '/lms-tips-list'
        },
        {
            title: 'Isi Modul Praktek',
            notification: null,
            url: '/lms-module',
        },
    ];

    const renderSchedule = () => {
        return scheduleList.map((val,index) => {
            return (
                <div onClick={e=>history.push(val.url)} className='schedule-card' key={index}>
                    <div className='schedule-description'>
                        <span className='schedule-title'>
                            {val.title}
                        </span>
                        <br></br>
                        <span className='schedule-notification'>
                            {val.notification}
                        </span>
                    </div>
                </div>
            );
        });
    };

    let renderList = () => {
        if (searchStr === "") {
            return dataLMS.map((el,index) => {
                // const items = el.items;
                // console.log(el)
                return (
                    <div
                        key={index}
                        onClick={(e) => history.push(`/lms-home?id=${el._id}`)}
                    >
                        <img 
                            className="slides-3-content-c1"
                            // src={productRecom}
                            src={el.content.images[0]}
                            alt={'recom'}
                        />
                        <span className="slides-3-content-c2">
                            {el.product.name.slice(0,27) + "" + renderDot(el.product.name,27)}
                        </span>
                        <div className="slides-3-content-c3">
                            {el.content.desc.slice(0,60) + "" + renderDot(el.content.desc,60)}
                        </div>
                        <div className="slides-3-content-c6">
                            Baca
                        </div>
                    </div>
                );
            });
        }else {
            let data = dataLMS.filter(e=> searchAction(e.content.title,searchStr) || searchAction(e.content.desc,searchStr)  )
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
                        onClick={(e) => history.push(`/lms-home?id=${el._id}`)}
                    >
                        <img 
                            className="slides-3-content-c1"
                            // src={productRecom}
                            src={el.content.images[0]}
                            alt={'recom'}
                        />
                        <span className="slides-3-content-c2">
                            {el.content.title.slice(0,27) + "" + renderDot(el.content.title,27)}
                        </span>
                        <div className="slides-3-content-c3">
                            {el.content.desc.slice(0,60) + "" + renderDot(el.content.desc,60)}
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
                    <img src={unfinishImg} alt='unfinish' className='unfinish-image' />
                    <div className='unfinish-status'>
                        <div className='status-desc'>
                            <b>BOE Business Master</b>
                        </div>
                        <div className='status-desc'>
                            Progress: {percent}% / <b>100%</b>
                        </div>
                        <button className='status-button'>
                            LANJUT BELAJAR
                        </button>
                    </div>
                </div>
                <div className='unfinish-rank'>
                    <img src={badge} alt='badge' className='unfinish-badge' />
                    <div className='unfinish-rank-txt'>
                        Super Star Member
                    </div>
                    <div className='unfinish-rank-num'>
                        {rank}
                    </div>
                </div>
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
                { dataProduct && renderStory()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />
            
            {/* CONTENT */}
            <ContentSection searchStr={searchStr} setSearchStr={setSearchStr} />

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
                    { dataLMS && !loadingLMS ? renderList() : renderLoading() }
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* UNFINISHED */}
            <div className="unfinish-section">
                <div className='unfinish-title'>
                    Kelas yang Belum Anda Selesaikan
                </div>
                {renderUnfinish(15,211)}
            </div>

            {/* FOOTER */}
            <div className='lms-dashboard-footer'>
                <Footer />
            </div>            
        </div>
    );
};

export default Dashboard;
