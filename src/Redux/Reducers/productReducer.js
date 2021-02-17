import { CHANGE_PRODUCT, PRODUCT_BY_ID, PRODUCT_FAILED, PRODUCT_START, PRODUCT_LIST } from '../type';

const INTITAL_STATE = {
    products: [],
    productById: [],
    productList : null,
    topicList : null,
    productFilter : null,
    isLoading : false,
}

export const ProductReducer = (state =  INTITAL_STATE , action) => {
    switch (action.type) {
        // case FETCH_PRODUCT:
        //     return {...state,productList : action.payload.data , isLoading : false}
        // case SET_LOADING:
        //     return {...state, isLoading : true}
        case CHANGE_PRODUCT:
            return {...state,[action.payload.key] : action.payload.value};
        case PRODUCT_START:
            return {
                ...state,
                isLoading: true,
            }
        case PRODUCT_LIST:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
            }
        case PRODUCT_BY_ID:
            return {
                ...state,
                productById: action.payload,
                isLoading: false,
            }
        case PRODUCT_FAILED:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    };
};
