import { AnyAction } from "redux";
import { TimelineActionTypes } from "../actions/timeline";
import { ImagesState } from "./images";

const initialState = {
    error:'',
    images:[],
};

export default function timelineState(
  state: ImagesState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case TimelineActionTypes.LOADING_IMAGES:
            return {
                ...state,
            }

        case TimelineActionTypes.SUCCESS_LOAD_IMAGES:
            return {
                ...state,
                images:action.payload
            }

        case TimelineActionTypes.ERROR_LOAD_IMAGES:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
} 