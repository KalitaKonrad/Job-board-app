import axios from '../api/api_config';
import { OFFERS_ENDPOINT } from '../api/endpoints';
export const FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_ERROR = 'FETCH_OFFERS_ERROR';
export const FETCH_OFFERS_PENDING = 'FETCH_OFFERS_PENDING';

export const fetchOffers = (name = '') => {
  return dispatch => {
    const request = axios.get(OFFERS_ENDPOINT, {
      params: {
        name: name
      }
    });
    dispatch(fetchOffersPending()); // tells redux that data is being fetched
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
  // action creator
  return {
    type: FETCH_OFFERS_SUCCESS,
    payload: offers
  };
}

export function fetchOffersError(error) {
  // action creator
  return {
    type: FETCH_OFFERS_ERROR,
    payload: error
  };
}

export function fetchOffersPending() {
  // action creator
  return {
    type: FETCH_OFFERS_PENDING
  };
}
