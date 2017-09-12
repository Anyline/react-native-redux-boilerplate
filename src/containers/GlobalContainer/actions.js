import * as Constants from './constants';

export function setLoading(payload) {
  return {
    type: Constants.SET_LOADING_STATE,
    payload,
  };
}
