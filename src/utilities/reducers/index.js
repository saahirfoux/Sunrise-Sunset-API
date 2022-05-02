import { combineReducers } from "redux";
import list from './list';
import results from './results';

export default combineReducers({
    list,
    results
})