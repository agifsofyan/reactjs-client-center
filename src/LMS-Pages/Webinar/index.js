import React, { useEffect , useState } from 'react';

// MODULE
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../Redux/Actions';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import live from '../../Assets/Images/live-thumbnail.svg';
import moment from 'moment';
import './styles.css';

import { SWAGGER_URL } from '../../Support/API_URL'

const LMSWebinar = () => {

    // USE DISPATCH
    const dispatch = useDispatch();

    // LOCAL STATE
    const [webinarData,setWebinarData] = useState(null)

    useEffect(()=>{
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            url : `${SWAGGER_URL}/userproducts?content_post_type=webinar&as_user=false`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setWebinarData(data.data)
            console.log(data, ' <<< VALUE WEBINAR HERE <<< **** *999 *(*')
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[])

    useEffect(() => {
        document.title = 'LMS Webinar';
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector((state) => state.content.videoList);

    const renderVideo = () => {
        let sortData = webinarData.sort((a,b)=>new Date(b.content.created_at) - new Date(a.content.created_at))
        sortData = webinarData.filter((e,i)=>i === 0)
        return sortData.map((val,index) => {
            return (
                <div key={index}>
                    <video controls={true} className='nearest-webinar'>
                        <source type='video/mp4' src={val.content.video[0].url} />
                    </video>
                </div>
            );
        });
    };

    const countdown = moment().endOf('hour').fromNow();

    const thumbnail = 'https://victor-mochere.com/wp-content/uploads/2019/08/How-to-download-a-video-on-YouTube.jpg';

    const renderPrevious = () => {
        return webinarData.map((e,i) => {
            // console.log( , ' <<< VALUE VIDEO')
            return (
                <div key={i} className='webinar-section'>
                    <video className='previous-video' controls>
                        <source src={e.content.video[0].url} type="video/mp4"/>
                    </video>
                    <div className='webinar-details'>
                        <div className='webinar-title'>
                            {e.content.title}
                        </div>
                        <div className='webinar-audience'>
                            216 participants
                        </div>
                        <div className='webinar-comment'>
                            11 comments • <u>Comment</u>
                        </div>
                        <div className='webinar-point'>
                            +3 Poin
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderOthers = () => {
        return webinarData.map((e,i) => {
            return (
                <div className='other-texts'>
                    {/* <img src={live} alt='live' className='other-live' /> */}
                    <video className='other-live' controls>
                        <source src={e.content.video[0].url} type="video/mp4"/>
                    </video>
                    <div className='other-desc'>
                        <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='other-mentor-img' />
                        <div className='other-summary'>
                            <div className='other-title'>
                                <b>{e.content.title}</b>
                            </div>
                            <div className='other-mentor-name'>
                                mentor name here
                            </div>
                            <div className='other-countdown'>
                                starts {countdown}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const productImg = 'https://spy.com/wp-content/uploads/2020/06/mens-leather-wallets-e1592919730104.jpg?w=796';

    const renderRecommended = () => {
        return [0,1,2].map(() => {
            return (
                <div className='lmswebinar-recommended-container'>
                    <img 
                        src={productImg} 
                        alt='recommentation' 
                        className='lmswebinar-recommended-product-image' 
                    />
                    <div className='lmswebinar-recommended-product-details'>
                        <div className='lmswebinar-recommended-product-name'>
                            <b>Quality Leather Wallet</b>
                        </div>
                        <div className='lmswebinar-recommended-product-price'>
                            Rp 2.000.000
                        </div>
                        <div className='lmswebinar-recommended-product-sale-discount'>
                            <div className='lmswebinar-recommended-product-sale'>
                                <b>Rp 350.000</b>
                            </div>
                            <div className='lmswebinar-recommended-product-discount'>
                                Hemat 82%
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection webinarTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* NEAREST */}
            <div className='nearest-section'>
                <div className='nearest-title'>
                    Jadwal Webinar Terdekat
                </div>
                { webinarData && renderVideo()}
                {/* <div className='webinar-desc'>
                    <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='mentor-img' />
                    <div className='webinar-summary'>
                        <div className='webinar-title'>
                            <b>This is the title for the video</b>
                        </div>
                        <div className='mentor-name'>
                            mentor name here
                        </div>
                        <div className='webinar-countdown'>
                            starts {countdown}
                        </div>
                    </div>
                </div> */}
                <button className='webinar-join'>
                    <b>IKUT SEKARANG</b>
                </button>
            </div>

            {/* DIVIDER */}
            <div className='divider' />
            
            {/* PREVIOUS */}
            <div className='previous-section'>
                <div className='previous-title'>
                    Tonton Rekaman Webinar Sebelumnya
                </div>
                { webinarData && renderPrevious()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* OTHERS */}
            <div className='others-section'>
                <div className='others-title'>
                    Ikuti Webinar Lainnya
                </div>
                { webinarData && renderOthers()}
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* RECOMMENDED */}
            {/* <div className='lmswebinar-recommended-section'>
                <div className='lmswebinar-recommended-title'>
                    Produk Rekomendasi
                </div>
                <div className='lmswebinar-recommended-renderer'>
                    {renderRecommended()}
                </div>
            </div> */}

            {/* FOOTER */}
            <div className='lms-webinar-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default LMSWebinar;
