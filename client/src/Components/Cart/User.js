import React from 'react';

const User = (props) => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                User Data
            </div>
            <div style={styles.biodataWrapper}>
                <div style={styles.data}>
                    <b>Nama:</b> {props.name}
                </div>
                <div style={styles.data}>
                    <b>Email:</b> {props.email}
                </div>
                <div style={styles.data}>
                    <b>Nomor Telepon:</b> {props.phone_number}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '0rem 3rem',
        paddingBottom: '2.5rem',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1rem 0rem 0.75rem 0rem',
    },
    biodataWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '20rem',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 0 3px #787878',
    },
    data: {
        fontSize: '0.9rem',
        margin: '0.15rem 0rem',
    },
};

export default User;
