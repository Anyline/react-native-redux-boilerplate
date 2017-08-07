import { combineReducers } from 'redux';
import startScreenReducer from '../containers/StartScreen/reducer';
import nav from './../routes';

const rootReducer = combineReducers({
  startScreenReducer,
  nav,
});
export default rootReducer;
