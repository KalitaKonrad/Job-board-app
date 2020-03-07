import offerReducer from './offerReducer';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ offer: offerReducer, isLogged: loggedReducer });

export default allReducers;
