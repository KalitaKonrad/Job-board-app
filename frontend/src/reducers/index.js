import offerReducer from './offerReducer';
import loggedReducer from './loggedReducer';
import { combineReducers } from 'redux';
import JobReducer from './JobReducer';

const allReducers = combineReducers({ offers: offerReducer, isLogged: loggedReducer, JobForm: JobReducer });

export default allReducers;
