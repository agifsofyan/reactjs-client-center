import {
    CONTENT_START,
    CONTENT_VIDEO_LIST,
    CONTENT_VIDEO_BY_ID,
    CONTENT_BLOG_LIST,
    CONTENT_BLOG_BY_ID,
    CONTENT_FAILED,
} from '../type';

const INITIAL_STATE = {
    videoList: [],
    videoById: [],
    blogList: [],
    blogById: [],
    loading: false,
};

export const ContentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTENT_START:
            return {
                ...state,
                loading: true,
            };
        case CONTENT_VIDEO_LIST:
            return {
                ...state,
                videoList: action.payload,
                loading: false,
            };
        case CONTENT_VIDEO_BY_ID:
            return {
                ...state,
                videoById: action.payload,
                loading: false,
            };
        case CONTENT_BLOG_LIST:
            return {
                ...state,
                blogList: action.payload,
                loading: false,
            };
        case CONTENT_BLOG_BY_ID:
            return {
                ...state,
                blogById: action.payload,
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
