import React from 'react';
import laruno from '../../Assets/laruno.png';
import facebook from '../../Assets/facebook.jpg';
import instagram from '../../Assets/instagram.png';
import youtube from '../../Assets/youtube.png';
import tiktok from '../../Assets/tiktok.png';

const Footer = () => {
    return (
        <div style={styles.container}>
            {/* 1ST START */}
            <div style={styles.firstSection}>
                <div style={styles.logoDiv}>
                    <img src={laruno} alt='logo laruno' height={30} />
                </div>
                <div style={styles.socialWrapper}>
                    <div style={styles.contact}>
                        Hubungi Kami
                    </div>
                    <div style={styles.socialBox}>
                        <img src={facebook} alt='fb icon' height={25} />
                    </div>
                    <div style={styles.socialBox}>
                        <img src={instagram} alt='fb icon' height={25} />
                    </div>
                    <div style={styles.socialBox}>
                        <img src={youtube} alt='fb icon' height={25} />
                    </div>
                    <div style={styles.socialBox}>
                        <img src={tiktok} alt='fb icon' height={25} />
                    </div>
                </div>
                <div style={styles.copyright}>
                    Copyright @ 2020 Laruno.com <br/>All rights reserved
                </div>
            </div>
            {/* 1ST END */}
            {/* 2ND START */}
            <div style={styles.secondSection}></div>
            {/* 2ND END */}
        </div>
    );
};

const styles = {
    container: {
        width: '100vw',
        height: '30vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
    },
    // FIRST START
    firstSection: {
        display: 'flex',
        justifyContent: 'center',
        width: '25vw',
        height: '100%',
    },
    logoDiv: {
        position: 'absolute',
        marginTop: '0.5em',
    },
    socialWrapper: {
        display: 'flex',
        marginTop: '1em',
    },
    contact: {
        fontSize: '0.9em',
        position: 'absolute',
        left: '8em',
        marginTop: '3.25em',
        color: '#787878',
    },
    socialBox: {
        margin: '0em 0.5em',
        marginTop: '4.5em',
        padding: '0.35em',
        borderRadius: '0.5em',
        backgroundColor: 'white',
        height: '2.5em',
    },
    copyright: {
        width: '20em',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '0.8em',
        color: '#a4a4a4',
        marginTop: '12em',
    },
    // FIRST END
    // SECOND START
    secondSection: {
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        width: '25vw',
        height: '100%',
    },
    // SECOND END
};

export default Footer;
