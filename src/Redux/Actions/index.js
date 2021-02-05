
import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    CONTENT_START,
    CONTENT_SUCCESS,
    CONTENT_BY_ID,
    CONTENT_FAILED,
    GET_SELECTED_USER,
    CHANGE_PRODUCT, PRODUCT_BY_ID, PRODUCT_FAILED, PRODUCT_START, PRODUCT_LIST
} from '../type';
// TYPE
// import { CHANGE_PRODUCT , GET_SELECTED_USER } from '../type'

export const changeValue = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : CHANGE_PRODUCT,
            payload : {
                key,value
            }
        })
    }
}

export const changeValueUser = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : GET_SELECTED_USER,
            payload : {
                key,value
            }
        })
    }
}

export const getVideo = () => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/uploads/media/list?fields=filetype&value=video`);
            dispatch({
                type: CONTENT_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};

export const getVideoById = (id) => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/uploads/media/list?fields=filetype&value=video&optFields=_id&optVal=${id}`);
            dispatch({
                type: CONTENT_BY_ID,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};


export const getProductList = () => {
    return async dispatch => {
        dispatch({
            type: PRODUCT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/products`);
            dispatch({
                type: PRODUCT_LIST,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: PRODUCT_FAILED,
            });
        }
    }
}

export const getProductById = (id) => {
    return async dispatch => {
        dispatch({
            type: PRODUCT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/products/${id}`);
            dispatch({
                type: PRODUCT_BY_ID,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: PRODUCT_FAILED,
            });
        }
    }
}
