import { combineReducers } from "redux";
import authState, { State } from "./auth";

export interface AppState {
  authState: State;
}

export default combineReducers({
  authState,
});
