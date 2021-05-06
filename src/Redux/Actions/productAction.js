import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import { PRODUCT_BY_ID, PRODUCT_FAILED, PRODUCT_START, PRODUCT_LIST } from '../type';

export const getProductList = () => {
    return async dispatch => {
        console.log('RUN NING HERE <<> >>> >>')
        dispatch({
            type: PRODUCT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/products`);
            console.log(res , ' <<<<< &&&&* 555 %%%%%%% value produK')
            dispatch({
                type: PRODUCT_LIST,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: PRODUCT_FAILED,
            });
        }
    };
};

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
    };
};
