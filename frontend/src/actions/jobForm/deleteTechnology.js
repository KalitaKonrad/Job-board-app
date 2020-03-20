export const DELETE_TECHNOLOGY = 'DELETE_TECHNOLOGY';

export function deleteTechnology(name) {
  return {
    type: DELETE_TECHNOLOGY,
    payload: name
  };
}
