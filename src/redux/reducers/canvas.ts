import { AnyAction } from "redux";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    tool:'brush'
};

export interface CanvasState {
    error:string,
    tool: string,
}

export default function canvasState(
  state: CanvasState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case CanvasActionTypes.CHANGE_TOOL:
            return {
                ...state,
                tool:action.payload.tool
            }

        default:
            return state;
    }
} 