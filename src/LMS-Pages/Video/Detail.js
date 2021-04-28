import React, { useEffect, useState } from 'react';

// MODULE
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom'

// REDUX
import { getVideoById } from '../../Redux/Actions';

// COMPONENTS
import QA from '../../Components/LMS-Video/QA'
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
import Loading from './Loading'

// API SWAGGER
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './Detail.css';

const Detail = (props) => {

    // HISTORY
    const history = useHistory()

    const dispatch = useDispatch();

    const videoById = useSelector(({ content }) => content.videoById);
    const queryId = props.location.search.split('=')[1];

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

    // LOCAL STATE
    const [video,setVideo] = useState(null)
    const [next,setNext] = useState([])
    const [dataComment,setDataComment] = useState(null)

    let getData = (index) => {
        let slug = props.location.pathname.split('/')[2]
        let id = props.location.pathname.split('/')[3]
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url :  `${SWAGGER_URL}/userproducts?content_post_type=video&as_user=false&sortby=expired_date&sortval=desc` ,
            url : `${SWAGGER_URL}/lms/${slug}/video/${id}`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            console.log(data.data , ' <<< VALUE HERE &&&')
            setVideo(data.data.video_active)
            setNext(data.data.video_list)
        })
        .catch(err=>{
            // setLoading(false)
            console.log(err.response)
        })
        
    }

    let getCommment = () => {
        let id = props.location.pathname.split('/')[3]
        axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            // url :  `${SWAGGER_URL}/userproducts?content_post_type=video&as_user=false&sortby=expired_date&sortval=desc` ,
            url : `${SWAGGER_URL}/comments/video/${id}/detail`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{
            setDataComment(data.data)
            console.log(data.data , ' <<<< VALUE DATA COMMENTS HERE')
        })
        .catch(err=>{
            console.log(err.response , " <<< ERROR RESPONSE")
        })
    }

    useEffect(()=>{
        getData()
        getCommment()
    },[history])

    const renderVideo = () => {
        // let val = video.filter(e=>e._id === queryId)
        let index = 0
        // console.log(val , ' <<< FIX VALUE VAL HERE')
        return (
            <div >
                {/* <div>{val._id}</div> */}
                <video controls={true} className='playing-video'>
                    <source src={video && video.url} type='video/mp4'  />
                </video>
                <div className='description-container'>
                    <div className='video-title'>
                        <b>{video && video.title}</b>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='video-views'>
                            <img src={views} alt='views' className='views-icon' />
                            <div>{video && video.viewer &&  video.viewer.length} Dilihat</div>
                        </div>
                        ●
                        <div className='video-creation'>
                            {video &&  renderDate(video.created_at)}
                        </div>
                    </div>
                </div>
                <div className='action-container'>
                    <div className='action-group'>
                        <img 
                            src={likeIcon} 
                            alt='like' 
                            style={{height:'30px'}} 
                            onClick={e=>[toggleLike(),getData()]} 
                        />
                        <div className='action-text' onClick={e=>getData()}>
                            {video &&  video.likes && video.likes.length} Suka
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={share} alt='share' style={{height:'30px'}} />
                        <div className='action-text'>
                            Bagikan
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={later} alt='later' style={{height:'30px'}} />
                        <div className='action-text'>
                            Tonton Nanti
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
                            Simpan
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={other} alt='other' style={{height:'30px'}} />
                        <div className='action-text'>
                            Lainnya
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const videoImg = 'https://wallpaperboat.com/wp-content/uploads/2020/04/red-aesthetic-wallpaper-1920x1080-10.jpg';

    const renderPlaylist = () => {
        let slug = props.location.pathname.split('/')[2]
        return next.map((val,index) => {
            if (val._id !== video._id) {
                return (
                    <a
                        // className={index === 0 ? 'video-container active' : 'video-container'}
                        className="video-container"
                        href={`/lms-video-detail/${slug}/${val._id}`}
                        // target="_blank"
                        // onClick={e=>history.push(`/lms-video-detail/${slug}/${val._id}`)}
                    >
                        <img src={videoImg} alt='video' className='video-playlist' />
                        <div className='playlist-description'>
                            <div className='playlist-title'>
                                {val.title}
                            </div>
                            <div className='playlist-part'>
                                Part {index + 1}
                            </div>
                        </div>
                    </a>
                );
            }
        });
    };

    const renderDate = (date) => {
        let arrM = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
        return "Di Unggah Pada " +  new Date(date).getDate() + " " + arrM[new Date(date).getMonth()] + " " + new Date(date).getFullYear()
    }

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

    let renderLoading = () => {
        return (
            <div >
                <Loading style={{margin : 0 , marginTop : -5}} isDetail={true}/>
                <div className='description-container' style={{marginTop : 13}}>
                    <div className='video-title'>
                        <b>{video && video.title}</b>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='video-views'>
                            <img src={views} alt='views' className='views-icon' />
                            <div>0 Dilihat</div>
                        </div>
                        ●
                        <div className='video-creation'>
                            {/* {video &&  renderDate(video.created_at)} */}
                        </div>
                    </div>
                </div>
                <div className='action-container'>
                    <div className='action-group'>
                        <img 
                            src={likeIcon} 
                            alt='like' 
                            style={{height:'30px'}} 
                            onClick={e=>[toggleLike(),getData()]} 
                        />
                        <div className='action-text' onClick={e=>getData()}>
                            0 Suka
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={share} alt='share' style={{height:'30px'}} />
                        <div className='action-text'>
                            Bagikan
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={later} alt='later' style={{height:'30px'}} />
                        <div className='action-text'>
                            Tonton Nanti
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
                            Simpan
                        </div>
                    </div>
                    <div className='action-group'>
                        <img src={other} alt='other' style={{height:'30px'}} />
                        <div className='action-text'>
                            Lainnya
                        </div>
                    </div>
                </div>
            </div>  
        )
    }

    return (
        <div className='root'>
            {/* PLAYING */}
            <div>
                { video ? renderVideo() : renderLoading()}
            </div>

            {/* DIVIDER */}
            {
                next.length > 0 &&
                <div className='divider-thin' />
            }

            {/* PLAYLIST */}
            {
                next.length > 0 &&
                <div>
                    <div className='playlist-header'>
                        <img src={playNext} alt='play-next' className='play-next' />
                        Video Selanjutnya
                    </div>
                    <div className='playlist-groups'>
                        {next.length > 0 && renderPlaylist()}
                    </div>
                </div>
            }

            {/* DIVIDER */}
            {
                video &&
                <div className='divider-thin' />
            }

            {/* COMMENTS */}
            {
                dataComment && 
                <div style={{width : "100%",display : "flex" , alignItems : "center" , flexDirection : "column"}}>
                    <QA
                        detailData={dataComment}
                        getData={getCommment}
                        videoId={props.location.pathname.split('/')[3]}
                    />
                </div>
            }

            {/* FOOTER */}
            <div className='lms-video-detail-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Detail;
