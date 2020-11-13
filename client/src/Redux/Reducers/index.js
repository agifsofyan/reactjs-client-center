import { combineReducers } from 'redux';
import { productReducer } from './ProductReducer';
import { userReducer } from './UserReducer';
import { cartReducer } from './CartReducer';
import { orderReducer } from './OrderReducer';

export default combineReducers({
    product : productReducer,
    user : userReducer,
    cart : cartReducer,
    order : orderReducer,
});
