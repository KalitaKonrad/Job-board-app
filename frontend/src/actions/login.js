export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_EMPLOYEE = 'SET_EMPLOYEE';
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
