// TYPE
import { CHANGE_PRODUCT } from '../type'

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

export const searchProduct = (str) => {
    return (dispatch) => {
        
    }
}