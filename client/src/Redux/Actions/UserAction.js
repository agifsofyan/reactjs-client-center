import axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    user_start,
    user_register,
    user_login,
    user_failed,
} from '../Types';

export const userRegister = (form) => {
    return async dispatch => {
        dispatch({
            type: user_start,
        });
        try {
            let headers = {
                headers : {
                    'Content-type': 'application/json',
                    'accept': 'application/json',
                },
            };
            let res = await axios.post(`${API_URL}/users`, form, headers);
            dispatch({
                type: user_register,
                payload: res.data,
            });
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
            let headers = {
                headers : {
                    'Content-type': 'application/json',
                    'accept': 'application/json',
                },
            };
            let res = await axios.post(`${API_URL}/users/login`, form, headers);
            dispatch({
                type: user_login,
                payload: res.data,
            });
            console.log('login berhasil');
        } catch {
            dispatch({
                type: user_failed,
            });
            console.log('login gagal');
        }
    };
};
