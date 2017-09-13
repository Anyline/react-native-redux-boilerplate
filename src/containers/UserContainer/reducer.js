import {fromJS} from 'immutable';

import * as Constants from './constants';

const initialState = fromJS({
  firstTimeStartingApp: true,
});

export default function startReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.FIRST_TIME_STARTING_APP:
      return state.set('firstTimeStartingApp', false);
    default:
      return state;
  }
}
