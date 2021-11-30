import { createSelector } from "reselect";
import * as canvas from "../reducers/canvas";
import { AppState } from "../reducers";


const selectCanvasState = (state: AppState):canvas.CanvasState => state.canvasState;

export const selectTool = createSelector(
  selectCanvasState, 
  (state) => state.tool);