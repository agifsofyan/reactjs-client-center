import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import { getVideo } from '../../Redux/Actions';
import { Checkbox } from 'antd';
import './lmsreseller.css';

const LMSReseller = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'LMS Reseller';
        dispatch(getVideo());
    }, [dispatch]);

    const videoList = useSelector((state) => state.content.videoList);

    const renderVideo = () => {
        return videoList.slice(0,1).map((val,index) => {
            return (
                <React.Fragment key={index}>
                    <video controls={true} className='benefit-video'>
                        <source type='video/mp4' src={val.url} />
                    </video>
                </React.Fragment>
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
            <TopicSection resellerTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* BENEFIT */}
            <div className='benefit-section'>
                <div className='benefit-title'>
                    Benefit Bergabung Program Reseller
                </div>
                {renderVideo()}
                <Checkbox className='check-agree'>
                    Saya telah membaca dan menyetujui Aturan Penggunaan dan Kebijakan menjadi Reseller Larunocom.
                </Checkbox>
                <button className='benefit-join'>
                    JOIN RESELLER LARUNO
                </button>
            </div>

            {/* FOOTER */}
            <div style={{marginTop:'50px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default LMSReseller;
