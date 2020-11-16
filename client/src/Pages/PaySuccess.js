import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Components/PaySuccess';
import { keepLogin } from '../Redux/Actions/UserAction';
import success from '../Assets/success.png';

const PaySuccess = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        document.title = `Successful`;
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    return (
        <div>
            <Header
                name={userData.name}
            />
            <div style={styles.image}>
                <img src={success} alt='sukses' height={250} />
            </div>
            <div style={styles.title}>
                Your payment is successful!
            </div>
            <div style={styles.description}>
                Thanks for your payment. An automated receipt will be sent to your registered email.
            </div>
            <div style={styles.learn}>
                <div style={styles.learnTxt}>
                    Lanjut Belajar
                </div>
            </div>
            <div style={styles.choose}>
                <div style={styles.chooseTxt}>
                    Pilih Pelatihan lainnya
                </div>
            </div>
            <a href='/'>
                <div style={styles.back}>
                    Back to Home
                </div>
            </a>
        </div>
    );
};

const styles = {
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.25rem 0rem',
        fontSize: '1.2rem',
        fontWeight: '600',
    },
    description: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.25rem 0rem',
    },
    learn: {
        margin: '1rem 0rem',
        display: 'flex',
        justifyContent: 'center',
    },
    learnTxt: {
        cursor: 'pointer',
        border: '0.175rem solid #FF4500',
        display: 'flex',
        justifyContent: 'center',
        width: '8rem',
        color: '#FF4500',
        padding: '0.35rem',
        fontWeight: '600',
        borderRadius: '0.75rem',
    },
    choose: {
        margin: '1rem 0rem',
        display: 'flex',
        justifyContent: 'center',
    },
    chooseTxt: {
        cursor: 'pointer',
        border: '0.175rem solid #FF4500',
        display: 'flex',
        justifyContent: 'center',
        width: '12rem',
        color: '#FF4500',
        padding: '0.35rem',
        fontWeight: '600',
        borderRadius: '0.75rem',
    },
    back: {
        display: 'flex',
        justifyContent: 'center',
        color: '#033E66',
        textDecoration: 'underline',
    },
};

export default PaySuccess;
