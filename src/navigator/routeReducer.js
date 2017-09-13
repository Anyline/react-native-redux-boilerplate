import { NavigationActions } from 'react-navigation';

import { AppNavigator } from './index';

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
