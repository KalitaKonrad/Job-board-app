export const SELECT_TECHNOLOGY = 'SELECT_TECHNOLOGY';

export function selectTechnology(name) {
  return {
    type: SELECT_TECHNOLOGY,
    payload: name
  };
}
