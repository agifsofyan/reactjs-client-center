import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    order_start,
    order_success,
    order_post,
    order_failed,
} from '../Types';

const token = localStorage.getItem('token');

export const addToOrder = (body) => {
    return async dispatch => {
        dispatch({
            type: order_start,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                console.log('sblm axios order');
                console.log(options);
                let res = await axios.post(`${SWAGGER_URL}/orders/store`, body, options);
                console.log('stlh axios order')
                dispatch({
                    type: order_post,
                    payload: res.data,
                });
                console.log('order berhasil');
            }
        } catch {
            dispatch({
                type: order_failed,
            });
        }
    };
};

export const orderList = () => {
    return async dispatch => {
        dispatch({
            type: order_start,
        });
        try {
            let res = await axios.get(`${SWAGGER_URL}/orders/list`);
            dispatch({
                type: order_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: order_failed,
            });
        }
    };
};

export const orderDetailById = (order_id) => {
    return async dispatch => {
        dispatch({
            type: order_start,
        });
        try {
            let res = await axios.get(`${SWAGGER_URL}/orders/${order_id}/detail`);
            dispatch({
                type: order_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: order_failed,
            });
        }
    };
};

export const orderByUserId = (user_id) => {
    return async dispatch => {
        dispatch({
            type: order_start,
        });
        try {
            let res = await axios.get(`${SWAGGER_URL}/orders/${user_id}/user`);
            dispatch({
                type: order_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: order_failed,
            });
        }
    };
};

export const findOrder = (search) => {
    return async dispatch => {
        dispatch({
            type: order_start,
        });
        try {
            let res = await axios.post(`${SWAGGER_URL}/orders/find/search`, search);
            dispatch({
                type: order_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: order_failed,
            });
        }
    };
};
