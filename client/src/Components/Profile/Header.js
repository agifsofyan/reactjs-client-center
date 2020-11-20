import React from 'react';
import { useSelector } from 'react-redux';
import backArrow from '../../Assets/back-arrow.png';

const Header = (props) => {
    const loggedIn = useSelector((state) => state.user.loggedIn);

    return (
        <div style={styles.container}>
            <a href='/'>
                <img src={backArrow} alt='back-arrow' style={styles.backIcon} />
            </a>
            <div style={styles.titleName}>
                <div style={styles.title}>
                    My Profile
                </div>
                <div style={styles.greet}>
                    Hi, {loggedIn ? props.name : 'Guest'} &#128075;
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '3.5rem',
    },
    backIcon: {
        height: '1.5rem',
        margin: '1rem 2rem 1rem 1.5rem',
    },
    titleName: {
        display: 'flex',
    },
    title: {
        borderRadius: '0.75rem',
        margin: '0.5rem 0rem 0.6rem 0rem',
        padding: '0.5rem 0.75rem',
        fontWeight: '600',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 3px #787878',
    },
    greet: {
        marginLeft: '60rem',
        fontWeight: '600',
        padding: '1rem 0rem',
    },
};

export default Header;
