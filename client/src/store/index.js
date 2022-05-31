// src/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const combinedReducer = combineReducers({});
const store = createStore(combinedReducer, enhancer);

export default store;
