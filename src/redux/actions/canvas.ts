import { createAction } from "redux-actions";

export enum CanvasActionTypes {
  CHANGE_TOOL = "[Canvas] CHANGE_TOOL",
}

export const changeToolAction = createAction(
  CanvasActionTypes.CHANGE_TOOL,
  (payload: { tool:string }) => payload
);