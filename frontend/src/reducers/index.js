import offerReducer from './offerReducer';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';
import postJobReducers from './postJobReducer';

const allReducers = combineReducers({ offers: offerReducer, isLogged: loggedReducer, postJobForm: postJobReducers });

export default allReducers;
