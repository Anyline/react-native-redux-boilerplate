import * as Constants from './constants';

export function setUserNotFirstUsage() {
  return {
    type: Constants.FIRST_TIME_STARTING_APP,
  };
}
