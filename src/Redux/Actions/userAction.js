import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    USER_START,
    USER_ME,
    USER_LOGOUT,
    USER_FAILED,
    GET_STORIES,
    GET_SETTING,
    ORDER_LOGOUT,
    GET_LMS
} from '../type';


export const getUserStory = () => {
    const token = localStorage.getItem('token');
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
            console.log(data.data , ' <<< VALUE CONTENT USER PRODUCTS')
            dispatch({
                type : GET_STORIES,
                payload : data.data
            })
            console.log(data , ' succes get product >>')
        })
        .catch(err=>{
            console.log(err.response , ' <<<< VALUE ERROR >>>')
        })
    } 
}

export const getUserLMS = (params) => {
    const { trending, favorite} = params
    const example = `trending=${trending}&favorite=${favorite}&as_user=false&done=false&offset=1&limit=20&sortby=created_at&sortval=desc&as_user=true`
    return (dispatch) => {
        Axios({
            method : 'GET',
            // url : `${SWAGGER_URL}/contents`,
            url : `${SWAGGER_URL}/userproducts?trending=${trending}&favorite=${favorite}&as_user=false&done=false&offset=1&limit=20&sortby=created_at&sortval=desc`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).
        then(({data})=>{
            dispatch({
                type : GET_LMS,
                payload : data.data
            })
            console.log(data.data , ' <<< VALUE DATA USER LMS &&*&*&*((((()))_----000')
        })
        .catch(err=>{
            console.log(err.response , ' <<<< ERROR RESPONS ><><><>><><')
        })
    }
}

export const getUserWhoAmI = () => {
    console.log('GET USER WHO AM I RUN HERE <<<<<< ((())) _---- ')
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    return (dispatch) => {
        localStorage.removeItem('token');
        console.log('FUNCTION USER LOG OUT &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        dispatch({
            type: USER_LOGOUT,
        });
        dispatch({
            type : ORDER_LOGOUT
        })
    };
};

export const setDataSetting = (data) => {
    const token = localStorage.getItem('token');
    return (dispatch) => {
        Axios({
            method : 'GET',
            url : `${SWAGGER_URL}/general-settings`,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(({data})=>{
            console.log(data.data , ' <<<< DATA SETTING HERE ')
            dispatch({
                type : GET_SETTING,
                payload : data.data
            })
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    }
}