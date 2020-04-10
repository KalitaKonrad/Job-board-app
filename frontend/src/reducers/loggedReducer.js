import { LOGIN, LOGOUT, SET_EMPLOYEE, SET_EMPLOYER, SET_TOKEN } from '../actions/login';
import axios from '../api/api_config';

const initialState = {
  isLogged: false,
  usertype: '',
  token: '',
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    case SET_EMPLOYEE:
      return {
        ...state,
        usertype: 'EMPLOYEE',
      };
    case SET_EMPLOYER:
      return {
        ...state,
        usertype: 'EMPLOYER',
      };
    case SET_TOKEN:
      axios.defaults.headers.common['Authorization'] = action.payload;
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default loggedReducer;
