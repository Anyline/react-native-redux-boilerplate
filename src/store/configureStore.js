import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './combineReducers';

const middlewares = [];
if (__DEV__ === true) { // eslint-disable-line
  middlewares.push(logger);
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
