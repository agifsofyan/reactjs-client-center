import React, { useEffect } from 'react';
import WelcomeVideo from '../../Components/WelcomeVideo';
import TopicSection from '../../Components/TopicSection';
import JoinTelegram from '../../Assets/Images/join-telegram.svg';
import silver from '../../Assets/Images/silver.png';
import { CommentOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './lmsgroup.css';

const LMSGroup = () => {
    useEffect(() => {
        document.title = 'LMS Group';
    });

    const friend = 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/02/pdne1.png';
    const name = 'John Doe';
    const job = 'Enterpreneur';

    const renderFriends = () => {
        return [0,1,2,3,4,5,6,7,8,9].map((val,index) => {
            return (
                <div key={index} className='same-friends'>
                    <img src={friend} alt='friend' className='friend-photo' />
                    <img src={silver} alt='badge' className='friend-badge' />
                    <div className='friend-details'>
                        <div className='friend-name'>
                            <b>{name}</b>
                        </div>
                        <div className='friend-job'>
                            {job}
                        </div>
                    </div>
                </div>
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
            <TopicSection groupTab={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* JOIN TELEGRAM */}
            <div className='telegram-section'>
                <img src={JoinTelegram} alt='join art' className='join-illustration' />
                <Button 
                    type="primary" 
                    shape="round" 
                    icon={<CommentOutlined />} 
                    size='large' 
                    className='join-button'
                >
                    Join Our Telegram Group
                </Button>
            </div>

            {/* DIVIDER */}
            <div className='divider' />

            {/* SAME RANK */}
            <div className='same-section'>
                <div className='same-title'>
                    Teman-teman yang Bergabung di Kelas Ini
                </div>
                <div className='same-container'>
                    {renderFriends()}
                </div>
            </div>
        </div>
    );
};

export default LMSGroup;
