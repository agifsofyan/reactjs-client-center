import {
    CONTENT_START,
    CONTENT_SUCCESS,
    CONTENT_BY_ID,
    CONTENT_FAILED,
} from '../type';

const INITIAL_STATE = {
    videoList: [],
    videoById: [],
    loading: false,
};

export const ContentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTENT_START:
            return {
                ...state,
                loading: true,
            };
        case CONTENT_SUCCESS:
            return {
                ...state,
                videoList: action.payload,
                loading: false,
            };
        case CONTENT_BY_ID:
            return {
                ...state,
                videoById: action.payload,
                loading: false,
            };
        case CONTENT_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
