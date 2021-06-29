import { createStore, combineReducers, applyMiddleware } from "redux";
import categoriesReducer from './categories';
import productsReducer from './products';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let reducers = combineReducers({ categoriesReducer,  productsReducer});

const store = () => {
  return createStore(reducers, composeWithDevTools);
}

export default store();