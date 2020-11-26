import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
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
            let res = await axios.get(`${SWAGGER_URL}/products`, headers);
            dispatch({
                type: product_get_success,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: product_get_failed,
            });
        }
    };
};

export const getProductBySlug = (slug) => {
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
            let res = await axios.get(`${SWAGGER_URL}/products/${slug}/detail`, headers);
            dispatch({
                type: product_get_by_id,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: product_get_failed,
            });
        }
    };
};
