import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../Redux/Actions';
import Skeleton from '@material-ui/lab/Skeleton';
import './welcomevideo.css';

const WelcomeVideo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector(({ content }) => content.videoList);
    const loading = useSelector(({ content })=> content.loading);

    const renderVideo = () => {
        return videoList.slice(0,1).map((val,index) => {
            if (loading) {
                return (
                    <Skeleton variant="rect" width={210} height={118} />
                );
            } else {
                return (
                    <React.Fragment key={index}>
                        <video 
                            controls={true} 
                            autoPlay={true} 
                            loop={true}
                            muted={true}
                            className='welcome-video'
                        >
                            <source type='video/mp4' src={val.url} />
                        </video>
                    </React.Fragment>
                );
            }
        });
    };

    return (
        <div className='welcome-section'>
            {renderVideo()}
        </div>
    );
};

export default WelcomeVideo;
