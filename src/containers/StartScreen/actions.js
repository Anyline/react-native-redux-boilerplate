import { TEST_CONSTANT } from './constants';

export function addPerson(person) {
  return {
    type: TEST_CONSTANT,
    person,
  };
}

export function addAnotherPerson(person) {
  return {
    type: TEST_CONSTANT,
    person,
  };
}
