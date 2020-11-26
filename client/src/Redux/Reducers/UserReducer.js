import {
    user_start,
    user_register,
    user_login,
    user_keep_login,
    user_change_pass,
    user_logout,
    user_failed,
} from '../Types';

const INITIAL_STATE = {
    userRegister: [],
    userLogin: [],
    userData: [],
    passData: [],
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
        case user_keep_login:
            return {
                ...state,
                userData: action.payload,
                loggedIn: true,
                loading: false,
            };
        case user_change_pass:
            return {
                ...state,
                passData: action.payload,
                loggedIn: true,
                loading: false,
            };
        case user_logout: 
            return INITIAL_STATE;
        case user_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
