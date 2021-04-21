import { SET_VALUE_STORY } from '../type'

export const setValueStory = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : SET_VALUE_STORY,
            payload : {
                key,value
            }
        })
    }
}