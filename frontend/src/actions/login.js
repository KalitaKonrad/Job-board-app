export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_DEVELOPER = 'SET_DEVELOPER';
export const SET_EMPLOYER = 'SET_EMPLOYER';

export function loginOrLogout(action_type) {
  return {
    type: action_type
  };
}

export function setUsertype(action_type) {
  return {
    type: action_type
  };
}
