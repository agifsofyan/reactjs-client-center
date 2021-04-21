import { SET_VALUE_STORY } from '../type'

const INITIAL_STATE = {
    isActive : false,
    selectedData : null,
    pause : false,
    time : 0
}


export const storyReducer = (state= INITIAL_STATE,action) => {
    switch (action.type) {
        case SET_VALUE_STORY: 
            return {
                    ...state,
                    [action.payload.key]: action.payload.value
                }
        default:
            return state
    }
}