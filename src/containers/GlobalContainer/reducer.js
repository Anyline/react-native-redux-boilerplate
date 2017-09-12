import { fromJS } from 'immutable';

import * as Constants from './constants';

const initialState = fromJS({
  loading: false,
});

export default function startReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_LOADING_STATE:
      return state.set('loading', action.payload);
    default:
      return state;
  }
}
