import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import {productReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const root = combineReducers({
  productReducer, 
  cartReducer
})

export default createStore(root, applyMiddleware(promise));