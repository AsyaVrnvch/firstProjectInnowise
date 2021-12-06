import { combineReducers } from "redux";
import authState, { State } from "./auth";
import imagesState, { ImagesState } from "./images";
import canvasState, { CanvasState } from "./canvas";

export interface AppState {
  authState: State;
  imagesState: ImagesState;
  canvasState: CanvasState;
}

export default combineReducers({
  authState,
  imagesState,
  canvasState,
});
