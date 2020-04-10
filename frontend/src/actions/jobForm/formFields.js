export const POSITION = 'POSITION';
export const DESCRIPTION = 'DESCRIPTION';
export const MINIMUM_SALARY = 'MINIMUM_SALARY';
export const MAXIMUM_SALARY = 'MAXIMUM_SALARY';
export const CITY = 'CITY';
export const COUNTRY = 'COUNTRY';
export const LOCATION_STATE = 'LOCATION_STATE';
export const STREET = 'STREET';
export const ZIP = 'ZIP';

export const setPosition = (payload) => ({
  type: POSITION,
  payload: payload,
});

export const setDescription = (payload) => ({
  type: DESCRIPTION,
  payload: payload,
});

export const setMinimumSalary = (payload) => ({
  type: MINIMUM_SALARY,
  payload: payload,
});

export const setMaximumSalary = (payload) => ({
  type: MAXIMUM_SALARY,
  payload: payload,
});

export const setCity = (payload) => ({
  type: CITY,
  payload: payload,
});

export const setCountry = (payload) => ({
  type: COUNTRY,
  payload: payload,
});

export const setLocationState = (payload) => ({
  type: LOCATION_STATE,
  payload: payload,
});

export const setStreet = (payload) => ({
  type: STREET,
  payload: payload,
});

export const setZip = (payload) => ({
  type: ZIP,
  payload: payload,
});
