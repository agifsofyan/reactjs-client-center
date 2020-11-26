import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    user_start,
    user_register,
    user_login,
    user_keep_login,
    user_change_pass,
    user_logout,
    user_failed,
} from '../Types';

export const userRegister = (form) => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        try {
            let res = await axios.post(`${SWAGGER_URL}/users`, form);
            let { accessToken } = res.data.data;
            dispatch({
                type: user_register,
                payload: res.data.data.user,
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
            let { accessToken } = res.data.data;
            dispatch({
                type: user_login,
                payload: res.data.data.user,
            });
            localStorage.setItem('token',accessToken);
            console.log('login berhasil');
        } catch {
            dispatch({
                type: user_failed,
            });
            console.log('login gagal');
        }
    };
};

export const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: user_logout,
        });
    };
};

export const keepLogin = () => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        const token = localStorage.getItem('token');
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await axios.get(`${SWAGGER_URL}/users/me`, options);
                dispatch({
                    type: user_keep_login,
                    payload: res.data.data.user,
                });
                console.log('keep login is running');
            }
        } catch {
            dispatch({
                type: user_failed,
            });
        }
    };
};

export const changePassword = (form) => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        const token = localStorage.getItem('token');
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await axios.put(`${SWAGGER_URL}/users/change-password`, form, options);
                dispatch({
                    type: user_change_pass,
                    payload: res.data,
                });
            }
        } catch {
            dispatch({
                type: user_failed,
            });
        }
    };
};
