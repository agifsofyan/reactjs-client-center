import {
    order_start,
    order_success,
    order_post,
    order_failed,
} from '../Types';

const INITIAL_STATE = {
    orderList: [],
    success: false,
    loading: false,
};

export const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case order_start:
            return {
                ...state,
                loading: true,
            };
        case order_success:
            return {
                ...state,
                orderList: action.payload,
                success: true,
                loading: false,
            };
        case order_post:
            return {
                ...state,
                orderList: action.payload,
                success: true,
                loading: false,
            };
        case order_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
