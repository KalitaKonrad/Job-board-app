import { LOGIN, LOGOUT, SET_EMPLOYEE, SET_EMPLOYER } from '../actions/login';

const initialState = {
  isLogged: false,
  usertype: ''
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false
      };
    case SET_EMPLOYEE:
      return {
        ...state,
        usertype: 'EMPLOYEE'
      };
    case SET_EMPLOYER:
      return {
        ...state,
        usertype: 'EMPLOYER'
      };
    default:
      return state;
  }
};

export default loggedReducer;
