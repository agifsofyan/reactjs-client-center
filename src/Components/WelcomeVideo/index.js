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

    const dataLMS = useSelector(state=>state.user.userLMS)

    const videoList = useSelector(({ content }) => content.videoList);
    const loading = useSelector(({ content })=> content.loading);

    const renderVideo = () => {
        // dataLMS[0]
        console.log(dataLMS[0].content.thanks.video , ' %%%%%% % %% % % % %  ')
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
                            <source type='video/mp4' src={ dataLMS[0].content ? dataLMS[0].content.thanks.video : val.src} />
                        </video>
                    </React.Fragment>
                );
            }
        });
    };

    return (
        <div className='welcome-section'>
            { dataLMS && renderVideo()}
        </div>
    );
};

export default WelcomeVideo;
