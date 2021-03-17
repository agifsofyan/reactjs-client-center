import React, { useEffect } from 'react';

// MODULE
import axios from 'axios';
import { message, Rate } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENT
import Profile from '../../Components/LMS-Profile';
import TopicSection from '../../Components/TopicSection';
import ContentSection from '../../Components/Content';
import Footer from '../../Components/LMSFooter';

// REDUX 
import { getPaidList } from '../../Redux/Actions';
import { getUserWhoAmI , getUserProduct } from '../../Redux/Actions/userAction';

// IMAGES
import productRecom from '../../Assets/Images/recommended.png';

// STYLING
import './style.css';

const Dashboard = () => {
    const dispatch = useDispatch();

    // GLOBAL STATE
    const userInfo = useSelector(({ user }) => user.userMe);
    const dataProduct = useSelector(state=>state.user.userProduct)

    useEffect(() => {
        document.title = 'Dashboard';
        dispatch(getPaidList());
        dispatch(getUserWhoAmI());
        dispatch(getUserProduct())
    }, [dispatch]);

    useEffect(()=>{

        console.log(dataProduct , ' <<< DATA PRODUCT >>>')

    },[dataProduct])

    const storyImg = 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3784651/01_idea.jpg';
    const unfinishImg = 'https://wallpaperaccess.com/full/656648.jpg';
    const badge = 'https://i.ibb.co/DfxtJ6L/Obsidian.png';

    const renderStory = () => {
        return dataProduct.map((e) => {
            return (
                <div className='story-card'>
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
            notification: '2 new',
        },
        {
            title: 'Nonton Video',
            notification: null,
        },
        {
            title: 'Baca Tips',
            notification: null,
        },
        {
            title: 'Isi Modul Praktek',
            notification: '6 new',
        },
    ];

    const renderSchedule = () => {
        return scheduleList.map((val,index) => {
            return (
                <div onClick={binderClick} className='schedule-card' key={index}>
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

    const history = useHistory();

    const paidList = useSelector(({ order }) => order.paidList);

    let renderList = () => {
        return paidList.map((el,index) => {
            const items = el.items;
            return items.map((val,index) => {
                return (
                    <div
                        key={index}
                        onClick={(e) => history.push(`/lms-home?id=${val.product_info._id}`)}
                    >
                        <img 
                            className="slides-3-content-c1"
                            src={productRecom}
                            alt={'recom'}
                        />
                        <span className="slides-3-content-c2">
                            {val.product_info.name.slice(0,27) + "" + renderDot(val.product_info.name)}
                        </span>
                        <div className="slides-3-content-c3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the  
                        </div>
                        <div className="slides-3-content-c4">
                            <Rate 
                                allowHalf 
                                defaultValue={4.5} 
                                style={{color : "#EB8A2F",fontSize : 20}}
                            />
                            <div className="slides-3-content-c4-t">
                                (5) 1.200
                            </div>
                        </div>
                        <div className="slides-3-content-c5">
                            <span>
                                Rp {val.product_info.price.toLocaleString('id-ID')}
                            </span>
                            <div>
                                Rp {val.product_info.sale_price.toLocaleString('id-ID')}
                            </div>
                        </div>
                        <div className="slides-3-content-c6">
                            Daftar
                        </div>
                    </div>
                );
            });
        });
    };

    const renderDot = (name) => {
        if (name.length >= 27) {
            return "...";
        } else {
            return "";
        }
    };

    const renderUnfinish = (percent, rank) => {
        return (
            <div>
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
                    <div className='dashboard-rating-container'>
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
                    </div>
                </div>
            </div>
        );
    };

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

            {/* STORY */}
            <div className='story-section'>
                { dataProduct && renderStory()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />
            
            {/* CONTENT */}
            <ContentSection />

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
                    { paidList && renderList() }
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
