// TYPE
import { CHANGE_PRODUCT , GET_SELECTED_USER } from '../type'

export const changeValue = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : CHANGE_PRODUCT,
            payload : {
                key,value
            }
        })
    }
}

export const changeValueUser = (key,value) => {
    return (dispatch) => {
        dispatch({
            type : GET_SELECTED_USER,
            payload : {
                key,value
            }
        })
    }
}