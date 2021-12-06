import { AnyAction } from "redux";
import { ImagesActionTypes } from "../actions/images";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    images:[],
};

export interface Image{
    id: string,
    url: string,
    createdAt: Date  
}

export interface ImagesState {
    error: string,
    images: Array<Image>,
}

export default function imagesState(
  state: ImagesState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case ImagesActionTypes.LOADING_IMAGES:
            return {
                ...state,
            }

        case ImagesActionTypes.SUCCESS_LOAD_IMAGES:
            return {
                ...state,
                images:action.payload
            }

        case ImagesActionTypes.ERROR_LOAD_IMAGES:
            return {
                ...state,
                error:action.payload
            }

        case CanvasActionTypes.SUCCESS_SAVED_IMAGE:
            return {
                ...state,
                images:[...state.images, action.payload]
            }

        default:
            return state;
    }
} 