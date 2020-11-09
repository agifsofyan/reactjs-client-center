import React from 'react';
import backArrow from '../../Assets/back-arrow.png';

const Header = (props) => {
    return (
        <div style={styles.container}>
            <a href='/'>
                <img src={backArrow} alt='back-arrow' style={styles.backIcon} />
            </a>
            <div>
                <div style={styles.titleText}>
                    Login / Register
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
    titleText: {
        borderRadius: '0.75rem',
        marginTop: '0.75rem',
        padding: '0.35rem 0.75rem',
        fontWeight: '600',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 3px #787878',
    },
};

export default Header;
