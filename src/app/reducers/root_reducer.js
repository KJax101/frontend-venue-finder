import {combineReducers} from "redux"
import searchReducer from "./search_reducer"
import savedReducer from "./saved_reducer"
import hourReducer from "./hour_reducer"
export default combineReducers({
	searchResults: searchReducer,
	savedResults: savedReducer, 
	openTimes: hourReducer
})