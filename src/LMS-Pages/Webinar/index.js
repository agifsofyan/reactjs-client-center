import React, { useEffect , useState } from 'react';

// MODULE
import axios from 'axios'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

// COMPONENTS
import Loader from './Loading'
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';

// GLOBAL ACTION
import { getVideo } from '../../Redux/Actions';
import { setAvailableMenu } from '../../Redux/Actions/userAction';

// IMAGES
import live from '../../Assets/Images/live-thumbnail.svg';

// HELPER
import moneyConvert from '../../Support/moneyConvert'

// STYLE
import './styles.css';

// API
import { SWAGGER_URL } from '../../Support/API_URL'

const LMSWebinar = (props) => {

    // USE DISPATCH
    const dispatch = useDispatch();

    // USE HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [webinarData,setWebinarData] = useState([])
    const [previousWebinar,setPreviousWebinar] = useState([])
    const [allW,setAllW] = useState(null)
    const [loading,setLoading] = useState(false)
    const [closeVideo,setCloseVideo] = useState(null)
    const [product,setProduct] = useState(null)

    useEffect(()=>{
        setLoading(true)
        let slug = props.location.pathname.split('/')[2]
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url : `${SWAGGER_URL}/userproducts?content_post_type=webinar&as_user=false`,
            url : `${SWAGGER_URL}/lms/${slug}/webinar`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data , ' <<<< VALUE WEBINAR HERE >>>>')
            setLoading(false)
            setAllW(data.data)
            setPreviousWebinar(data.data.previous_video)
            setCloseVideo(data.data.closest_schedule_video)
            // setPreviousWebinar(data.data.other_video)
            setWebinarData(data.data.other_video)
            setProduct(data.data.recommend_product)
            dispatch(setAvailableMenu(data.data.available_menu))
            // console.log(data, ' <<< VALUE WEBINAR HERE <<< **** *999 *(*')
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response)
        })
    },[])

    useEffect(() => {
        document.title = 'LMS Webinar';
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector((state) => state.content.videoList);

    const renderVideo = () => {
        // let sortData = webinarData.sort((a,b)=>new Date(b.content.created_at) - new Date(a.content.created_at))
        let val = closeVideo
        // sortData = closeVideo.filter((e,i)=>i === 0)
        return (
            <div style={{cursor : "pointer"}}>
                <video className='nearest-webinar'>
                    <source type='video/mp4' src={val.url} />
                </video>
                <div className='videos-desc' style={{margin: "10px 0"}}>
                    <img src={val.thumbnail} alt='mentor' style={{borderRadius : "100px",width : 50, height : 50 ,objectFit : "cover"}} />
                    <div className='videos-summary'>
                        <div className='videos-title'>
                            <b>{val.title}</b>
                        </div>
                        <div className='videos-mentor-name'>
                            Nama Mentor
                        </div>
                        {/* <div className='videos-countdown'>
                            {"ago"}
                        </div> */}
                    </div>
                </div>
            </div>
        );
        // return sortData.map((val,index) => {
        // });
    };

    const countdown = moment().endOf('hour').fromNow();

    const thumbnail = 'https://victor-mochere.com/wp-content/uploads/2019/08/How-to-download-a-video-on-YouTube.jpg';

    const renderPrevious = () => {
        let slug = props.location.pathname.split('/')[2]
        return previousWebinar.map((e,i) => {
            // console.log(e._id , ' <<< VALUE VIDEO')
            return (
                <div 
                    key={i} 
                    className='webinar-section'
                    // onClick={e=>}
                    onClick={()=>history.push(`/lms-video-detail/${slug}/${e._id}`)}
                >
                    <video className='previous-video'>
                        <source src={e.url} type="video/mp4"/>
                    </video>
                    <div className='webinar-details'>
                        <div className='webinar-title'>
                            {e.title}
                        </div>
                        <div className='webinar-audience'>
                            {e.participant} Peserta
                        </div>
                        <div className='webinar-comment'>
                            {e.total_comment} Komentar • <u>Komentar</u>
                        </div>
                        <div className='webinar-point'>
                            +{e.point} Poin
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderOthers = () => {
        let slug = props.location.pathname.split('/')[2]
        return webinarData.map((e,i) => {
            return (
                <div 
                    className='other-texts'
                    style={{cursor : "pointer"}}
                    onClick={()=>history.push(`/lms-video-detail/${slug}/${e._id}`)}
                >
                    {/* <img src={live} alt='live' className='other-live' /> */}
                    <video className='other-live'>
                        <source src={e.url} type="video/mp4"/>
                    </video>
                    <div className='other-desc'>
                        <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='other-mentor-img' />
                        <div className='other-summary'>
                            <div className='other-title'>
                                <b>{e.title}</b>
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
        return product.map((val) => {
            return (
                <div className='lmswebinar-recommended-container'>
                    <img 
                        src={productImg} 
                        alt='recommentation' 
                        className='lmswebinar-recommended-product-image' 
                    />
                    <div className='lmswebinar-recommended-product-details'>
                        <div className='lmswebinar-recommended-product-name'>
                            <b>{val.name}</b>
                        </div>
                        <div className='lmswebinar-recommended-product-price'>
                            { val.price && moneyConvert(val.price.toString(),"Rp. ")}
                        </div>
                        <div className='lmswebinar-recommended-product-sale-discount'>
                            <div className='lmswebinar-recommended-product-sale'>
                                <b>{ val.sale_price && moneyConvert(val.sale_price.toString(),"Rp. ")}</b>
                            </div>
                            <div className='lmswebinar-recommended-product-discount'>
                                Hemat {val.discount}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    // let renderNearest = () => {
    //     if (loading) {
    //         return (
    //             <Loader/>
    //         )
    //     }else {
    //         if (closeVideo.length > 0) {
    //             return renderVideo()
    //         }else {
    //             return (
    //                 <></>
    //             )
    //         }
    //     }
    // }

    let renderNearest = () => {
        if (loading ) {
            return (
                <div className='nearest-section'>
                    <div className='nearest-title'>
                        Jadwal Webinar Terdekat
                    </div>
                    <Loader/>
                    <button className='webinar-join'>
                        <b>IKUT SEKARANG</b>
                    </button>
                </div>
            )
        }else if (closeVideo) {
            return (
                <div className='nearest-section'>
                    <div className='nearest-title'>
                        Jadwal Webinar Terdekat
                    </div>
                    {renderVideo()}
                    <button className='webinar-join'>
                        <b>IKUT SEKARANG</b>
                    </button>
                </div>
            )
        }else {
            return null
        }
    }

    return (
        <div className='root'  id="webinar-loading-c">
            {/* WELCOME VIDEO */}
            <WelcomeVideo data={allW}/>

            {/* DIVIDER */}
            <div className='divider'  />

            {/* SECTION CAROUSEL */}
            <TopicSection {...props} webinarTab={true} />

            {/* DIVIDER */}
            {
                closeVideo &&
                <div className='divider' />
            }

            {/* NEAREST */}
            {renderNearest()}
            {/* {
                closeVideo.length > 0 &&
                <div className='nearest-section'>
                    <div className='nearest-title'>
                        Jadwal Webinar Terdekat
                    </div>
                    {renderNearest()}
                    <button className='webinar-join'>
                        <b>IKUT SEKARANG</b>
                    </button>
                </div>
            } */}

            
            {/* DIVIDER */}

            {
                 previousWebinar.length > 0 &&
                <div className='divider' />
            }
            
            {/* PREVIOUS */}
            {
                previousWebinar.length > 0 &&
                <div className='previous-section'>
                    <div className='previous-title'>
                        Tonton Rekaman Webinar Sebelumnya
                    </div>
                    { previousWebinar.length > 0 && renderPrevious()}
                </div>
            }

            {/* DIVIDER */}
            {
                webinarData.length > 0 &&
                <div className='divider' />
            }

            {/* OTHERS */}
            {
                webinarData.length > 0 &&
                <div className='others-section'>
                    <div className='others-title'>
                        Ikuti Webinar Lainnya
                    </div>
                    {renderOthers()}
                    {/* { webinarData.length > 0 &&  */}
                </div>
            }

            {/* DIVIDER */}
            <div className='divider' />

            {/* RECOMMENDED */}
            {
                product &&
                <div className='lmswebinar-recommended-section'>
                    <div className='lmswebinar-recommended-title'>
                        Produk Rekomendasi
                    </div>
                    <div className='lmswebinar-recommended-renderer'>
                        {renderRecommended()}
                    </div>
                </div>
            }

            {/* FOOTER */}
            <div className='lms-webinar-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default LMSWebinar;
