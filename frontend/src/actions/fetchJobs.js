import axios from '../api/api_config';
import { JOBS_ENDPOINT } from '../api/endpoints';
import { LIMIT_ITEMS_COUNT_FETCH } from '../reducers/jobReducer';

export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';
export const FETCH_JOBS_PENDING = 'FETCH_JOBS_PENDING';
export const CLEAR_JOBS = 'CLEAR_JOBS';
export const UPDATE_KEYWORDS = 'UPDATE_KEYWORDS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const fetchJobs = (page = 0, keywords = '', location = '') => {
  return dispatch => {
    const request = axios.get(`${JOBS_ENDPOINT}`, {
      params: {
        page: page,
        limit: LIMIT_ITEMS_COUNT_FETCH,
        keywords: keywords,
        location: location
      }
    });
    dispatch(fetchJobsPending());
    return request
      .then(res => {
        dispatch(fetchJobsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchJobsError(err));
      });
  };
};

export function fetchJobsSuccess(Jobs) {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: Jobs
  };
}

export function fetchJobsError(error) {
  return {
    type: FETCH_JOBS_ERROR,
    payload: error
  };
}

export function fetchJobsPending() {
  return {
    type: FETCH_JOBS_PENDING
  };
}

export function clearJobs() {
  return {
    type: CLEAR_JOBS
  };
}

export function updateKeywords(keywords) {
  return {
    type: UPDATE_KEYWORDS,
    payload: keywords
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
}
