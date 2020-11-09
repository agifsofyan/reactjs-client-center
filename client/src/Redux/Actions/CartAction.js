import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    cart_start,
    cart_success,
    cart_added,
    cart_failed,
} from '../Types';

export const getCart = () => {
    return async dispatch => {
        dispatch({
            type: cart_start,
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
                let res = await axios.get(`${SWAGGER_URL}/carts/list`, options);
                dispatch({
                    type: cart_success,
                    payload: res.data,
                });
                console.log(res.data);
            }
        } catch {
            dispatch({
                type: cart_failed,
            });
        }
    };
};
