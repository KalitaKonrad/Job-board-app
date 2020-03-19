export const ADD_TECHNOLOGY = 'ADD_TECHNOLOGY';

export function addTechnology(technologyName) {
  return {
    type: ADD_TECHNOLOGY,
    payload: technologyName
  }
}