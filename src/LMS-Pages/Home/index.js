import React, { useEffect, useState } from 'react';

// MODULE
import axios from 'axios'   
import { useDispatch, useSelector } from 'react-redux';

// MODULE ANT DESIGN
import { Rate, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

// COMPONENT
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import Loader from '../../Components/Loader'
import Loading from '../../Components/LMS-Home/Loading'

// IMAGES
import bronze from '../../Assets/Images/bronze.png';
import silver from '../../Assets/Images/silver.png';
import gold from '../../Assets/Images/gold.png';
import obsidian from '../../Assets/Images/obsidian.png';
import diamond from '../../Assets/Images/diamond.png';

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// REDUX
import { getProductById, getReviewByUser, postReviewCourse } from '../../Redux/Actions';
import { getUserWhoAmI , setAvailableMenu } from '../../Redux/Actions/userAction';  

import './style.css';

const LMSHome = (props) => {
    const dispatch = useDispatch();

    const userInfo = useSelector(({ user }) => user.userMe);
    console.log(userInfo , ' <<< VALUE USER INFO')
    const dataLMS = useSelector(state=>state.user.userLMS)

    const reviewUserProduct = useSelector(({ review }) => review.reviewUserProduct);
    const productById = useSelector(({ product }) => product.productById);

    const queryId = props.location.search.split('=')[1];

    // LOCAL STATE
    let [reviewRate, setReviewRate] = useState(0);
    let [mentorRate, setMentorRate] = useState(0);
    let [loading,setLoading] = useState(false)
    const [reviewHide,setReviewHide] = useState(false)
    const [queryId2,setQueryId] = useState(null)
    const [localDetail,setLocalDetail] = useState(null)


    const [reviewStr,setReviewStr] = useState(null)

    // console.log(userInfo , ' <<< VALUE USER INFO');
    // console.log(dataLMS , ' <<< DATA LMS')

    const getReview = () => {
        let params = props.location.pathname.split('/')[2]
        let detailData = dataLMS.products.filter(e=>e.slug === params)[0]
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/review`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            // if ()
            let arr = data.data
            arr.forEach((e,i)=>{
                // console.log(e.product._id + " <<< " + detailData._id + " << "  + e.user._id + " <<< " + userInfo.user._id)
                if (e.product._id === detailData._id && e.user._id === userInfo.user._id) {
                    setReviewStr(e.opini)
                    setReviewHide(true)
                    // console.log('HERE LOL LOL HERE LOL')
                }
            })
            // if (el.)
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    }

    const getRatings = () => {
        let params = props.location.pathname.split('/')[2]
        let detailData = dataLMS.products.filter(e=>e.slug === params)[0]
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/ratings?kind=product`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            let arr = data.data
            console.log(arr , ' <<< VALUE ARR')
            arr.forEach((e,i)=>{
                // console.log(e.product._id + " <<< " + detailData._id + " << "  + e.user._id + " <<< " + userInfo._id)
                console.log(e.kind_id + " KIND <<< " + detailData._id + " DETAIL DATA. ID <<< " +  e.user_id + " E.USER.ID <<< " + userInfo.user._id + " USERINFO.ID <<<<") 
                if (e.kind_id === detailData._id && e.user_id ===  userInfo.user._id) {
                    // setReviewStr(e.opini)
                    setReviewRate(e.rate)
                    console.log(e , ' <<< VALUE DATA ratingsss HERE (()))) ---- ')
                }
            })
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    }

    useEffect(()=>{
        let slug = props.location.pathname.split('/')[2]
        // let slug = ''
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/lms/${slug}/home`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data , ' <<< VALUE API LMS HOME &&&& ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            setLocalDetail(data.data)
            dispatch(setAvailableMenu(data.data.available_menu))
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[])

    useEffect(()=>{
        let params = props.location.pathname.split('/')[2]
        if (dataLMS) {
            console.log(  params, ' ****************************************************************************************************8')
            dataLMS.products.forEach(e=>{
                console.log(e.slug , ' <<< PER SLUG')
                console.log(params , ' <<< VALUE PARAMS')
                if (e.slug === params ) {
                    console.log('****************************************************************************************************8')
                    setQueryId(e._id)
                }
            })
        }
    },[dataLMS,props.location.pathname])

    useEffect(()=>{
        if (userInfo && dataLMS) {
            getReview()
            getRatings()
        }
    },[userInfo,dataLMS])

    useEffect(() => {
        document.title = 'LMS Home';
        dispatch(getProductById(queryId));
    }, [dispatch, queryId]);

    useEffect(() => {
        dispatch(getUserWhoAmI());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getReviewByUser(userInfo._id));
    }, [dispatch, productById._id, userInfo._id]);

    useEffect(()=>{
        console.log(reviewUserProduct , ' <<< REVIEW USER PRODUK')
    },[reviewUserProduct])

    const detail = {
        image: 'https://c0.wallpaperflare.com/preview/494/520/839/russia-moscow-sunset-mood.jpg',
        mentor: 'John Doe',
        title: 'BOE Business Master',
        description: (
            <span>
                [Goal of Product] <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue lectus. Quisque placerat est aliquam, auctor ex et, elementum ante. Curabitur metus orci, condimentum condimentum viverra a, ornare vel nunc. Etiam quis rhoncus mauris. Suspendisse hendrerit felis eget justo egestas, ornare blandit arcu imperdiet. Aliquam ac egestas orci, vel venenatis nunc. Maecenas dapibus purus vestibulum posuere auctor. Fusce scelerisque viverra faucibus. Suspendisse.
            </span>
        ),
    };

    const renderDetail = () => {
        let params = props.location.pathname.split('/')[2]
        // let detailData = dataLMS.products.filter(e=>e.slug === params)[0]
        let detailData = localDetail
        // console.log(detailData ,  )
        console.log(detailData , ' << DETAIL DATA HERE')
        return (
            <div>
                {/* <div>{productById._id}</div> */}
                <img src={detailData.image_display} alt='product' className='product-image' />
                {/* <div className='product-mentor'>
                    Mentored by <b>{detail.mentor}</b>
                </div> */}
                <div className='product-title'>
                    <b>{detailData.name}</b>
                </div>
                <div className='product-description'>
                    [Goal Of Product]
                </div>
                <div className='product-description'>
                    {detailData.goal}
                </div>
            </div>
        );
    };

    const leaderboardList = [
        {
            photo: 'https://pbs.twimg.com/media/EWZwV1WWsAAMhkv.jpg',
            name: 'John Doe',
            job: 'Enterpreneur',
            badge: gold,
        },
        {
            photo: 'https://pbs.twimg.com/media/EQWYt29WsAIbHVA.jpg:large',
            name: 'Mei Ling',
            job: 'Enterpreneur',
            badge: diamond,
        },
        {
            photo: 'https://pbs.twimg.com/media/Ef-CtmIXYAANPv-.jpg',
            name: 'Muthuta',
            job: 'Enterpreneur',
            badge: obsidian,
        },
        {
            photo: 'https://pbs.twimg.com/media/EhWcspoXcAQcxH2.jpg',
            name: 'Ahmedd',
            job: 'Enterpreneur',
            badge: silver,
        },
        {
            photo: 'https://i.redd.it/tbu3ccwdulg21.jpg',
            name: 'Jeanette',
            job: 'Enterpreneur',
            badge: bronze,
        },
    ];

    const renderLeaderboard = () => {
        let data = localDetail.weekly_ranking
        return data.map((val,index) => {
            return (
                <div className='person-rank'>
                    <div className='profile'>
                        <img src={val.icon} alt='person' className='profile-photo' />
                        <div className='person-position'>
                            {index + 1}
                        </div>
                        <div className='profile-namejob'>
                            <div className='profile-name'>
                                <b>{val.user.name}</b>
                            </div>
                            <div className='profile-job'>
                                {"Job"}
                            </div>
                        </div>
                    </div>
                    <img src={val.icon} alt='badge' className='profile-badge' />
                </div>
            );
        });
    };

    const moreIcon = 'https://image.flaticon.com/icons/png/512/61/61140.png';

    const handleChangeReview = (value) => {
        console.log('LOL')
        let params = props.location.pathname.split('/')[2]
        let detailData = dataLMS.products.filter(e=>e.slug === params)[0]
        setReviewRate(value);
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/ratings/add?field=product&id=${detailData._id}&rate=${value}`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            getRatings()
            setReviewRate(value);
            console.log(data , ' <<< VALUE DATA 090009 ----- ----')
        })
        .catch(err=>{
            console.log(err.response , ' <<< ERROR')
        })
        // reviewRate = value;
    };

    const handleChangeMentor = (value) => {
        setMentorRate(value);
        // mentorRate = value;
    };

    let [reviewCourse, setReviewCourse] = useState({
        product: '',
        opini: '',
    });

    const handleChangeReviewCourse = (e) => {
        setReviewCourse({
            ...reviewCourse,
            product: productById._id,
            [e.target.name]: e.target.value,
        });
        setReviewStr(e.target.value)
    };

    const handleSubmitReview = () => {
        setLoading(true)
        let params = props.location.pathname.split('/')[2]
        let detailData = dataLMS.products.filter(e=>e.slug === params)[0]
        axios({
            method : "POST",
            url : `${SWAGGER_URL}/review`,
            data : {
                product : detailData._id,
                opini : reviewStr
            },
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setLoading(false)
            getReview()
            setReviewHide(true)
            console.log('SUKSESS ADD DATA')
            message.success('Your review has been submitted');
        })
        .catch(err=>{
            setLoading(false)
            console.log(err.response , ' <<< ERROR')
        })
        // dispatch(postReviewCourse(reviewCourse));
    };

    return (
        <div className='root'>

            {/* WELCOME VIDEO */}
            <WelcomeVideo data={localDetail} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection {...props} dashboardTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* DETAIL */}
            <div className='detail-section'>
                { localDetail ? renderDetail() : <Loading/>}
            </div>

            <div className='separator' />
            <div className='rating-container'>
                <div className='rating-content'>
                    <div className='rating-title'>
                        Beri Review
                    </div>
                    <Rate onChange={handleChangeReview} value={reviewRate} />
                    <div className='rate-number'>
                        <u>{reviewRate}</u>/5
                    </div>
                </div>
                {/* <div className='rating-content'>
                    <div className='rating-title'>
                        Nilai Mentor
                    </div>
                    <Rate onChange={handleChangeMentor} value={mentorRate} />
                    <div className='rate-number'>
                        <u>{mentorRate}</u>/5
                    </div>
                </div> */}
            </div>
            <div className='separator' />
            <div className='comment-section'>
                <div className='comment-label'>
                    Komentar Positif Setelah Belajar :
                </div>
                {
                    reviewHide ?
                    <div className='comment-from-user-product'>
                        {reviewStr}
                    </div> :
                    <div>
                    <TextArea 
                        name='opini' 
                        rows={5} 
                        showCount={true} 
                        maxLength={300} 
                        allowClear={true}
                        // disabled={reviewUserProduct !== [] ? true : false} 
                        onChange={handleChangeReviewCourse} 
                        value={reviewStr}
                    />
                    <div className='commment-button-section'>
                        <div className='post-comment-button' onClick={handleSubmitReview}>
                            {
                                loading ? 
                                <Loader/> :
                                "Tulis Komentar" 
                            }
                        </div>
                    </div>
                    </div>
                }
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* LEADERBOARD */}
            <div className='leaderboard-section'>
                <div className='leaderboard-title'>
                    Peringkat Mingguan
                </div>
                <div className='weekly-section'>
                    { localDetail && renderLeaderboard()}
                </div>
                <div className='more-icon-container'>
                    <img src={moreIcon} alt='more' className='more-icon' />
                </div>
                <div className='person-rank-highlight'>
                    <div className='profile'>
                        <img src='https://miro.medium.com/max/2048/1*UpK-UrHOeshQf8gxcRnjpg.jpeg' alt='person' className='profile-photo' />
                        <div className='person-position'>
                            211
                        </div>
                        <div className='profile-namejob'>
                            <div className='profile-name'>
                                <b>Jane Doe</b>
                            </div>
                            <div className='profile-job'>
                                Enterpreneur
                            </div>
                        </div>
                    </div>
                    <img src={bronze} alt='badge' className='profile-badge' />
                </div>
            </div>

            {/* FOOTER */}
            <div className='lms-home-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default LMSHome;
