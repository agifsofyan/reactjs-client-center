import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { userRegister } from '../Redux/Actions/UserAction';

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone_number: '',
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

    const handleRegister = () => {
        dispatch(userRegister(form));
    };

    useEffect(() => {
        document.title = 'Register Page';
    });

    if (loggedIn) {
        return <Redirect to='/' />
    };
    return (
        <div>
            <Input type='text' name='name' placeholder='Name' onChange={handleChange} />
            <Input type='number' name='phone_number' placeholder='Phone Number' onChange={handleChange} />
            <Input type='text' name='email' placeholder='Email' onChange={handleChange} />
            <Input type='password' name='password' placeholder='Password' onChange={handleChange} />
            <Button color='primary' onClick={handleRegister}>
                {
                    loading
                    ?
                    'loading...'
                    :
                    'Register'
                }
            </Button>
            <a href='/login'>
                <Button>
                    Got an account? Go Login!
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

export default RegisterPage;
