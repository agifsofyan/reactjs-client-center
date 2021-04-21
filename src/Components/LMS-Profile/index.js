import React , { useState ,useEffect } from 'react';

// MODULE
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

// COMPONENT
import ProgressBar from '../../Components/ProgressBar/index';
import checkmark from '../../Assets/Images/checkmark.png';
import gold from '../../Assets/Images/gold.png';

// STYLE
import './lmsprofile.css';

const LMSProfile = (props) => {

    // HISTORY
    const history = useHistory()

    // LOCAL STATE
    const [progress,setProgress] = useState(0);

    const { complete , user } = props

    const todoList = [
        {
            todo: 'Data Diri Anda',
            complete: true,
        },
        {
            todo: 'Topik Favorit Anda',
            complete: true,
        },
        {
            todo: 'Foto Profil Anda',
            complete: false,
        },
    ];

    // GLOBAL STATE
    const userInfo = useSelector(state => state.user.userMe);


    const renderComplete = () => {
        return todoList.map((val,index) => {
            return (
                <div className='complete-todo' key={index}>
                    {val.todo}
                    {
                        val.complete
                        ?
                        <img 
                            src={checkmark} 
                            alt='check mark' 
                            height={25} 
                            className='complete-check' 
                        />
                        :
                        null
                    }
                </div>
            );
        });
    };

    let numbChange = () => {
        let num = 4
        if (userInfo.ktp_numb) {
            num+= 14
        }
        if (userInfo.phone_numbers) {
            if (userInfo.phone_numbers.length > 0) {
                num+= 14
            }
        }
        if ( userInfo.favorite_topics) {
            if (userInfo.favorite_topics.length > 0) {
                num+= 24
            }
        }
        if (userInfo.avatar) {
            num+= 9
        }
        return num
    }

    const profile = [
        {
            photo: 'https://miro.medium.com/max/2048/1*UpK-UrHOeshQf8gxcRnjpg.jpeg',
            name: 'Jane Doe',
            badge: gold,
            rank: 'Laruno Super Star Member',
            points: 120,
            class: 5,
            viewed: 23,
            ranking: 211,
        },
    ];

    const renderProfile = () => {
        return profile.map((val,index) => {
            return (
                <div key={{index}} className='comp-profile-section'>
                    <div className='comp-profile-top-section'>
                        <img src={val.photo} alt='profle' className='comp-profile-photo-img' />
                        <div className='comp-profile-details'>
                            <div className='comp-profile-name'>
                                {val.name}
                            </div>
                            <div className='comp-profile-badge-rank'>
                                <img src={val.badge} alt='badge' className='comp-profile-badge' />
                                <div className='comp-profile-rank'>
                                    {val.rank}
                                </div>
                            </div>
                            <div className='comp-profile-points'>
                                {val.points} Point(s)
                            </div>
                        </div>
                    </div>
                    <div className='comp-profile-stats-section'>
                        <div>
                            <div className='comp-profile-stats-title'>
                                Class
                            </div>
                            <div className='comp-profile-stats-count'>
                                <b>{val.class}</b>
                            </div>
                        </div>
                        <div>
                            <div className='comp-profile-stats-title'>
                                Viewed Content
                            </div>
                            <div className='comp-profile-stats-count'>
                                <b>{val.viewed}</b>
                            </div>
                        </div>
                        <div>
                            <div className='comp-profile-stats-title'>
                                Ranking
                            </div>
                            <div className='comp-profile-stats-count'>
                                <b>{val.ranking}</b>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    useEffect(()=>{
        if (user) {
            let num = 0
            if (user.achievement && user.achievement.length > 0) {
                num+= 20
            }
            if (user.address &&user.address.length > 0) {
                num+=20
            }
            if (user.experience && user.experience.length > 0) {
                num+=20
            }
            if (user.religion && user.religion.length > 0) {
                num+=20
            }
            setProgress(num)
        }
    },[user])

    return (
        <div>
            {
                complete
                ?
                <React.Fragment>
                    {renderProfile()}
                </React.Fragment>
                :
                <React.Fragment>
                    <div className='complete-title'>
                        Complete Your Profile
                    </div>
                    <ProgressBar bgcolor='#FFCA41' completed={numbChange()} />
                    {/* {renderComplete()} */}
                    <div className='complete-todo' >
                        {"Data Diri Anda"}
                        {
                            true
                            ?
                            <img 
                                src={checkmark} 
                                alt='check mark' 
                                height={25} 
                                className='complete-check' 
                            />
                            :
                            null
                        }
                    </div>
                    {
                        <div className='complete-todo' >
                            {"Topik Favorit Anda"}
                            {
                                userInfo && userInfo.favorite_topics &&
                                userInfo.favorite_topics.length > 0
                                ?
                                <img 
                                    src={checkmark} 
                                    alt='check mark' 
                                    height={25} 
                                    className='complete-check' 
                                />
                                :
                                null
                            }
                        </div>
                    }
                    <div className='complete-complete-div'>
                        <button 
                            className='complete-complete-btn'
                            onClick={e=>history.push('/profile-update')}
                        >
                            Lengkapi Profil
                        </button>
                    </div>
                    <div className='complete-later'>
                        Lewati
                    </div>
                </React.Fragment>
            }
            
        </div>
    );
};

export default LMSProfile;
