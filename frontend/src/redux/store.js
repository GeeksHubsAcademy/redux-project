import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import {save, load} from 'redux-localstorage-simple';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(), // Saving done here
  )(createStore);
  const store = createStoreWithMiddleware(
    reducers,
    load({ preloadedState:{} }), // Loading done here
    composeEnhancers(),
  );
export default store;