import { combineReducers } from 'redux';
import loggedReducer from './loggedReducer';
import jobReducer from './jobReducer';
import jobFormReducer from './jobFormReducer';

const allReducers = combineReducers({ jobs: jobReducer, isLogged: loggedReducer, jobForm: jobFormReducer });

export default allReducers;
