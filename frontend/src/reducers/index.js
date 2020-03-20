import offerReducer from './offerReducer';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';
import postJobReducer from './postJobReducer';

const allReducers = combineReducers({ offers: offerReducer, isLogged: loggedReducer, postJobForm: postJobReducer });

export default allReducers;
