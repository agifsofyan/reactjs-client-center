import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Actions/UserAction';
import { addToCart } from '../../Redux/Actions/CartAction';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [passwordShown, setPasswordShown] = useState(false);
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });

    const cookieCart = JSON.parse(Cookies.get('cartList'));
    // console.log('from cookies: ', cookieCart);
    console.log('from cookies: ', cookieCart);

    const togglePasswordVisibility = () => {
        setPasswordShown(
            passwordShown ? false : true
        );
    };

    const handleChangeLogin = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = () => {
        dispatch(userLogin(formLogin));
        dispatch(addToCart(...cookieCart));
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>
                Login
            </div>
            <div style={styles.separator} />
            <div>
                <Input 
                    type='text' 
                    name='email' 
                    placeholder='Email' 
                    style={styles.inputField} 
                    onChange={handleChangeLogin} 
                />
                <Input 
                    type={passwordShown ? 'text' : 'password'} 
                    name='password' 
                    placeholder='Password' 
                    style={styles.inputField} 
                    onChange={handleChangeLogin} 
                />
                <div onClick={togglePasswordVisibility} style={styles.showHideToggle}>
                    {passwordShown ? 'hide password' : 'show password'}
                </div>
                <div style={styles.forgetRegister}>
                    <div style={styles.forget}>
                        Lupa Password?
                    </div>
                    <a href='/auth' style={styles.registerHref}>
                        <div style={styles.register}>
                            Belum punya akun?
                        </div>
                    </a>
                </div>
                <div onClick={handleLogin} style={styles.loginBtn}>
                    Login
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0rem 25rem',
    },
    separator: {
        display: 'block',
        border: '.03125rem solid #dbdbdb',
        color: 'rgba(0,0,0,0.8)',
        lineHeight: '1.2',
        margin: '1rem 2.5rem',
        flex: 1,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: '600',
    },
    inputField: {
        margin: '1rem 0rem',
    },
    showHideToggle: {
        cursor: 'pointer',
        marginTop: '-0.8rem',
        marginBottom: '0.75rem',
        fontSize: '0.75rem',
        color: '#a4a4a4',
        width: '5.5rem',
    },
    forgetRegister: {
        display: 'flex',
        margin: '0.5rem 0rem',
    },
    forget: {
        fontSize: '0.9rem',
        color: '#033e66',
        cursor: 'pointer',
    },
    registerHref: {
        textDecoration: 'none',
    },
    register: {
        marginLeft: '22rem',
        fontSize: '0.9rem',
        color: 'red',
        cursor: 'pointer',
    },
    loginBtn: {
        cursor:'pointer',
        textAlign: 'center',
        border: '3px solid #FF4500',
        borderRadius: '0.5rem',
        color: '#FF4500',
        fontSize: '1.15rem',
        fontWeight: '600',
        padding: '0.15rem 0rem',
    },
};

export default LoginForm;
