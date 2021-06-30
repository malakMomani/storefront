import { createStore, combineReducers, applyMiddleware } from "redux";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './simple-cart'
import thunk from './middleware/thunk';

let reducers = combineReducers({ categoriesReducer,  productsReducer, cartReducer});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
}

export default store();