import React from 'react';
import laruno from '../../Assets/laruno.png';
import facebook from '../../Assets/facebook.jpg';
import instagram from '../../Assets/instagram.png';
import youtube from '../../Assets/youtube.png';
import tiktok from '../../Assets/tiktok.png';
// import { orange } from '@material-ui/core/colors';

const Footer = () => {
    return (
        <div style={styles.container}>
            {/* 1ST START */}
            <div style={styles.titleSection}>
                <div style={styles.logoDiv}>
                    <img src={laruno} alt='logo laruno' height={30} />
                </div>
                <div style={styles.socialWrapper}>
                    <div style={styles.contact}>
                        Hubungi Kami
                    </div>
                    <div style={styles.socialBoxes}>
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
                </div>
                <div style={styles.copyright}>
                    Copyright @ 2020 Laruno.com <br/>All rights reserved
                </div>
            </div>
            {/* 1ST END */}

            {/* 2ND START */}
            <div style={styles.linkSection}>
                <div style={styles.linkWrapper}>
                    <p style={styles.linkSectionHeader}>Tentang</p>
                    <a style={styles.link} href>Tentang Kami</a>
                    <a style={styles.link} href>Bantuan</a>
                    <a style={styles.link} href>Jadi Mentor</a>
                    <a style={styles.link} href>Kontak Kami</a>
                </div>
            </div>
            {/* 2ND END */}

            {/* 3RD Start */}
            <div style={styles.linkSection}>
                <div style={styles.linkWrapper}>
                    <p style={styles.linkSectionHeader}>#TrendingTopic</p>
                    <a style={styles.link} href>Tentang Kami</a>
                    <a style={styles.link} href>Bantuan big sentence</a>
                    <a style={styles.link} href>Bantuan big sdaassarfsdfsd</a>
                    <a style={styles.link} href>Jadi Mentor very big sentence</a>
                    <a style={styles.link} href>Kontak Kami aaa big big big aaa</a>
                </div>
            </div>
            {/* 3RD End */}

            {/* 4TH Start */}
            <div style={styles.contactSection}>
                <p style={styles.title}>
                    Belajar Sekarang
                </p>
                <button style={styles.button}>Login / Register</button>
                <div style={styles.contactInfo}>
                    {/* <img src={facebook} alt='phone icon' height={25} /> */}
                    <p style={styles.contactText}>08111739979 <br/>(10:00 - 17:00WIB)</p>
                </div>
                <div style={styles.contactInfo}>
                    {/* <img src={facebook} alt='email icon' height={25} /> */}
                    <p style={styles.contactText}>hello@laruno.com</p>
                </div>
            </div>
            {/* 4TH Start */}
        </div>
    );
};

const styles = {
    container: {
        height: '15rem',
        backgroundColor: '#f4f4f4',
        display: 'flex',
    },
    // FIRST START
    titleSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '25rem',
        flex: '25',
        height: '100%',
        flexDirection: 'column',
        padding: '1rem',
    },
    logoDiv: {
        // position: 'absolute',
        // marginTop: '0.5em',
        margin: '1rem'
    },
    socialWrapper: {
        display: 'flex',
        // marginTop: '1em',
        margin: '1rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialBoxes: {
        display: 'flex',
        flexDirection: 'row',
    },
    contact: {
        fontSize: '0.9em',
        // position: 'absolute',
        left: '8em',
        // marginTop: '3.25em',
        color: '#787878',
    },
    socialBox: {
        margin: '0em 0.5em',
        // marginTop: '4.5em',
        padding: '0.35em',
        borderRadius: '0.5em',
        backgroundColor: 'white',
        height: '2.5em',
    },
    copyright: {
        width: '20rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#a4a4a4',
        margin: '1rem 0'
    },
    // FIRST END

    // SECOND START
    linkSection: {
        // border: '1px solid black',
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '25rem',
        flex: 25,
        height: '100%',
        padding: '1rem'
    },
    
        linkWrapper: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto'
        },
    
    linkSectionHeader: {
        margin: '0.25rem 0 0.5rem 0',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: 'black',
    },

    link: {
        margin: '0.1rem',
        fontSize: '0.9rem'
    },
    // SECOND END

    //CONTACT SECTION
    title: {
        color: 'rgb(255, 69, 0)',
        fontSize: '1.4rem',
        fontWeight: '600',
        lineHeight: '1',
        margin: '0'
    },
    contactSection: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // width: '25rem',
        flex: '25',
        height: '100%',
        flexDirection: 'column',
        padding: '1rem',
        paddingBottom: '3rem'
    },
    button: {
        border: '0.2rem solid rgb(255, 69, 0)',
        color: 'rgb(255, 69, 0)',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        backgroundColor: 'transparent'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '0.8rem',
        // margin: '0.5rem'
    },
    contactText: {
        margin: 'auto 0 auto 0.4rem',
        lineHeight: '1'
    }
};

export default Footer;