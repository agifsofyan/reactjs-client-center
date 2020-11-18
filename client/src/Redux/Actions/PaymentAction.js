import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    payment_start,
    payment_success,
    payment_failed,
} from '../Types';

const token = localStorage.getItem('token');

export const getPayMethod = () => {
    return async dispatch => {
        dispatch({
            type: payment_start,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await axios.get(`${SWAGGER_URL}/payments/method`, options);
                dispatch({
                    type: payment_success,
                    payload: res.data,
                });
            }
        } catch {
            dispatch({
                type: payment_failed,
            });
        }
    };
};

export const getPayMethodById = (id) => {
    return async dispatch => {
        dispatch({
            type: payment_start,
        });
        try {
            let res = await axios.get(`${SWAGGER_URL}/payments/method/${id}`);
            dispatch({
                type: payment_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: payment_failed,
            });
        }
    };
};
