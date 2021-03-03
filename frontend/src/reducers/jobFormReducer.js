import { jobForm } from "../actions";
import {
  POST_JOB_ERROR,
  POST_JOB_PENDING,
  POST_JOB_SUCCESS,
} from "../actions/jobFormActions";

const initialState = {
  experienceLevel: "INTERN",
  skills: [],
  step: 2,
  position: "",
  description: "",
  minimumSalary: 0,
  maximumSalary: 0,
  city: "",
  country: "",
  state: "",
  street: "",
  zip: "",
  error: "",
};

const jobFormReducer = (state = initialState, action) => {
  const {
    ADD_SKILL,
    DELETE_SKILL,
    PREV_STEP,
    NEXT_STEP,
    RESET_FORM,
    UPDATE_FIELDS,
  } = jobForm;

  switch (action.type) {
    case UPDATE_FIELDS:
      return {
        ...state,
        ...action.payload,
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
    case POST_JOB_PENDING:
      return {
        ...state,
      };
    case POST_JOB_SUCCESS: {
      return initialState;
    }
    case POST_JOB_ERROR: {
      return {
        ...state,
        error: "Error while posting job.",
      };
    }
    case RESET_FORM:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default jobFormReducer;
