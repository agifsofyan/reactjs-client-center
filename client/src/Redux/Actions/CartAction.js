import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    cart_start,
    cart_success,
    cart_added,
    cart_failed,
} from '../Types';

const token = localStorage.getItem('token');

export const getCart = () => {
    return async dispatch => {
        dispatch({
            type: cart_start,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await axios.get(`${SWAGGER_URL}/carts/list`, options);
                dispatch({
                    type: cart_success,
                    payload: res.data.data.items,
                });
                // console.log('redux getCart', res.data.data.items);
            }
        } catch {
            dispatch({
                type: cart_failed,
            });
        }
    };
};

export const addToCart = (product_id) => {
    return async dispatch => {
        dispatch({
            type: cart_start,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                console.log('sblm axios');
                let res = await axios.post(`${SWAGGER_URL}/carts/add`, product_id, options);
                console.log('stlh axios');
                dispatch({
                    type: cart_added,
                    payload: res.data.data.items,
                });
            }
        } catch {
            dispatch({
                type: cart_failed,
            });
        }
    };
};

export const removeCart = (product_id) => {
    return async dispatch => {
        dispatch({
            type: cart_start,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                console.log('sblm axios remove');
                console.log(product_id);
                let res = await axios.delete(`${SWAGGER_URL}/carts/remove?product_id=${product_id}`, options);
                console.log('stlh axios remove');
                dispatch({
                    type: cart_success,
                    payload: res.data.data.items,
                });
                console.log('stlh dispatch SUKSES');
            }
        } catch {
            dispatch({
                type: cart_failed,
            });
            console.log('stlh dispatch FAILED');
        }
    };
};
