import { AnyAction } from "redux";
import { ImagesActionTypes } from "../actions/images";

const initialState = {
    error:'',
};

export interface ImageState {
    error:string,

}

export default function imagesState(
  state: ImageState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case ImagesActionTypes.LOADING_IMAGE:
            return {
                ...state,
            }

        case ImagesActionTypes.SUCCESS_LOAD_IMAGE:
        return {
            ...state,
        }

        case ImagesActionTypes.ERROR_LOAD_IMAGE:
        return {
            ...state,
            error:action.payload
        }

        default:
            return state;
    }
} 