import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    user_start,
    user_register,
    user_login,
    user_failed,
    user_keep_login,
} from '../Types';

/*
    {
        name: "coco wong",
        email: "coco.wong1945@gmail.com",
        phone_number: "812345678908",
        password: "coco123"
    }
*/

export const userRegister = (form) => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        try {
            let res = await axios.post(`${SWAGGER_URL}/users`, form);
            let { accessToken } = res.data;
            dispatch({
                type: user_register,
                payload: res.data,
            });
            localStorage.setItem(`token`, accessToken);
            console.log('register berhasil');
        } catch {
            dispatch({
                type: user_failed,
            });
            console.log('register gagal');
        }
    };
};

export const userLogin = (form) => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        try {
            let res = await axios.post(`${SWAGGER_URL}/users/login`, form);
            let { accessToken } = res.data;
            dispatch({
                type: user_login,
                payload: res.data,
            });
            localStorage.setItem('token', accessToken);
            console.log('login berhasil');
        } catch {
            dispatch({
                type: user_failed,
            });
            console.log('login gagal');
        }
    };
};

export const keepLogin = () => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        let token = localStorage.getItem('token');
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await axios.get(`${SWAGGER_URL}/users/me`, options);
                dispatch({
                    type: user_keep_login,
                    payload: res.data.user,
                });
            }
        } catch {
            dispatch({
                type: user_failed,
            });
        }
    };
};
