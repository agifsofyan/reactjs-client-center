import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import { Checkbox, FormControlLabel, Paper, Tabs } from '@material-ui/core';
import { Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userRegister } from '../Redux/Actions/UserAction';
import facebook from '../Assets/Images/facebook.jpg';
import google from '../Assets/Images/google.png';
import { Header } from '../Components/Auth';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '35rem',
        height: '35rem',
        borderRadius: '1rem',
        boxShadow: '0 0 3px #a4a4a4',
        margin: '0.75rem 10rem 2rem 2rem',
        float: 'right',
    },
}));

const Testing = () => {
    useEffect(() => {
        document.title = 'Authentication';
    });

    const dispatch = useDispatch();

    const classes = useStyles();

    const [value, setValue] = useState('1');
    const [tickedAgree, setTickedAgree] = useState(false);
    const [tickedPrivacy, setTickedPrivacy] = useState(false);
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });
    const [formRegister, setFormRegister] = useState({
        name: '',
        email: '',
        phone_number: '',
        password: '',
    });
    const [passwordShown, setPasswordShown] = useState(false);

    const loading = useSelector((state) => state.user.loading);
    const loggedIn = useSelector((state) => state.user.loggedIn);

    const handleChangeTickedAgree = (e) => {
        setTickedAgree(
            !tickedAgree,
            e.target.checked,
        );
    };

    const handleChangeTickedPrivacy = (e) => {
        setTickedPrivacy(
            !tickedPrivacy,
            e.target.checked,
        );
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeLogin = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        });
    };
    // console.log(formLogin);

    const handleChangeRegister = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formRegister);

    const handleLogin = () => {
        dispatch(userLogin(formLogin));
    };

    const handleRegister = (e) => {
        if (tickedAgree === true && tickedPrivacy === true) {
            dispatch(userRegister(formRegister));
        } else {
            Swal.fire(
                'Oops!',
                'Please agree to all of the T&C',
                'error',
            );
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(
            passwordShown ? false : true
        );
    };

    const imgUrl = 'https://media1.tenor.com/images/552ec189475f1d337391b02d6b0b9965/tenor.gif?itemid=13113745';

    if (loggedIn) {
        return (
            <Redirect to='/' />
        );
    }
    return (
        <React.Fragment>
            <Header />
            <div style={styles.root}>
                <div style={styles.imageDiv}>
                    <img src={imgUrl} alt='authImg' style={styles.image} />
                </div>
                <div className={classes.root}>
                    <TabContext value={value}>
                        <Paper square style={styles.paper}>
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                                centered={true}
                            >
                                <Tab label="Register" value="1" />
                                <Tab label="Login" value="2" />
                            </Tabs>
                        </Paper>
                        {/* REGISTER start */}
                        <TabPanel value="1">
                            <div style={styles.container}>
                                <Input type='text' name='name' placeholder='Name' onChange={handleChangeRegister} style={styles.inputField} id='form-register' />
                                <Input type='number' name='phone_number' placeholder='Phone Number' onChange={handleChangeRegister} style={styles.inputField} id='form-register' />
                                <Input type='text' name='email' placeholder='Email' onChange={handleChangeRegister} style={styles.inputField} id='form-register' />
                                <Input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Password' onChange={handleChangeRegister} style={styles.inputField} id='form-register' />
                                <div onClick={togglePasswordVisibility} style={styles.showHidePass}>
                                    {
                                        passwordShown
                                        ?
                                        'hide password'
                                        :
                                        'show password'
                                    }
                                </div>
                                <div style={styles.registerBottom}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={tickedAgree}
                                                onClick={handleChangeTickedAgree}
                                                name="agree"
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <span style={styles.registerCheckLabel}>
                                                Saya telah membaca dan menyetujui Aturan Penggunaan dan Kebijakan Privasi Larunocom
                                            </span>
                                        }
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={tickedPrivacy}
                                                onClick={handleChangeTickedPrivacy}
                                                name="privacy"
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <span style={styles.registerCheckLabel}>
                                                Saya telah menyetujui Privacy Policy Larunocom
                                            </span>
                                        }
                                    />
                                    <div onClick={handleRegister} style={styles.actionButton}>
                                        {
                                            loading
                                            ?
                                            'loading...'
                                            :
                                            'Register'
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        {/* REGISTER end */}
                        {/* LOGIN start */}
                        <TabPanel value="2">
                            <div style={styles.container}>
                                <Input type='text' name='email' placeholder='Email' onChange={handleChangeLogin} style={styles.inputField} />
                                <Input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Password' onChange={handleChangeLogin} style={styles.inputField} />
                                <div onClick={togglePasswordVisibility} style={styles.showHidePass}>
                                    {
                                        passwordShown
                                        ?
                                        'hide password'
                                        :
                                        'show password'
                                    }
                                </div>
                                <div style={styles.loginLabel}>
                                    <div style={styles.forgetPass}>
                                        Lupa Password?
                                    </div>
                                    <div style={styles.noAccount}>
                                        Belum punya akun?
                                    </div>
                                </div>
                                <div onClick={handleLogin} style={styles.actionButton}>
                                    {
                                        loading
                                        ?
                                        'loading...'
                                        :
                                        'Login'
                                    }
                                </div>
                                <div style={styles.atauContainer}>
                                    <div style={styles.separatorLine} />
                                        <span style={styles.separatorTxt}>
                                            ATAU
                                        </span>
                                    <div style={styles.separatorLine} />
                                </div>
                                <div style={styles.buttonGroup}>
                                    <div style={styles.facebookBtn}>
                                        <img src={facebook} alt='facebook' style={styles.socialIcon} />
                                        <span style={styles.socialTxt}>
                                            Masuk dengan Facebook
                                        </span>
                                    </div>
                                    <div style={styles.googleBtn}>
                                        <img src={google} alt='google' style={styles.socialIcon} />
                                        <span style={styles.socialTxt}>
                                            Masuk dengan Google
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        {/* LOGIN end */}
                    </TabContext>
                </div>
            </div>
        </React.Fragment>
    );
};

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    imageDiv: {
        margin:'0.75rem 2rem 2rem 10rem',
    },
    image: {
        width: '33.5rem',
        height: '35rem',
        borderRadius: '1rem',
    },
    paper: {
        borderRadius: '1rem 1rem 0rem 0rem',
    },
    container: {
        margin: '0rem 2rem',
    },
    inputField: {
        margin: '1rem 0rem',
    },
    showHidePass: {
        cursor: 'pointer',
        marginTop: '-0.8rem',
        marginBottom: '0.75rem',
        fontSize: '0.75rem',
        color: '#a4a4a4',
        width: '5.5rem',
    },
    registerBottom: {
        display: 'flex',
        flexDirection: 'column',
    },
    registerCheckLabel: {
        fontSize: '0.8rem',
        color:'#696969',
    },
    loginLabel: {
        display: 'flex',
        margin: '0.5rem 0rem',
    },
    forgetPass: {
        fontSize: '0.9rem',
        color: '#033e66',
        cursor: 'pointer',
    },
    noAccount: {
        marginLeft: '8rem',
        fontSize: '0.9rem',
        color: 'red',
        cursor: 'pointer',
    },
    actionButton: {
        cursor: 'pointer',
        textAlign: 'center',
        border: '3px solid #FF4500',
        borderRadius: '0.5rem',
        color: '#FF4500',
        fontSize: '1.15rem',
        fontWeight: '600',
        padding: '0.15rem 0rem',
    },
    atauContainer: {
        paddingBottom: '.875rem',
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(0,0,0,.8)',
        lineHeight: '1.2',
        marginTop: '1.75rem',
        marginBottom: '0.5rem',
    },
    separatorLine: {
        display: 'block',
        border: '.03125rem solid #dbdbdb',
        color: 'rgba(0,0,0,.8)',
        lineHeight: '1.2',
        flex: 1,
    },
    separatorTxt: {
        color: '#ccc',
        padding: '0 1rem',
        fontSize: '0.875rem',
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    facebookBtn: {
        cursor: 'pointer',
        boxShadow: '0 0 3px #a4a4a4',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '0.65rem',
        padding: '0.45rem',
        width: '14rem',
        marginBottom: '1rem',
        fontSize: '0.95rem',
    },
    googleBtn: {
        cursor: 'pointer',
        boxShadow: '0 0 3px #a4a4a4',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '0.65rem',
        padding: '0.45rem',
        width: '13rem',
        fontSize: '0.95rem',
    },
    socialIcon: {
        height: '1.75rem',
        marginRight: '0.5rem',
    },
    socialTxt: {
        marginTop: '0.1rem',
    },
};

export default Testing;
