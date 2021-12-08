import { combineReducers } from "redux";
import authState, { State } from "./auth";
import imagesState, { ImagesState } from "./images";
import canvasState, { CanvasState } from "./canvas";
import timelineState from "./timeline";

export interface AppState {
  authState: State;
  imagesState: ImagesState;
  canvasState: CanvasState;
  timelineState: ImagesState;
}

export default combineReducers({
  authState,
  imagesState,
  canvasState,
  timelineState,
});
