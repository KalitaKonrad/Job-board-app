import { FETCH_OFFERS_PENDING, FETCH_OFFERS_SUCCESS, FETCH_OFFERS_ERROR } from '../actions/fetchOffers';

export const LIMIT_ITEMS_COUNT_FETCH = 10;

const initialState = {
  pending: false,
  offers: [],
  hasMoreItems: true,
  offset: 0,
  error: null
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      let isThereMoreOffers = true;
      if (action.payload.length === 0) {
        isThereMoreOffers = false;
      }
      console.log(action.payload);
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
    default:
      return state;
  }
};

export const getOffers = state => state.offers;
export const getOffersPending = state => state.pending;
export const getOffersError = state => state.error;

export default offerReducer;
