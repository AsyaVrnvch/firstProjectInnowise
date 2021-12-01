import { AnyAction } from "redux";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    tool:'brush',
    color:'black',
    width: 1
};

export interface CanvasState {
    error:string,
    tool: string,
    color: string,
    width: number
}

export default function canvasState(
  state: CanvasState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case CanvasActionTypes.CHANGE_TOOL:
            return {
                ...state,
                tool:action.payload.tool,
                color:action.payload.tool==='eraser' ? 'white' : 'black',
                width: action.payload.tool==='eraser' ? 5 : 1
            }

        default:
            return state;
    }
} 