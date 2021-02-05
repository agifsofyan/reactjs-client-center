import React, { useEffect } from 'react';
import Profile from '../../Components/LMS-Profile';
import silver from '../../Assets/Images/silver.png';
import './lmsprofilepage.css';

const LMSProfile = () => {
    useEffect(() => {
        document.title = 'LMS Profile';
    });

    const pictureList = [
        {
            img: 'https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2013/08/minimal-wallpaper-01.png?fit=550%2C344&ssl=1',
            active: false,
        },
        {
            img: 'https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2013/08/minimal-wallpaper-01.png?fit=550%2C344&ssl=1',
            active: false,
        },
        {
            img: 'https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2013/08/minimal-wallpaper-01.png?fit=550%2C344&ssl=1',
            active: true,
        },
        {
            img: 'https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2013/08/minimal-wallpaper-01.png?fit=550%2C344&ssl=1',
            active: false,
        },
        {
            img: 'https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2013/08/minimal-wallpaper-01.png?fit=550%2C344&ssl=1',
            active: false,
        },
    ];

    const renderPictures = () => {
        return pictureList.map((val,index) => {
            return (
                <div key={index}>
                    <img 
                        src={val.img} 
                        alt='wallpapers' 
                        className={
                            val.active
                            ?
                            'lmsprofile-picture-image-active'
                            :
                            'lmsprofile-picture-image'
                        } 
                    />
                </div>
            );
        });
    };

    const rank = [
        'Laruno Super Star Member',
        'Laruno Legend Member',
    ];

    const mrSquare = 'https://pht.qoo-static.com/fvSu5irXm8vUNPNsxKotdUxciekJObwfpmdEz2q_NKdWNJvFbzy6Ck1ylNIR4aezPQ=w512';

    const renderBenefits = () => {
        return [0,1,2,3,4,5,6].map(() => {
            return (
                <div>
                    <img 
                        src={mrSquare} 
                        alt='benefits' 
                        style={{
                            height:'125px',
                            margin:'10px',
                        }} 
                    />
                </div>
            );
        });
    };

    const ways = [
        { txt: 'Ini cara pertama' },
        { txt: 'Ini cara kedua' },
        { txt: 'Ini cara ketiga' },
    ];

    const renderWays = () => {
        return ways.map((val,index) => {
            return (
                <div key={index} style={{
                    fontFamily:'Rubik, sans-serif',
                    fontSize:'larger',
                    marginBottom:'10px',
                }}>
                    ● &nbsp; {val.txt}
                </div>
            );
        });
    };

    const friend = 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/02/pdne1.png';
    const name = 'John Doe';
    const job = 'Enterpreneur';

    const renderFriends = () => {
        return [0,1,2,3,4,5].map((val,index) => {
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
            {/* PROFILE CHECK */}
            <Profile complete={true} />

            {/* DIVIDER */}
            <div className='divider' />

            {/* PICTURE */}
            <div className='lmsprofile-pictures-slider'>
                {renderPictures()}
            </div>

            {/* DETAILS */}
            <div className='lmsprofile-details-main-container'>
                <div className='lmsprofile-details-reach'>
                    Pertahankan {rank[0]} dan raih hingga mencapai {rank[1]}.
                </div>
                <div className='lmsprofile-details-benefits'>
                    Keuntungan {rank[0]} :
                </div>
                <div className='lmsprofile-details-benefits-render'>
                    {renderBenefits()}
                </div>
                <div className='lmsprofile-details-protect'>
                    Cara untuk mempertahankan level {rank[0]} anda adalah sebagai berikut :
                </div>
                <div className='lmsprofile-details-protect-render'>
                    {renderWays()}
                </div>
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

export default LMSProfile;
