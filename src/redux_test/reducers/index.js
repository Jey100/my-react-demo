/**
 * Created by jey on 2017/4/30.
 */


import todos from "./todo";
import filter from "./filter";
import {combineReducers} from "redux";


/**
 * 合并所有的reducers
 */
export default combineReducers({
    todos,
    filter
})