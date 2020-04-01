export const SELECT_SKILL = 'SELECT_SKILL';

export function selectSkill(name) {
  return {
    type: SELECT_SKILL,
    payload: name
  };
}
