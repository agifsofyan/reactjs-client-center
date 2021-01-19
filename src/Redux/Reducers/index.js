import { combineReducers } from 'redux';

import product from './productReducer'
import user from './userRecuers'

export default combineReducers({
    product,
    user
})