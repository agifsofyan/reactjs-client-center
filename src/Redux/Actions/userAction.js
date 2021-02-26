import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    USER_START,
    USER_ME,
    USER_LOGOUT,
    USER_FAILED,
} from '../type';

const token = localStorage.getItem('token');

export const getUserWhoAmI = () => {
    return async dispatch => {
        dispatch({
            type: USER_START,
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
                let res = await Axios.get(`${SWAGGER_URL}/users/me`, options);
                dispatch({
                    type: USER_ME,
                    payload: res.data.data.user,
                });
            }
        } catch {
            dispatch({
                type: USER_FAILED,
            });
        }
    };
};

export const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: USER_LOGOUT,
        });
    };
};
