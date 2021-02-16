import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById } from '../../Redux/Actions';
import Footer from '../../Components/LMSFooter';
import views from '../../Assets/Images/views.svg';
import likethumb from '../../Assets/Images/like.svg';
import likedthumb from '../../Assets/Images/liked.svg';
import share from '../../Assets/Images/share.svg';
import later from '../../Assets/Images/later.svg';
import save from '../../Assets/Images/save.svg';
import saved from '../../Assets/Images/saved.svg';
import other from '../../Assets/Images/other.svg';
import playNext from '../../Assets/Images/play-next.svg';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import './Detail.css';

const Detail = (query) => {
    const dispatch = useDispatch();

    const videoById = useSelector(({ content }) => content.videoById);
    const queryId = query.location.search.split('=')[1];

    useEffect(() => {
        document.title = 'LMS Video Playing';
        dispatch(getVideoById(queryId));
    }, [dispatch, queryId]);

    const [likedState, setLikedState] = useState(false);
    const toggleLike = () => {
        setLikedState({
            likedState: !likedState,
        });
    };
    const likeIcon = likedState ? likedthumb : likethumb;

    const [savedState, setSavedState] = useState(false);
    const toggleSave = () => {
        setSavedState({
            savedState: !savedState,
        });
    };
    const saveIcon = savedState ? saved : save;

    const renderVideo = () => {
        return videoById.slice(0,1).map((val,index) => {
            return (
                <div key={index}>
                    {/* <div>{val._id}</div> */}
                    <video controls={true} className='playing-video'>
                        <source type='video/mp4' src={val.url} />
                    </video>
                    <div className='description-container'>
                        <div className='video-title'>
                            <b>🎵 Hotel Del Luna OST Medley (호텔 델루나 OST 메들리) | 4hands piano</b>
                        </div>
                        <div style={{display:'flex'}}>
                            <div className='video-views'>
                                <img src={views} alt='views' className='views-icon' />
                                <div>140.191.746 views</div>
                            </div>
                            ●
                            <div className='video-creation'>
                                Uploaded on May 1, 2019
                            </div>
                        </div>
                    </div>
                    <div className='action-container'>
                        <div className='action-group'>
                            <img 
                                src={likeIcon} 
                                alt='like' 
                                style={{height:'30px'}} 
                                onClick={toggleLike} 
                            />
                            <div className='action-text'>
                                Like
                            </div>
                        </div>
                        <div className='action-group'>
                            <img src={share} alt='share' style={{height:'30px'}} />
                            <div className='action-text'>
                                Share
                            </div>
                        </div>
                        <div className='action-group'>
                            <img src={later} alt='later' style={{height:'30px'}} />
                            <div className='action-text'>
                                Add to Watch Later
                            </div>
                        </div>
                        <div className='action-group'>
                            <img 
                                src={saveIcon} 
                                alt='save' 
                                style={{height:'30px'}} 
                                onClick={toggleSave} 
                            />
                            <div className='action-text'>
                                Save
                            </div>
                        </div>
                        <div className='action-group'>
                            <img src={other} alt='other' style={{height:'30px'}} />
                            <div className='action-text'>
                                Others
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const videoImg = 'https://wallpaperboat.com/wp-content/uploads/2020/04/red-aesthetic-wallpaper-1920x1080-10.jpg';

    const renderPlaylist = () => {
        return [0,1,2,3,4].map((val,index) => {
            return (
                <div className={index === 0 ? 'video-container active' : 'video-container'}>
                    <img src={videoImg} alt='video' className='video-playlist' />
                    <div className='playlist-description'>
                        <div className='playlist-title'>
                            BOE Business Master
                        </div>
                        <div className='playlist-part'>
                            Part {index + 1}
                        </div>
                    </div>
                </div>
            );
        });
    };

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <div className='root'>
            {/* PLAYING */}
            <div>
                {renderVideo()}
            </div>

            {/* DIVIDER */}
            <div className='divider-thin' />

            {/* PLAYLIST */}
            <div>
                <div className='playlist-header'>
                    <img src={playNext} alt='play-next' className='play-next' />
                    Video Selanjutnya
                </div>
                <div className='playlist-groups'>
                    {renderPlaylist()}
                </div>
            </div>

            {/* DIVIDER */}
            <div className='divider-thin' />

            {/* COMMENTS */}
            <div className='comment-container'>
                <Comment
                    actions={actions}
                    author='Han Solo'
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                            and efficiently.
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                />
            </div>

            {/* FOOTER */}
            <div style={{marginTop:'50px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default Detail;
