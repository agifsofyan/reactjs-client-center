import {
    REVIEW_START,
    REVIEW_SUCCESS,
    REVIEW_FAILED,
} from '../type';

const INITIAL_STATE = {
    reviewPost: [],
    isLoading: false,
};

export const ReviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REVIEW_START:
            return {
                ...state,
                isLoading: true,
            };
        case REVIEW_SUCCESS:
            return {
                ...state,
                reviewPost: action.payload,
                isLoading: false,
            };
        case REVIEW_FAILED:
            return {
                ...state,
                isLoading: false,
            };
        default: return state;
    };
};
