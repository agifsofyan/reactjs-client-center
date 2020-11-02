import { combineReducers } from 'redux';
import { productReducer } from './ProductReducer';
import { userReducer } from './UserReducer';

export default combineReducers({
    product: productReducer,
    user: userReducer,
});
