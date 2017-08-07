import { AppNavigator } from './navigator';
import * as Constants from './navigator/constants';

const Screen = AppNavigator.router.getActionForPathAndParams('StartScreen');
const ScreenState = AppNavigator.router.getStateForAction(Screen);

const initialNavState = AppNavigator.router.getStateForAction(
  ScreenState,
);

const nav = (state = initialNavState, action) => {
  let nextState;

  switch (action.type) {
    case Constants.NAVIGATION: //eslint-disable-line
      const ScreenNav = AppNavigator.router.getActionForPathAndParams(action.payload);
      const ScreenStateNav = AppNavigator.router.getStateForAction(ScreenNav);
      nextState = ScreenStateNav;
      break;
    case Constants.BACK_BUTTON:
      nextState = AppNavigator.router.getStateForAction(action.payload);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav;
