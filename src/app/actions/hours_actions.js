import helpers from "../utils/helpers";

export const FETCH_HOURS_START = "FETCH_HOURS_START";
export const fetchHoursStart = () => ({
  type: FETCH_HOURS_START
});

export const FETCH_HOURS_SUCCESS = "FETCH_HOURS_SUCCESS";
export const fetchHoursSuccess = results => ({
  type: FETCH_HOURS_SUCCESS,
  results
});

export const FETCH_HOURS_ERROR = "FETCH_HOURS_ERROR";
export const fetchHoursError = () => ({
  type: FETCH_HOURS_ERROR
});

export const fetchHours = reference => dispatch => {
  dispatch(fetchHoursStart());

  helpers
    .getVenueHours(reference)
    .then(results => {
      console.log(results);
      console.log("FROM API");
      dispatch(fetchHoursSuccess(results));
    })
    .catch(error => {
      dispatch(fetchHoursError());
    });
};
