import {
    payment_start,
    payment_success,
    payment_failed,
} from '../Types';

const INITIAL_STATE = {
    methodList: [],
    loading: false,
};

export const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case payment_start:
            return {
                ...state,
                loading: true,
            };
        case payment_success:
            return {
                ...state,
                methodList: action.payload,
                loading: false,
            };
        case payment_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
