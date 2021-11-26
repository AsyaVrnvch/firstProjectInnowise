import { combineReducers } from "redux";
import authState, { State } from "./auth";
import imageState, { ImageState } from "./images";

export interface AppState {
  authState: State;
  imageState: ImageState;
}

export default combineReducers({
  authState,
  imageState
});
