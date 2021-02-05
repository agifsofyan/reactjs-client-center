import React from 'react';
import './topicsection.css';

const TopicSection = (props) => {
    const {
        homeTab,
        webinarTab,
        videoTab,
        tipsTab,
        moduleTab,
        groupTab,
        bonusTab,
        resellerTab,
    } = props;

    const sectionTopic = [
        {
            title: 'Home',
            active: homeTab,
            href: '/lms-home',
        },
        {
            title: 'Webinar',
            active: webinarTab,
            href: '/lms-webinar',
        },
        {
            title: 'Video',
            active: videoTab,
            href: '/lms-video-list',
        },
        {
            title: 'Tips',
            active: tipsTab,
            href: '/lms-tips-list',
        },
        {
            title: 'Module',
            active: moduleTab,
            href: '/lms-module',
        },
        {
            title: 'Group',
            active: groupTab,
            href: '/lms-group',
        },
        {
            title: 'Bonus',
            active: bonusTab,
            href: '/lms-bonus',
        },
        {
            title: 'Reseller',
            active: resellerTab,
            href: '/lms-reseller',
        },
    ];

    const renderSection = () => {
        return sectionTopic.map((val,index) => {
            return (
                <a href={val.href} className='anchor'>
                    <div 
                        key={index} 
                        className={
                            val.active 
                            ? 
                            `section-title-active` 
                            : 
                            `section-title`
                        }
                    >
                        {val.title}
                    </div>
                </a>
            );
        });
    };

    return (
        <div className='section-section'>
            {renderSection()}
        </div>
    );
};

export default TopicSection;
