import { combineReducers } from "redux";
import authState, { State } from "./auth";
import imageState, { ImageState } from "./images";
import canvasState, { CanvasState } from "./canvas";

export interface AppState {
  authState: State;
  imageState: ImageState;
  canvasState: CanvasState;
}

export default combineReducers({
  authState,
  imageState,
  canvasState,
});
