import { combineReducers } from "redux"
import { ToDoReducer } from "./historyDateReducer/historyDateReducer"

export const combineReducer = combineReducers({
    ToDoReducer
})

export type combineStates = ReturnType<typeof combineReducer>