import { createStore } from "redux";
import { combineReducer } from "./reducers/index";

export const Store = createStore(combineReducer)