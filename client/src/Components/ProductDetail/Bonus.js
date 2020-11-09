import React from 'react';
import bonus from '../../Assets/bonus.png';

const Bonus = () => {
    return (
        <div style={styles.root}>
            <div style={styles.container}>
                {/* IMAGE start */}
                <div>
                    <img src={bonus} alt='bonusImg' style={styles.bonusImg} />
                </div>
                {/* IMAGE end */}
                {/* DESC start */}
                <div style={styles.descWrapper}>
                    <div style={styles.header}>
                        BONUS CEPAT!!!
                    </div>
                    <div style={styles.countdown}>
                        29：59：00
                    </div>
                    <div style={styles.title}>
                        Bonus title here
                    </div>
                    <div style={styles.preDisc}>
                        Rp 1.900.000
                    </div>
                    <div style={styles.offer}>
                        Special Offer!
                    </div>
                    <div style={styles.date}>
                        1-31 Oktober 2020 | <b>80% OFF</b>
                    </div>
                    <div style={styles.postDisc}>
                        Rp 210.000
                    </div>
                    <div  style={styles.joinBtn}>
                        JOIN SEKARANG
                    </div>
                </div>
                {/* DESC end */}
            </div>
        </div>
    );
};

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0rem',
    },
    container: {
        display: 'flex',
        height: '20rem',
        width: '60rem',
        boxShadow: '0 0 5px #a4a4a4',
        borderRadius: '1rem',
    },
    bonusImg: {
        margin: '2rem',
        width: '30rem',
        height: '16rem',
        borderRadius: '1rem',
    },
    descWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3.5rem',
    },
    header: {
        margin: '0.25rem 0rem',
        fontSize: '1.5rem',
        fontWeight: '600',
    },
    countdown: {
        margin: '0.25rem 0rem',
        color: 'red',
        border: '2px solid red',
        borderRadius: '0.5rem',
        padding: '0rem 0.75rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
    },
    preDisc: {
        marginTop: '0.5rem',
        fontSize: '1.35rem',
        textDecoration: 'line-through',
        textDecorationColor: 'red',
    },
    offer: {
        color: '#ff4500',
        fontSize: '1.35rem',
    },
    date: {
        color: '#ff4500',
        fontSize: '0.9rem',
    },
    postDisc: {
        marginBottom: '0.5rem',
        fontSize: '1.35rem',
        fontWeight: '600',
    },
    joinBtn: {
        cursor: 'pointer',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: '600',
        backgroundColor: '#ff4500',
        padding: '0.5rem 3rem',
        borderRadius: '1rem',
        marginBottom: '0.5rem',
        boxShadow: '0 0 5px #ff4500',
    },
};

export default Bonus;
