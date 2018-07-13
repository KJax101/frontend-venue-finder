import helpers from '../utils/helpers'
export const FETCH_VENUES= "FETCH_VENUES"
export const startFetchingVenues= ()=>{
	return{type:FETCH_VENUES}
}

export const FETCH_VENUES_SUCCESS= "FETCH_VENUES_SUCCESS"
export const fetchVenueSuccess= (results)=>{
	return{type:FETCH_VENUES_SUCCESS, results}
}
export const FETCH_VENUES_ERROR= "FETCH_VENUES_ERROR"
export const fetchVenueError= ()=>{
	return{type:FETCH_VENUES_ERROR}
}
export const fetchVenues = function(keyword, zipCode, radius){
	return function(dispatch){
		dispatch(startFetchingVenues())
		helpers.getLongAndLat(zipCode)
		.then((data) => {
			const lat = data.lat;
			const lng = data.lng;
			console.log(lat, lng);
			helpers.findVenues(keyword, lat, lng, radius)
			.then((data) => {
				console.log("data coming from setTerms findVenues" , data)
				dispatch(fetchVenueSuccess(data))
			})
		})
		.catch(err=>{
			dispatch(fetchVenueError())
		})
	}
}


