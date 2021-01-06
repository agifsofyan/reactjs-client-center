import { CHANGE_PRODUCT } from '../type'

const INTITAL_STATE = {
    productList : null,
    topicList : null,
    productFilter : null,
    isLoading : false,
}

let stateGlobal = (state =  INTITAL_STATE , action) => {
    switch (action.type) {
        // case FETCH_PRODUCT:
        //     return {...state,productList : action.payload.data , isLoading : false}
        // case SET_LOADING:
        //     return {...state, isLoading : true}
        case CHANGE_PRODUCT:
            return {...state,[action.payload.key] : action.payload.value}
        default:
            return state
    }
}


export default stateGlobal;