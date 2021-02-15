import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    REVIEW_START,
    REVIEW_SUCCESS,
    REVIEW_FAILED,
} from '../type';

const token = localStorage.getItem('token');

export const postReviewCourse = (form) => {
    return async dispatch => {
        dispatch({
            type: REVIEW_START,
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
                let res = await Axios.post(`${SWAGGER_URL}/review`, form, options);
                dispatch({
                    type: REVIEW_SUCCESS,
                    payload: res.data.data,
                });
            }
        } catch {
            dispatch({
                type: REVIEW_FAILED,
            });
        }
    }
};
