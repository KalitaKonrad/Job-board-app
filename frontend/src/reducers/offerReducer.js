import {
  FETCH_OFFERS_PENDING,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_ERROR,
  CLEAR_OFFERS,
  UPDATE_KEYWORDS,
  UPDATE_LOCATION
} from '../actions/fetchOffers';

export const LIMIT_ITEMS_COUNT_FETCH = 20;

const initialState = {
  pending: false,
  offers: [],
  hasMoreItems: true,
  offset: 0,
  error: null,
  keywords: '',
  location: ''
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      let isThereMoreOffers = true;
      if (action.payload.length === 0) {
        isThereMoreOffers = false;
      }
      return {
        ...state,
        offset: state.offset + LIMIT_ITEMS_COUNT_FETCH,
        pending: false,
        hasMoreItems: isThereMoreOffers,
        offers: state.offers.concat(action.payload)
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
    case CLEAR_OFFERS:
      return {
        ...state,
        offers: [],
        offset: 0,
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

export const getOffers = state => state.offers;
export const getOffersPending = state => state.pending;
export const getOffersError = state => state.error;

export default offerReducer;
