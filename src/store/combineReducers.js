import { combineReducers } from 'redux';

import user from '../containers/UserContainer/reducer';
import global from '../containers/GlobalContainer/reducer';
import nav from '../navigator/routeReducer';

const rootReducer = combineReducers({
  nav,
  global,
  user,
});

export default rootReducer;
