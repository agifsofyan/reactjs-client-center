import React, { useEffect, useState } from 'react';
import { Rate, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import bronze from '../../Assets/Images/bronze.png';
import silver from '../../Assets/Images/silver.png';
import gold from '../../Assets/Images/gold.png';
import obsidian from '../../Assets/Images/obsidian.png';
import diamond from '../../Assets/Images/diamond.png';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, postReviewCourse } from '../../Redux/Actions';
import './style.css';

const LMSHome = (query) => {
    const dispatch = useDispatch();

    const productById = useSelector(({ product }) => product.productById);
    const queryId = query.location.search.split('=')[1];

    useEffect(() => {
        document.title = 'LMS Home';
        dispatch(getProductById(queryId));
    }, [dispatch, queryId]);

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
        return (
            <div>
                <div>{productById._id}</div>
                <img src={detail.image} alt='product' className='product-image' />
                <div className='product-mentor'>
                    Mentored by <b>{detail.mentor}</b>
                </div>
                <div className='product-title'>
                    <b>{productById.name}</b>
                </div>
                <div className='product-description'>
                    {productById.description}
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
        return leaderboardList.map((val,index) => {
            return (
                <div className='person-rank'>
                    <div className='profile'>
                        <img src={val.photo} alt='person' className='profile-photo' />
                        <div className='person-position'>
                            {index + 1}
                        </div>
                        <div className='profile-namejob'>
                            <div className='profile-name'>
                                <b>{val.name}</b>
                            </div>
                            <div className='profile-job'>
                                {val.job}
                            </div>
                        </div>
                    </div>
                    <img src={val.badge} alt='badge' className='profile-badge' />
                </div>
            );
        });
    };

    const moreIcon = 'https://image.flaticon.com/icons/png/512/61/61140.png';

    let [reviewRate, setReviewRate] = useState(0);
    let [mentorRate, setMentorRate] = useState(0);

    const handleChangeReview = (value) => {
        setReviewRate(value);
        reviewRate = value;
    };

    const handleChangeMentor = (value) => {
        setMentorRate(value);
        mentorRate = value;
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
    };

    const handleSubmitReview = () => {
        dispatch(postReviewCourse(reviewCourse));
        message.success('Your review has been submitted');
    };

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection dashboardTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* DETAIL */}
            <div className='detail-section'>
                {renderDetail()}
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
                <div className='rating-content'>
                    <div className='rating-title'>
                        Nilai Mentor
                    </div>
                    <Rate onChange={handleChangeMentor} value={mentorRate} />
                    <div className='rate-number'>
                        <u>{mentorRate}</u>/5
                    </div>
                </div>
            </div>
            <div className='separator' />
            <div className='comment-section'>
                <div className='comment-label'>
                    Komentar Positif Setelah Belajar
                </div>
                <TextArea name='opini' rows={5} showCount={true} maxLength={300} onChange={handleChangeReviewCourse} />
                <div className='commment-button-section'>
                    <button className='post-comment-button' onClick={handleSubmitReview}>
                        Tulis Komentar
                    </button>
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* LEADERBOARD */}
            <div className='leaderboard-section'>
                <div className='leaderboard-title'>
                    Peringkat Mingguan
                </div>
                <div className='weekly-section'>
                    {renderLeaderboard()}
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
            <div style={{marginTop:'50px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default LMSHome;
