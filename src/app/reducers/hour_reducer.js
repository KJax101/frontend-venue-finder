import {FETCH_HOURS_SUCCESS} from '../actions/hours_actions'

const initialState = {
  loading: false, 
  hours: [], 
  errors: []
} 


const hourReducer = (state=initialState, action) => { 
  console.log(action)
  if(action.type === "FETCH_HOURS_SUCCESS") { 
    console.log(`SETTING HOURS`)
    return Object.assign({}, state, {hours: action.results})
  } 
  return state
} 

export default hourReducer