import { FETCH_SAVED_VENUES_SUCCESS } from '../actions/saved_actions'
const initialState = { results: [], loading: false, errors: [] } 
const savedReducer= (state=initialState, action) => { 

	if (action.type === FETCH_SAVED_VENUES_SUCCESS) {
		return Object.assign({}, state, {results: action.results})
	} 

	if(action.type === 'DELETE_SAVED_VENUE') {   
		console.log(state) 
		console.log('WHEN DELETING')
		return Object.assign({}, state, {results: state.results.filter(result => result.name !== action.name)}) 
	}
	return state
}
export default savedReducer