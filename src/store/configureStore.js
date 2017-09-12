import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from './combineReducers';

const middlewares = [];
if (__DEV__ === true) { // eslint-disable-line
  middlewares.push(logger);
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(),
);


export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  persistStore(store, { storage: AsyncStorage, blacklist: ['nav', 'global'], transforms: [immutableTransform()] });
  return store;
}
