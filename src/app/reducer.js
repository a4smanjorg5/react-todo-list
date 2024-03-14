import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from '../features/taskSlice'

export default combineReducers({
    todo: taskReducer,
})
