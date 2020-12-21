import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    content_start,
    content_success,
    content_failed,
} from '../Types';

const token = localStorage.getItem('token');

export const getContent = () => {
    return async dispatch => {
        dispatch({
            type: content_start,
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
                let res = await Axios.get(`${SWAGGER_URL}/contents`, options);
                dispatch({
                    type: content_success,
                    payload: res.data.data,
                });
            }
        } catch (err) {
            dispatch({
                type: content_failed,
            });
        }
    };
};
