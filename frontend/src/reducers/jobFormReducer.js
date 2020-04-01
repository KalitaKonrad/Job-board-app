import { CHOOSE_INTERN, CHOOSE_JUNIOR, CHOOSE_MID, CHOOSE_SENIOR } from '../actions/jobForm/changeExpLevel';
import { ADD_SKILL } from '../actions/jobForm/addSkill';
import { SELECT_SKILL } from '../actions/jobForm/selectSkill';
import { DELETE_SKILL } from '../actions/jobForm/deleteSkill';

const initialState = {
  experienceLevel: 'INTERN',
  skills: [],
  selectedSkill: ''
};

const jobFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_INTERN:
      return {
        ...state,
        experienceLevel: 'INTERN'
      };
    case CHOOSE_JUNIOR:
      return {
        ...state,
        experienceLevel: 'JUNIOR'
      };
    case CHOOSE_MID:
      return {
        ...state,
        experienceLevel: 'MID'
      };
    case CHOOSE_SENIOR:
      return {
        ...state,
        experienceLevel: 'SENIOR'
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload]
      };
    case SELECT_SKILL:
      return {
        ...state,
        selectedSkill: action.payload
      };
    case DELETE_SKILL:
      return {
        ...state,
        skills: [...state.skills.filter(s => s !== action.payload)]
      };
    default:
      return state;
  }
};

export default jobFormReducer;
