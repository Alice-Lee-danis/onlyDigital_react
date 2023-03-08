import { TypedUseSelectorHook, useSelector } from "react-redux"
import { combineStates } from "../reducers/index";

export const useHistoryDateReducerSelector:TypedUseSelectorHook<combineStates> = useSelector

