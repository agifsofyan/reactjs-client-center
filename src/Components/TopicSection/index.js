import React , { useState } from 'react';

// MODULE
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './topicsection.css';

const TopicSection = (props) => {

    // HISTORY
    const history = useHistory()

    // GLOBAL STATE
    const availableMenu = useSelector(state=>state.user.availableMenu)

    // PARENT PROPS
    const {
        dashboardTab,
        webinarTab,
        videoTab,
        tipsTab,
        moduleTab,
        groupTab,
        bonusTab,
        resellerTab,
        idProduct,
    } = props;

    // LOCAL STATE 
    const [id,setId] = useState(null)

    const sectionTopic = [
        {
            title: 'Home',
            active: dashboardTab,
            href: `/lms-home/${props.location.pathname.split('/')[2]}`,
            menu : "home"
        },
        {
            title: 'Webinar',
            active: webinarTab,
            href: `/lms-webinar/${props.location.pathname.split('/')[2]}`,
            menu : "webinar"
        },
        {
            title: 'Video',
            active: videoTab,
            href: `/lms-video-list/${props.location.pathname.split('/')[2]}`,
            menu : "video"
        },
        {
            title: 'Tips',
            active: tipsTab,
            href: `/lms-tips-list/${props.location.pathname.split('/')[2]}`,
            menu : "tips"
        },
        {
            title: 'Module',
            active: moduleTab,
            href: '/lms-module',
            menu : "module",
        },
        {
            title: 'Group',
            active: groupTab,
            href: '/lms-group',
            menu : "group",
        },
        {
            title: 'Bonus',
            active: bonusTab,
            href: '/lms-bonus',
            menu : "bonus",
        },
        {
            title: 'Reseller',
            active: resellerTab,
            href: '/lms-reseller',
            menu : "reseller",
        },
    ];

    const handleChange = ({title,active,href}) => {
        history.push(href)
    }

    const renderSection = () => {
        return sectionTopic.map((val,index) => {
            // console.log(availableMenu[val.menu] , ' <<< IT SHOULD BE TRUE')
            return (
                <div 
                    onClick={e=> availableMenu[val.menu] && handleChange(val)}
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
            {availableMenu && renderSection()}
        </div>
    );
};

export default TopicSection;
