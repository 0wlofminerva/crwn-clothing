import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.rerducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});