import axios from 'axios';
// import { API_URL } from '../../Support/API_URL';
import {
    product_get_start,
    product_get_success,
    product_get_failed,
} from '../Types';

export const getProducts = () => {
    return async dispatch => {
        dispatch({
            type: product_get_start,
        });
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                },
            };
            let res = await axios.get(`http://localhost:2000/products`, headers);
            console.log(res.data);
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
