import React from 'react';

const Formats = () => {
    return (
        <div style={styles.root}>
            <img 
                src='https://wallpaperaccess.com/full/1102241.jpg' 
                alt="main pic" 
                style={styles.mainImg} 
            />
            <div style={{flexDirection:'column'}}>
                <div style={styles.block1}></div>
                <div style={styles.block1}></div>
            </div>
            <div style={{flexDirection:'column'}}>
                <div style={styles.block1}></div>
                <div style={styles.block1}></div>
            </div>
        </div>
    );
};

const styles = {
    root: {
        border: '1px solid black',
        display: 'flex',
        margin: '1.75rem 1.5rem',
    },
    mainImg: {
        display: 'flex',
        width: '10rem',
        height: '20rem',
    },
    block1: {
        width: '8.25rem',
        height: '10rem',
        backgroundColor: '#68A0DF',
        border: '1px solid #033e66',
    },
};

export default Formats;
