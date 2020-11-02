import {
    user_start,
    user_register,
    user_login,
    user_failed,
} from '../Types';

const INITIAL_STATE = {
    userRegister: [],
    userLogin: [],
    loggedIn: false,
    loading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case user_start:
            return {
                ...state,
                loading: true,
            };
        case user_register:
            return {
                ...state,
                userRegister: action.payload,
                loggedIn: true,
                loading: false,
            };
        case user_login:
            return {
                ...state,
                userLogin: action.payload,
                loggedIn: true,
                loading: false,
            };
        case user_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
