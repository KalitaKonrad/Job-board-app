import { CHOOSE_JUNIOR, CHOOSE_MID, CHOOSE_SENIOR } from '../actions/changeExpLevel';

const initialState = {
  experienceLevel: 'JUNIOR'
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
    default:
      return state;
  }
}

export const getLevel = state => state.experienceLevel;
export default postJobReducer;