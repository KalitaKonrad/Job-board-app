import axios from '../api/api_config';
import { FETCH_OFFERS_PENDING, FETCH_OFFERS_SUCCESS, FETCH_OFFERS_ERROR } from '../actions/fetchOffers';

const initialState = {
  pending: false,
  offers: [],
  error: null
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        pending: false,
        offers: action.payload
      };
    case FETCH_OFFERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case FETCH_OFFERS_PENDING:
      return {
        ...state,
        pending: true
      };
    default:
      return state;
  }
};

export const getOffers = state => state.offers;
export const getOffersPending = state => state.pending;
export const getOffersError = state => state.error;

export default offerReducer;
