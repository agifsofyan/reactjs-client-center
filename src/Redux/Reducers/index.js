import { combineReducers } from 'redux';
import { UserReducer } from './userReducers';
import { ProductReducer } from './productReducer';
import { ContentReducer } from './contentReducer';
import { ReviewReducer } from './reviewReducer';
import { OrderReducer } from './orderReducer';
import { storyReducer } from './storyReducer'

export default combineReducers({
    user: UserReducer,
    product: ProductReducer,
    content: ContentReducer,
    review: ReviewReducer,
    order: OrderReducer,
    story : storyReducer
});
