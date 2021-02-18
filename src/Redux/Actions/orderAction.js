import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    ORDER_START,
    ORDER_PAID_LIST,
    ORDER_FAILED,
} from '../type';

const token = localStorage.getItem('token');

export const getPaidList = () => {
    return async dispatch => {
        dispatch({
            type: ORDER_START,
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
                let res = await Axios.get(`${SWAGGER_URL}/orders/self?status=PAID`, options);
                dispatch({
                    type: ORDER_PAID_LIST,
                    payload: res.data.data,
                });
            }
        } catch {
            dispatch({
                type: ORDER_FAILED,
            });
        }
    };
};
