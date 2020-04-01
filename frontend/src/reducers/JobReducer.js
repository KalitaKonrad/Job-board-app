import {
  FETCH_JOBS_PENDING,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  CLEAR_JOBS,
  UPDATE_KEYWORDS,
  UPDATE_LOCATION
} from '../actions/fetchJobs';

export const LIMIT_ITEMS_COUNT_FETCH = 20;

const initialState = {
  pending: false,
  jobs: [],
  hasMoreItems: true,
  page: 0,
  error: null,
  keywords: '',
  location: ''
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      let isThereMoreJobs = true;
      if (action.payload.length === 0) {
        isThereMoreJobs = false;
      }
      return {
        ...state,
        page: state.page + 1,
        pending: false,
        hasMoreItems: isThereMoreJobs,
        jobs: state.jobs.concat(action.payload)
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case FETCH_JOBS_PENDING:
      return {
        ...state,
        pending: true
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
        page: 0,
        keywords: '',
        location: ''
      };
    case UPDATE_KEYWORDS:
      return {
        ...state,
        keywords: action.payload
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};

export default jobReducer;
