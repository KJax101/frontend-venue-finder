const initialState = {results: [], loading: false, errors: []} 


const searchReducer = (state=initialState, action) => {

if(action.type === "FETCH_VENUES_SUCCESS") { 
      return Object.assign({}, state, {results: action.results})
} 

  return state
}
export default searchReducer

