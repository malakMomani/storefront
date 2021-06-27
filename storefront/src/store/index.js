import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './categories.js';
import productsReducer from './products.js';

let reducers = combineReducers({ categoriesReducer, productsReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();