import {
    product_get_start,
    product_get_success,
    product_get_by_id,
    product_get_failed,
} from '../Types';

const INITIAL_STATE = {
    productList: [],
    productListById: [],
    loading: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case product_get_start:
            return {
                ...state,
                loading: true,
            };
        case product_get_success:
            return {
                ...state,
                productList: action.payload,
                loading: false,
            };
        case product_get_by_id:
            return {
                ...state,
                productListById: action.payload,
                loading: false,
            };
        case product_get_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
