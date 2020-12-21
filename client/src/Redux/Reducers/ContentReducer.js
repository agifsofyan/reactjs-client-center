import {
    content_start,
    content_success,
    content_failed,
} from '../Types';

const INITIAL_STATE = {
    contentList: [],
    loading: false,
};

export const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case content_start:
            return {
                ...state,
                loading: true,
            };
        case content_success:
            return {
                ...state,
                contentList: action.payload,
                loading: false,
            };
        case content_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
