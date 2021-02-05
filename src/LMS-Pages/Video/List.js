import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TopicSection from '../../Components/TopicSection';
import { getVideo } from '../../Redux/Actions';
import moment from 'moment';
import localization from 'moment/locale/id';
import './List.css';

const Terbaru = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector(({ content }) => content.videoList);

    moment.updateLocale('id', localization);

    const renderVideos = () => {
        return videoList.map((val,index) => {
            let time = val.created_at;
            let date = time.substring(0,10).split('-').join('');
            let ago = moment(date, "YYYYMMDD").fromNow();
            return (
                <Link to={`/lms-video-detail?id=${val._id}`}>
                    <div key={index} className='videos-texts'>
                        <img src='https://www.visme.co/wp-content/uploads/2020/02/i_Adventure-Youtube-Video-Cover_full.jpg' alt='live' className='videos-live' />
                        <div className='videos-desc'>
                            <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='videos-mentor-img' />
                            <div className='videos-summary'>
                                <div className='videos-title'>
                                    <b>{val.filename}</b>
                                </div>
                                <div className='videos-mentor-name'>
                                    mentor name here
                                </div>
                                <div className='videos-countdown'>
                                    {ago}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
    };

    return (
        <div>
            {renderVideos()}
        </div>
    );
};

const Rekomendasi = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector(({ content }) => content.videoList);

    moment.updateLocale('id', localization);

    const renderVideos = () => {
        return videoList.map((val,index) => {
            let time = val.created_at;
            let date = time.substring(0,10).split('-').join('');
            let ago = moment(date, "YYYYMMDD").fromNow();
            return (
                <div key={index} className='videos-texts'>
                    <img src='https://i.pinimg.com/564x/31/33/d0/3133d0bb864699786afd62f71022297e.jpg' alt='live' className='videos-live' />
                    <div className='videos-desc'>
                        <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='videos-mentor-img' />
                        <div className='videos-summary'>
                            <div className='videos-title'>
                                <b>{val.filename}</b>
                            </div>
                            <div className='videos-mentor-name'>
                                mentor name here
                            </div>
                            <div className='videos-countdown'>
                                {ago}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {renderVideos()}
        </div>
    );
};

const TelahDitonton = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector(({ content }) => content.videoList);

    moment.updateLocale('id', localization);

    const renderVideos = () => {
        return videoList.map((val,index) => {
            let time = val.created_at;
            let date = time.substring(0,10).split('-').join('');
            let ago = moment(date, "YYYYMMDD").fromNow();
            return (
                <div className='videos-texts'>
                    <img src='https://cdn.wallpapersafari.com/88/67/ul5hCp.png' alt='live' className='videos-live' />
                    <div className='videos-desc'>
                        <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='videos-mentor-img' />
                        <div className='videos-summary'>
                            <div className='videos-title'>
                                <b>{val.filename}</b>
                            </div>
                            <div className='videos-mentor-name'>
                                mentor name here
                            </div>
                            <div className='videos-countdown'>
                                {ago}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {renderVideos()}
        </div>
    );
};

const SesuaiTopik = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector(({ content }) => content.videoList);

    moment.updateLocale('id', localization);

    const renderVideos = () => {
        return videoList.map((val,index) => {
            let time = val.created_at;
            let date = time.substring(0,10).split('-').join('');
            let ago = moment(date, "YYYYMMDD").fromNow();
            return (
                <div className='videos-texts'>
                    <img src='https://wallpapercave.com/wp/1A9R2z9.jpg' alt='live' className='videos-live' />
                    <div className='videos-desc'>
                        <img src='https://pbs.twimg.com/media/ETKeT7wWAAAsxFY.jpg' alt='mentor' className='videos-mentor-img' />
                        <div className='videos-summary'>
                            <div className='videos-title'>
                                <b>{val.filename}</b>
                            </div>
                            <div className='videos-mentor-name'>
                                mentor name here
                            </div>
                            <div className='videos-countdown'>
                                {ago}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {renderVideos()}
        </div>
    );
};

const tabList = [
    {
        id: 1,
        title: 'Terbaru',
        content: <Terbaru />,
    },
    {
        id: 2,
        title: 'Rekomendasi',
        content: <Rekomendasi />,
    },
    {
        id: 3,
        title: 'Telah Ditonton',
        content: <TelahDitonton />,
    },
    {
        id: 4,
        title: 'Sesuai Topik',
        content: <SesuaiTopik />,
    },
];

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

const List = () => {
    useEffect(() => {
        document.title = 'LMS Video';
    });

    const [active, setActive] = useState(1);

    return (
        <div className='root'>
            {/* SECTION CAROUSEL */}
            <div style={{marginTop:'20px'}}>
                <TopicSection videoTab={true} />
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* FILTER */}
            <div className='filter-container'>
                {tabList.map(({ id, title }) => 
                    <FilterTab
                        key={title}
                        title={title}
                        onItemClicked={() => setActive(id)}
                        isActive={active === id}
                    />
                )}
            </div>

            {/* LISTS */}
            <div className='videos-section'>
                {tabList.map(({ id, content }) => {
                    return active === id 
                    ? 
                    content 
                    : 
                    null
                })}
            </div>
        </div>
    );
};

export default List;
