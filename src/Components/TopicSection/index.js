import React from 'react';

// MODULE
import { useHistory } from 'react-router-dom'

import './topicsection.css';

const TopicSection = (props) => {

    // HISTORY
    const history = useHistory()

    const {
        dashboardTab,
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
            active: dashboardTab,
            href: '/lms-dashboard',
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
                <div 
                    onClick={e=>history.push(val.href)}
                    key={index} 
                    className={
                        val.active 
                        ? 
                        `section-title-active` 
                        : 
                        `section-title`
                    }
                    style={{cursor : "pointer"}}
                >
                    {val.title}
                </div>
                // <a href={val.href} className='anchor'>
                // {/* </a> */}
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
