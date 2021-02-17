import { GET_SELECTED_USER, CHANGE_PRODUCT } from '../type';

export * from './productAction';
export * from './contentAction';
export * from './reviewAction';

export const changeValue = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : CHANGE_PRODUCT,
            payload : {
                key,value
            },
        });
    };
};

export const changeValueUser = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : GET_SELECTED_USER,
            payload : {
                key,value
            },
        });
    };
};
