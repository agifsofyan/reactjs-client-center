import {
    cart_start,
    cart_success,
    cart_added,
    cart_failed,
} from '../Types';

const INITIAL_STATE = {
    cartList: [],
    cartAdded: [],
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
                loading: false,
            };
        case cart_added:
            return {
                ...state,
                cartAdded: action.payload,
                loading: false,
            };
        case cart_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
