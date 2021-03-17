import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    USER_START,
    USER_ME,
    USER_LOGOUT,
    USER_FAILED,
    GET_PRODUCT
} from '../type';

const token = localStorage.getItem('token');

export const getUserProduct = () => {
    return (dispatch) => {
        Axios({
            method : "GET",
            url : `${SWAGGER_URL}/userproducts?placement=stories&as_user=true`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(({data})=>{
            dispatch({
                type : GET_PRODUCT,
                payload : data.data
            })
            console.log(data , ' succes get product >>')
        })
        .catch(err=>{
            console.log(err.response , ' <<<< VALUE ERROR >>>')
        })
    } 
}

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
                console.log(res , ' <<<< RES')
                let result = {...res.data.data.user,...res.data.data}
                console.log(result , ' RESULT >>>>')
                dispatch({
                    type: USER_ME,
                    payload: result,
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