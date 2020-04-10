import { INTERN, JUNIOR, MID, SENIOR } from '../actions/jobForm/changeExpLevel';
import { ADD_SKILL } from '../actions/jobForm/addSkill';
import { DELETE_SKILL } from '../actions/jobForm/deleteSkill';
import { NEXT_STEP, PREV_STEP } from '../actions/jobForm/changeStep';
import { RESET_FORM } from '../actions/jobForm/resetForm';
import {
  POSITION,
  DESCRIPTION,
  MINIMUM_SALARY,
  MAXIMUM_SALARY,
  CITY,
  COUNTRY,
  LOCATION_STATE,
  STREET,
  ZIP,
} from '../actions/jobForm/formFields';

const initialState = {
  experienceLevel: 'INTERN',
  skills: [],
  errors: {},
  step: 1,
  position: '',
  description: '',
  minimumSalary: 0,
  maximumSalary: 0,
  city: '',
  country: '',
  locationState: '',
  street: '',
  zip: '',
};

const jobFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTERN:
      return {
        ...state,
        experienceLevel: 'INTERN',
      };
    case JUNIOR:
      return {
        ...state,
        experienceLevel: 'JUNIOR',
      };
    case MID:
      return {
        ...state,
        experienceLevel: 'MID',
      };
    case SENIOR:
      return {
        ...state,
        experienceLevel: 'SENIOR',
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case DELETE_SKILL:
      return {
        ...state,
        skills: [...state.skills.filter((s) => s !== action.payload)],
      };
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case RESET_FORM:
      return {
        initialState,
      };
    case POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case MINIMUM_SALARY:
      return {
        ...state,
        minimumSalary: action.payload,
      };
    case MAXIMUM_SALARY:
      return {
        ...state,
        maximumSalary: action.payload,
      };
    case CITY:
      return {
        ...state,
        city: action.payload,
      };
    case COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case LOCATION_STATE:
      return {
        ...state,
        locationState: action.payload,
      };
    case STREET:
      return {
        ...state,
        street: action.payload,
      };
    case ZIP:
      return {
        ...state,
        zip: action.payload,
      };
    default:
      return state;
  }
};

export default jobFormReducer;
