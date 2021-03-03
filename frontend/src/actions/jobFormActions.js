export const RESET_FORM = "RESET_FORM";
export const NEXT_STEP = "NEXT_STEP";
export const PREV_STEP = "PREV_STEP";
export const ADD_SKILL = "ADD_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";
export const UPDATE_FIELDS = "UPDATE_FIELDS";
export const POST_JOB_PENDING = "POST_JOB_PENDING";
export const POST_JOB_SUCCESS = "POST_JOB_SUCCESS";
export const POST_JOB_ERROR = "POST_JOB_ERROR";

export function updateFields(payload) {
  return {
    type: UPDATE_FIELDS,
    payload,
  };
}

export function addSkill(payload) {
  return {
    type: ADD_SKILL,
    payload,
  };
}

export function deleteSkill(payload) {
  return {
    type: DELETE_SKILL,
    payload,
  };
}
