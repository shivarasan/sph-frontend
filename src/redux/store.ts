import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk'; // Import Middleware
import rootReducer from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// User can add multiple middleware
const middleware = [reduxThunk];

const store = createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
