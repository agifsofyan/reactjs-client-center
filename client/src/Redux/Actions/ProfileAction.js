import axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    profile_start,
    profile_success,
    profile_address_id,
    profile_failed,
} from '../Types';

const token = localStorage.getItem('token');

export const fetchAddress = () => {
    return async dispatch => {
        dispatch({
            type: profile_start,
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
                let res = await axios.get(`${SWAGGER_URL}/users/profile/address`, options);
                dispatch({
                    type: profile_success,
                    payload: res.data.data[0],
                });
                // console.log('ini dari redux', res.data.data[0]);
            }
        } catch {
            dispatch({
                type: profile_failed,
            });
        }
    };
};

export const putAddress = (form) => {
    return async dispatch => {
        dispatch({
            type: profile_start,
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
                Number(form.postal_code);
                let res = await axios.put(`${SWAGGER_URL}/users/profile/address`, form, options);
                dispatch({
                    type: profile_success,
                    payload: res.data.data,
                });
            }
        } catch {
            dispatch({
                type: profile_failed,
            });
        }
    };
};

export const fetchAddressById = (_id) => {
    return async dispatch => {
        dispatch({
            type: profile_start,
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
                let res = await axios.get(`${SWAGGER_URL}/users/profile/address/${_id}`, options);
                dispatch({
                    type: profile_address_id,
                    payload: res.data.data,
                });
                // console.log('from redux', res.data._id, res.data.title);
            }
        } catch {
            dispatch({
                type: profile_failed,
            });
        }
    };
};
