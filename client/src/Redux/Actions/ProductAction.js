import axios from 'axios';
import { JSON_URL } from '../../Support/API_URL';
import {
    product_get_start,
    product_get_success,
    product_get_by_id,
    product_get_failed,
} from '../Types';

export const getProducts = () => {
    return async dispatch => {
        dispatch({
            type: product_get_start,
        });
        try {
            let headers = {
                headers : {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                },
            };
            let res = await axios.get(`${JSON_URL}/products`, headers);
            dispatch({
                type: product_get_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: product_get_failed,
            });
        }
    };
};

export const getProductById = (id) => {
    return async dispatch => {
        dispatch({
            type: product_get_start,
        });
        try {
            let headers = {
                headers : {
                    'Content-type': 'application/json',
                    'accept': 'application/json',
                },
            };
            let res = await axios.get(`${JSON_URL}/products/${id}`, headers);
            dispatch({
                type: product_get_by_id,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: product_get_failed,
            });
        }
    };
};
