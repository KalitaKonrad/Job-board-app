import { CHOOSE_JUNIOR, CHOOSE_MID, CHOOSE_SENIOR } from '../actions/changeExpLevel';
import { ADD_TECHNOLOGY } from '../actions/addTechnology';
import { SELECT_TECHNOLOGY } from '../actions/selectTechnology';

const initialState = {
  experienceLevel: 'JUNIOR',
  technologies: [],
  selectedTechnology: ''
}

const postJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_JUNIOR:
      return {
        ...state,
        experienceLevel: 'JUNIOR'
      }
    case CHOOSE_MID:
      return {
        ...state,
        experienceLevel: 'MID'
      }
    case CHOOSE_SENIOR:
      return {
        ...state,
        experienceLevel: 'SENIOR'
      }
    case ADD_TECHNOLOGY:
      return {
        ...state,
        technologies: [...state.technologies, action.payload]
      }
    case SELECT_TECHNOLOGY:
      return {
        ...state,
        selectedTechnology: action.payload
      }
    default:
      return state;
  }
}

export default postJobReducer;