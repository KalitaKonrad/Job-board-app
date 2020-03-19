export const SELECT_TECHNOLOGY = 'SELECT_TECHNOLOGY';

export function selectTechnology(selectedTechnology) {
  return {
    type: SELECT_TECHNOLOGY,
    payload: selectedTechnology
  }
}