import * as Constants from './constants';

export function editEmail(payload) {
  return {
    type: Constants.CHANGE_EMAIL_TEXT,
    payload,
  };
}

export function setUserNotFirstUsage() {
  return {
    type: Constants.FIRST_TIME_STARTING_APP,
  };
}
