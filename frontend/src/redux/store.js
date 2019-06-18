import { createStore, compose } from 'redux';
import userReducer from './reducers/user'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(userReducer,composeEnhancers());

export default store;