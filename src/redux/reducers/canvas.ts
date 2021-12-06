import { AnyAction } from "redux";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    isSaving: false,
    tool:'brush',
    color:'black',
    width: 1,
};

export interface CanvasState {
    error:string,
    isSaving: boolean,
    tool: string,
    color: string,
    width: number,
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

        case CanvasActionTypes.CHANGE_WIDTH:
            return {
                ...state,
                width: action.payload
            }

        case CanvasActionTypes.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }

        case CanvasActionTypes.SAVE_REQUEST:
            return {
                ...state,
                isSaving: true,
            }

        case CanvasActionTypes.SAVING_IMAGE:
            return {
                ...state,
                isSaving: false,
            }

        case CanvasActionTypes.SUCCESS_SAVED_IMAGE:
            return {
                ...state,
            }

        case CanvasActionTypes.ERROR_SAVED_IMAGE:
            return {
                ...state,
            }

        default:
            return state;
    }
} 