import {
    GET_SELECTED_USER,
    USER_START,
    USER_ME,
    USER_LOGOUT,
    USER_FAILED,
    GET_STORIES,
    GET_SETTING,
    GET_LMS,
    SET_LOADING
} from '../type'

const INITIAL_STATE = {
    user: null,
    userMe: [],
    top: 0,
    loading: false,
    userLMS : null,
    stories : null,
    settingData : null,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
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
        case USER_LOGOUT:
            return INITIAL_STATE;
        case USER_FAILED:
            return {
                ...state,
                loading: false,
            };
        case GET_STORIES:
            return {
                ...state,
                stories :  action.payload
            }
        case GET_SETTING:
            return {
                ...state,
                settingData : action.payload
            }
        case GET_LMS:
            return {
                ...state,
                userLMS : action.payload
            }
        case SET_LOADING:
            console.log("HERE MASUK 888")
            return {
                ...state,
                loading : action.payload
            }
        default: return state;
    };
};