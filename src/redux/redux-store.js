import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import teddyReducer from "./teddy-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  teddy: teddyReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;