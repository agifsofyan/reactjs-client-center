import {
    REVIEW_START,
    REVIEW_SUCCESS,
    REVIEW_BY_USER_PER_PRODUCT,
    REVIEW_FAILED,
} from '../type';

const INITIAL_STATE = {
    reviewPost: [],
    reviewUserProduct: [],
    isLoading: false,
    success: false,
};

export const ReviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REVIEW_START:
            return {
                ...state,
                isLoading: true,
                success: false,
            };
        case REVIEW_SUCCESS:
            return {
                ...state,
                reviewPost: action.payload,
                isLoading: false,
                success: true,
            };
        case REVIEW_BY_USER_PER_PRODUCT:
            return {
                ...state,
                reviewUserProduct: action.payload,
                isLoading: false,
                success: true,
            };
        case REVIEW_FAILED:
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        default: return state;
    };
};
