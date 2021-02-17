import React from 'react';
import giftbox from '../../Assets/Images/giftbox-bottom.png';
import save from '../../Assets/Images/save-bottom.png';
import home from '../../Assets/Images/home-bottom.png';
import profile from '../../Assets/Images/profile-bottom.png';
import ranking from '../../Assets/Images/ranking-bottom.png';
import './lmsfooter.css';

const LMSFooter = () => {
    const renderIcons = () => {
        return (
            <React.Fragment>
                <a href='/order-history'>
                    <img src={giftbox} alt='footer icon' height={25} className='footer-icons-group' />
                </a>
                <img src={save} alt='footer icon' height={25} className='footer-icons-group' />
                <a href='/lms-dashboard'>
                    <img src={home} alt='footer icon' height={25} className='footer-icons-group' />
                </a>
                <a href='/lms-profile'>
                    <img src={profile} alt='footer icon' height={25} className='footer-icons-group' />
                </a>
                <a href='/lms-reseller-me'>
                    <img src={ranking} alt='footer icon' height={25} className='footer-icons-group' />
                </a>
            </React.Fragment>
        );
    };

    return (
        <div className='footer-root'>
            <div className='footer-container'>
                {renderIcons()}
            </div>
        </div>
    );
};

export default LMSFooter;
