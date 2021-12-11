import { AnyAction } from "redux";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    isSaving: false,
    tool:'brush',
    color:'black',
    width: 1,
    preloader: false,
};

export interface CanvasState {
    error: string,
    isSaving: boolean,
    tool: string,
    color: string,
    width: number,
    preloader: boolean,
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

        case CanvasActionTypes.RESET_STATE:
            return {
                error:'',
                isSaving: false,
                tool:'brush',
                color:'black',
                width: 1,
                preloader: false,
            }

        case CanvasActionTypes.SAVE_REQUEST:
            return {
                ...state,
                isSaving: true,
                preloader: true,
            }

        case CanvasActionTypes.SAVING_IMAGE:
            return {
                ...state,
                isSaving: false,
                preloader: true,
            }

        case CanvasActionTypes.SUCCESS_SAVED_IMAGE:
            return {
                ...state,
                preloader: false,
            }

        case CanvasActionTypes.ERROR_SAVED_IMAGE:
            return {
                ...state,
                preloader: false,
            }

        default:
            return state;
    }
} 