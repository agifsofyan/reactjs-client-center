import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { userLogin } from '../Redux/Actions/UserAction';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.user.loading);
    const loggedIn = useSelector((state) => state.user.loggedIn);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    console.log(form);

    const handleLogin = () => {
        dispatch(userLogin(form));
    };

    useEffect(() => {
        document.title = 'Login Page';
    });

    if (loggedIn) {
        return <Redirect to='/' />
    };
    return (
        <div>
            <Input type='text' name='email' placeholder='Email' onChange={handleChange} />
            <Input type='password' name='password' placeholder='Password' onChange={handleChange} />
            <Button color='primary' onClick={handleLogin}>
                {
                    loading
                    ?
                    'loading...'
                    :
                    'Login'
                }
            </Button>
            <a href='/register'>
                <Button>
                    Don't have an account? Go Register!
                </Button>
            </a>
            <a href='/'>
                <Button outline>
                    Back to Home
                </Button>
            </a>
        </div>
    );
};

export default LoginPage;
