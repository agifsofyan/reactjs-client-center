import {
    ORDER_START,
    ORDER_PAID_LIST,
    ORDER_FAILED,
    ORDER_LOGOUT
} from '../type';

const INITIAL_STATE = {
    paidList: [],
    paidById: {},
    loading: false,
};

export const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case ORDER_PAID_LIST:
            return {
                ...state,
                paidList: action.payload,
                loading: false,
            };
        case ORDER_FAILED:
            return {
                ...state,
                loading: false,
            };
        case ORDER_LOGOUT:
            return INITIAL_STATE
        default: return state;
    };
};
