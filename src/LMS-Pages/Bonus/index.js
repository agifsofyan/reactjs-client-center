import React, { useEffect } from 'react';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import Footer from '../../Components/LMSFooter';
import './lmsbonus.css';

const Content = () => {
    const bonusImg = 'https://www.minews.id/wp-content/uploads/2020/08/Tanaman-Aesthetic-1200x793.jpg';

    const list = [0,1,2,3,4];

    let renderList = () => {
        return list.map(() => {
            return (
            <div>
                <img src={bonusImg} alt='recom' className="slides-3-lms-bonus-content-c1" />
                <span className="slides-3-lms-bonus-content-c2">
                    Lorem Ipsum
                </span>
                <div className="slides-3-lms-bonus-content-c3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the  
                </div>
                <div className='slides-3-lms-bonus-content-c4'>
                    <b>+3 Poin</b>
                </div>
                <div className="baca-button">
                    <b>Baca</b>
                </div>
            </div>
            );
        });
    };

    return (
        <div className="slides-3-lms-bonus">
            { list && renderList() }
        </div>
    );
};

const LMSBonus = () => {
    useEffect(() => {
        document.title = 'LMS Bonus';
    });

    return (
        <div className='root'>
            {/* WELCOME VIDEO */}
            <WelcomeVideo />

            {/* DIVIDER */}
            <div className='divider' />

            {/* SECTION CAROUSEL */}
            <TopicSection bonusTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* BONUS */}
            <div className='bonus-section'>
                <div className='bonus-title'>
                    Bonus Tips untuk Anda Hari Ini
                </div>
                {Content()}
            </div>

            {/* FOOTER */}
            <div style={{marginTop:'30px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default LMSBonus;
