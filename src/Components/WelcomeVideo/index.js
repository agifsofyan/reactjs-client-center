import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../Redux/Actions';
import Skeleton from '@material-ui/lab/Skeleton';
import './welcomevideo.css';

const WelcomeVideo = (props) => {

    const {
        data
    } = props
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const dataLMS = useSelector(state=>state.user.userLMS)

    const videoList = useSelector(({ content }) => content.videoList);
    const loading = useSelector(({ content })=> content.loading);

    const renderVideo = () => {
        // dataLMS[0]
        const sel = document.getElementById('video-welcome-lms')
        if (!data) {
            return (
                <React.Fragment>
                    {/* <Skeleton duration={0.5} width={ sel && sel.offsetWidth} height={500} /> */}
                    <div className="welcome-video">
                        <Skeleton
                            width={sel && sel.offsetWidth}
                            height={400}
                            duration={0.1}
                            variant="rect"
                        />
                    </div>
                 </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <video 
                        controls={true} 
                        autoPlay={true} 
                        loop={true}
                        muted={true}
                        className='welcome-video'
                        id="video-welcome-lms"
                    >
                        <source 
                            type='video/mp4' 
                            // src={ dataLMS[0].content ? dataLMS[0].content.thanks.video : val.src} 
                            src={data.video_thanks} 
                        />
                    </video>
                </React.Fragment>
            );
        }
        // return videoList.slice(0,1).map((val,index) => {
        // });
    };

    return (
        <div className='welcome-section'>
            { renderVideo()}
        </div>
    );
};

export default WelcomeVideo;
