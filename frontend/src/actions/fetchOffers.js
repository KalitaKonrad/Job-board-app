import axios from '../api/api_config';
import { OFFERS_ENDPOINT } from '../api/endpoints';
import { LIMIT_ITEMS_COUNT_FETCH } from '../reducers/offerReducer';

export const FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_ERROR = 'FETCH_OFFERS_ERROR';
export const FETCH_OFFERS_PENDING = 'FETCH_OFFERS_PENDING';

export const fetchOffers = (offset = 0) => {
  return dispatch => {
    const request = axios.get(`${OFFERS_ENDPOINT}/offset/${offset}&${LIMIT_ITEMS_COUNT_FETCH}`, {
      params: {
        offset: offset
      }
    });
    dispatch(fetchOffersPending());
    return request
      .then(res => {
        dispatch(fetchOffersSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchOffersError(err));
      });
  };
};

export function fetchOffersSuccess(offers) {
  return {
    type: FETCH_OFFERS_SUCCESS,
    payload: offers
  };
}

export function fetchOffersError(error) {
  return {
    type: FETCH_OFFERS_ERROR,
    payload: error
  };
}

export function fetchOffersPending() {
  return {
    type: FETCH_OFFERS_PENDING
  };
}
