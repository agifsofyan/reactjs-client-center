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
    // console.log(formRegister);

    const handleLogin = () => {
        dispatch(userLogin(formLogin));
    };

    const handleRegister = () => {
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

    if (loggedIn) {
        return (
            <Redirect to='/' />
        );
    }
    return (
        <React.Fragment>
            <Header />
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{margin:'0.75rem 2rem 2rem 10rem'}}>
                    <img 
                        src={'https://media1.tenor.com/images/552ec189475f1d337391b02d6b0b9965/tenor.gif?itemid=13113745'} 
                        alt='authImg' 
                        style={{width:'35rem', height:'35rem', borderRadius:'1rem'}} 
                    />
                </div>
                <div className={classes.root}>
                    <TabContext value={value}>
                        <Paper square style={{borderRadius:'1rem 1rem 0rem 0rem'}}>
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
                            <div style={{margin:'0rem 2rem'}}>
                                <Input type='text' name='name' placeholder='Name' onChange={handleChangeRegister} style={{margin:'0rem 0rem 1rem 0rem'}} />
                                <Input type='number' name='phone_number' placeholder='Phone Number' onChange={handleChangeRegister} style={{margin:'1rem 0rem'}} />
                                <Input type='text' name='email' placeholder='Email' onChange={handleChangeRegister} style={{margin:'1rem 0rem'}} />
                                <Input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Password' onChange={handleChangeRegister} style={{margin:'1rem 0rem'}} />
                                <div onClick={togglePasswordVisibility} style={{cursor:'pointer', marginTop:'-0.8rem', marginBottom:'0.75rem', fontSize:'0.75rem', color:'#a4a4a4', width:'5.5rem'}}>
                                    {passwordShown ? 'hide password' : 'show password'}
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
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
                                            <span style={{fontSize: '0.8rem', color:'#696969'}}>
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
                                            <span style={{fontSize: '0.8rem', color:'#696969'}}>
                                                Saya telah menyetujui Privacy Policy Larunocom
                                            </span>
                                        }
                                    />
                                    <div 
                                        onClick={handleRegister} 
                                        style={{
                                            cursor:'pointer',
                                            textAlign: 'center',
                                            border: '3px solid #FF4500',
                                            borderRadius: '0.5rem',
                                            color: '#FF4500',
                                            fontSize: '1.15rem',
                                            fontWeight: '600',
                                            padding: '0.15rem 0rem',
                                        }}
                                    >
                                        {loading ? 'loading...' : 'Register'}
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        {/* REGISTER end */}
                        {/* LOGIN start */}
                        <TabPanel value="2">
                            <div style={{margin:'0rem 2rem'}}>
                                <Input type='text' name='email' placeholder='Email' onChange={handleChangeLogin} style={{margin:'0rem 0rem 1rem 0rem'}} />
                                <Input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Password' onChange={handleChangeLogin} style={{margin:'1rem 0rem 0rem 0rem'}} />
                                <div onClick={togglePasswordVisibility} style={{cursor:'pointer', marginBottom:'0.25rem', fontSize:'0.75rem', color:'#a4a4a4', width:'5.5rem'}}>
                                    {passwordShown ? 'hide password' : 'show password'}
                                </div>
                                <div style={{display:'flex', margin:'0.5rem 0rem'}}>
                                    <div style={{fontSize:'0.9rem', color:'#033e66', cursor:'pointer'}}>
                                        Lupa Password?
                                    </div>
                                    <div style={{marginLeft:'8rem', fontSize:'0.9rem', color:'red', cursor:'pointer'}}>
                                        Belum punya akun?
                                    </div>
                                </div>
                                <div 
                                    onClick={handleLogin} 
                                    style={{
                                        cursor:'pointer',
                                        textAlign: 'center',
                                        border: '3px solid #FF4500',
                                        borderRadius: '0.5rem',
                                        color: '#FF4500',
                                        fontSize: '1.15rem',
                                        fontWeight: '600',
                                        padding: '0.15rem 0rem',
                                    }}
                                >
                                    {loading ? 'loading...' : 'Login'}
                                </div>
                                <div 
                                    style={{
                                        paddingBottom: '.875rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'rgba(0,0,0,.8)',
                                        lineHeight: '1.2',
                                        marginTop: '1.75rem',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    <div 
                                        style={{
                                            display: 'block',
                                            border: '.03125rem solid #dbdbdb',
                                            color: 'rgba(0,0,0,.8)',
                                            lineHeight: '1.2',
                                            flex: 1,
                                        }}
                                    ></div>
                                        <span 
                                            style={{
                                                color: '#ccc',
                                                padding: '0 1rem',
                                                fontSize: '0.875rem',
                                            }}
                                        >
                                            ATAU
                                        </span>
                                    <div 
                                        style={{
                                            display: 'block',
                                            border: '.03125rem solid #dbdbdb',
                                            color: 'rgba(0,0,0,.8)',
                                            lineHeight: '1.2',
                                            flex: 1,
                                        }}
                                    ></div>
                                </div>
                                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <div style={{cursor:'pointer', boxShadow: '0 0 3px #a4a4a4', display:'flex', justifyContent:'center', borderRadius:'0.65rem', padding:'0.45rem', width:'14rem', marginBottom:'1rem', fontSize:'0.95rem'}}>
                                        <img src={facebook} alt='facebook' style={{height:'1.75rem', marginRight:'0.5rem'}} />
                                        <span style={{marginTop:'0.1rem'}}>
                                            Masuk dengan Facebook
                                        </span>
                                    </div>
                                    <div style={{cursor:'pointer', boxShadow: '0 0 3px #a4a4a4', display:'flex', justifyContent:'center', borderRadius:'0.65rem', padding:'0.45rem', width:'13rem', fontSize:'0.95rem'}}>
                                        <img src={google} alt='facebook' style={{height:'1.75rem', marginRight:'0.5rem'}} />
                                        <span style={{marginTop:'0.1rem'}}>
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

export default Testing;
