import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    content_start,
    content_success,
    content_failed,
} from '../Types';

export const getContent = () => {
    return async dispatch => {
        dispatch({
            type: content_start,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/contents`);
            dispatch({
                type: content_success,
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: content_failed,
            });
        }
    };
};
