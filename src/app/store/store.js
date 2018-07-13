import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/root_reducer.js"
import thunk from "redux-thunk"
// make a redux store using createStore and rootReducer
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store 