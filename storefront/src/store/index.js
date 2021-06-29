import { createStore, combineReducers } from "redux";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './simple-cart'
import {composeWithDevTools} from 'redux-devtools-extension';


let reducers = combineReducers({ categoriesReducer,  productsReducer, cartReducer});

const store = () => {
  return createStore(reducers, composeWithDevTools);
}

export default store();