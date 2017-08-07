import {
  TEST_CONSTANT,
} from './constants';

const initialState = {
  persons: [{
    name: 'Chris',
  }],
};

export default function startReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_CONSTANT:
      return {
        people: action.person,
      };
    default:
      return state;
  }
}
