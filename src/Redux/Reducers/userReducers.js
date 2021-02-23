import {
    GET_SELECTED_USER,
    USER_START,
    USER_ME,
    USER_FAILED,
} from '../type'

const INTITAL_STATE = {
    user: null,
    userMe: [],
    top: 0,
    loading: false,
};

export const UserReducer = (state = INTITAL_STATE,action) => {
    switch (action.type) {
        case GET_SELECTED_USER:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        case USER_START:
            return {
                ...state,
                loading: true,
            };
        case USER_ME:
            return {
                ...state,
                userMe: action.payload,
                loading: false,
            };
        case USER_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};