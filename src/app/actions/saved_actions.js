import helpers from "../utils/helpers";

// make one for start 
export const FETCH_SAVED_VENUES = "FETCH_SAVED_VENUES"; 
export const startFetchingSavedVenues = () => ({
  type: FETCH_SAVED_VENUES
})


// make one for success 
export const FETCH_SAVED_VENUES_SUCCESS = "RECEIVE_SAVED_VENUES";  
const fetchSavedVenuesSuccess = results => ({
  type: FETCH_SAVED_VENUES_SUCCESS, 
  results 
}) 


// make one for error 
export const FETCH_SAVED_VENUES_ERROR = "FETCH_SAVED_VENUES_ERROR";
const fetchSavedVenuesError = () => ({
  type: FETCH_SAVED_VENUES_ERROR
}) 

export const fetchSavedVenues = () => dispatch => {
  dispatch(startFetchingSavedVenues()) 
  helpers.getSaved() 
  .then(venueData => venueData.data) 
  .then(results => dispatch(fetchSavedVenuesSuccess(results))) 
  .catch(error => dispatch(fetchSavedVenuesError()))
}  

const deleteSavedVenue = name => ({
  type: "DELETE_SAVED_VENUE", 
  name
});

export const deleteVenue = place => dispatch => {


    helpers.deleteSaved(place.reference)
    .then(data => { 
      dispatch(deleteSavedVenue(place.name))
		});

} 