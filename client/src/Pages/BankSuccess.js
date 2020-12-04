import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Components/PaySuccess';
import { keepLogin } from '../Redux/Actions/UserAction';
import success from '../Assets/Images/success.png';
import bca from '../Assets/Images/bca.png';
import bni from '../Assets/Images/bni.png';
import copy from '../Assets/Images/copy.png';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const PaySuccess = () => {
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);

    const [copySuccess, setCopySuccess] = useState('');
    console.log('copySuccess: ', copySuccess);

    useEffect(() => {
        document.title = `Successful`;
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(keepLogin(token));
        }
    }, [dispatch]);

    const [open, setOpen] = React.useState(false);

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
            setOpen(true);
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

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
            {/* user's data */}
            <div style={styles.biodata}>
                <div style={styles.bioName}>
                    <div style={styles.nameTxt}>
                        Name :
                    </div>
                    <div style={styles.nameTxt}>
                        Email :
                    </div>
                    <div style={styles.nameTxt}>
                        Phone Number :
                    </div>
                </div>
                <div style={styles.bioValue}>
                    <div style={styles.valueTxt}>
                        {userData.name}
                    </div>
                    <div style={styles.valueTxt}>
                        {userData.email}
                    </div>
                    <div style={styles.valueTxt}>
                        {userData.phone_number}
                    </div>
                </div>
            </div>
            {/* transfer information*/}
            <div style={styles.payContainer}>
                <div style={styles.payBox}>
                    <div style={styles.payTitle}>
                        Lanjutkan Pembayaran A/N (CV. Pelatihan Indonesia Sukses)
                    </div>
                    <div style={styles.payInfo}>
                        <img src={bca} alt='bank icon' height={25} />
                        <div style={styles.rekening1}>
                            88 3131 0006
                        </div>
                        <img 
                            src={copy} 
                            alt='copy icon' 
                            height={15} 
                            style={styles.copyIcon} 
                            onClick={() => copyToClipBoard('88 3131 0006')}
                        />
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Copied!"
                            action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </React.Fragment>
                            }
                        />
                    </div>
                    <div style={styles.payInfo}>
                        <img src={bni} alt='bank icon' height={25} />
                        <div style={styles.rekening1}>
                            88 3131 0000
                        </div>
                        <img 
                            src={copy} 
                            alt='copy icon' 
                            height={15} 
                            style={styles.copyIcon} 
                            onClick={() => copyToClipBoard('88 3131 0000')}
                        />
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Copied!"
                            action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </React.Fragment>
                            }
                        />
                    </div>
                </div>
            </div>
            {/* Home Button */}
            <a href='/'>
                <div style={{paddingBottom:'1.25rem'}}>
                    <div style={styles.back}>
                        Back to Home
                    </div>
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
    biodata: {
        display: 'flex',
        justifyContent: 'center',
    },
    bioName: {
        marginRight: '2rem',
    },
    nameTxt: {
        fontWeight: '600',
        fontSize: '1.125rem',
        padding: '0.25rem 0rem',
    },
    bioValue: {
        marginLeft: '2rem',
    },
    valueTxt: {
        fontSize: '1.125rem',
        padding: '0.25rem 0rem',
    },
    payContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1.25rem 0rem',
    },
    payBox: {
        border: '0.1rem solid grey',
        borderRadius: '0.5rem',
        width: '30rem',
    },
    payTitle: {
        backgroundColor: '#E6E6E6',
        borderRadius: '0.5rem 0.5rem 0rem 0rem',
        padding: '0.75rem',
        fontWeight: '600',
    },
    payInfo: {
        padding: '1.5rem',
        display: 'flex',
    },
    rekening1: {
        padding: '0rem 5rem',
        paddingTop: '0.15rem',
        color: 'grey',
    },
    copyIcon: {
        marginTop: '0.25rem',
        cursor: 'pointer',
    },
    back: {
        display: 'flex',
        textAlign: 'center',
        color: '#FF4500',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.25rem auto',
        border: '0.15rem solid #FF4500',
        width: '12.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.75rem',
        boxShadow: '0 0 0.35rem #FF4500',
    },
};

export default PaySuccess;
