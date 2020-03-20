export const ADD_TECHNOLOGY = 'ADD_TECHNOLOGY';

export function addTechnology(name) {
  return {
    type: ADD_TECHNOLOGY,
    payload: name
  };
}
