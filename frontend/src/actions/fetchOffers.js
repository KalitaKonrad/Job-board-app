import axios from '../api/api_config';
import { OFFERS_ENDPOINT } from '../api/endpoints';
import { LIMIT_ITEMS_COUNT_FETCH } from '../reducers/offerReducer';

export const FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_ERROR = 'FETCH_OFFERS_ERROR';
export const FETCH_OFFERS_PENDING = 'FETCH_OFFERS_PENDING';
export const CLEAR_OFFERS = 'CLEAR_OFFERS';
export const UPDATE_KEYWORDS = 'UPDATE_KEYWORDS';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const fetchOffers = (offset = 0, keywords = '', location = '') => {
  return dispatch => {
    const request = axios.get(
      `${OFFERS_ENDPOINT}/?offset=${offset}&limit=${LIMIT_ITEMS_COUNT_FETCH}&keywords=${keywords}&location=${location}`,
      {
        params: {
          offset: offset,
          keywords: keywords,
          location: location
        }
      }
    );
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

export function clearOffers() {
  return {
    type: CLEAR_OFFERS
  };
}

export function updateKeywords(keywords) {
  return {
    type: UPDATE_KEYWORDS,
    payload: keywords
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
}
