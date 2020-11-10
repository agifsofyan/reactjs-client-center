import {
    cart_start,
    cart_success,
    cart_added,
    cart_failed,
} from '../Types';

const INITIAL_STATE = {
    cartList: [],
    success: false,
    loading: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cart_start:
            return {
                ...state,
                loading: true,
            };
        case cart_success:
            return {
                ...state,
                cartList: action.payload,
                success: true,
                loading: false,
            };
        case cart_added:
            return {
                ...state,
                cartList: action.payload,
                success: true,
                loading: false,
            };
        case cart_failed:
            return {
                ...state,
                success: true,
                loading: false,
            };
        default: return state;
    };
};
