export const DELETE_SKILL = 'DELETE_SKILL';

export function deleteSkill(name) {
  return {
    type: DELETE_SKILL,
    payload: name
  };
}
