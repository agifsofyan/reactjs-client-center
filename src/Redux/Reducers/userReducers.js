import { GET_SELECTED_USER  } from '../type'

const INTITAL_STATE = {
    user : null,
    top : 0
}

export const UserReducer = (state = INTITAL_STATE,action) => {
    switch (action.type) {
        case GET_SELECTED_USER:
            return {...state,[action.payload.key] : action.payload.value}
        default: return state;
    };
};