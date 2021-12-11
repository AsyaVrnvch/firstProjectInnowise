import { AnyAction } from "redux";
import { ImagesActionTypes } from "../actions/images";
import { CanvasActionTypes } from "../actions/canvas";

const initialState = {
    error:'',
    images:[],
    preloader: false,
};

export interface Image{
    id: string,
    url: string,
    createdAt: Date,
    username: string,  
}

export interface ImagesState {
    error: string,
    images: Array<Image>,
    preloader: boolean,
}

export default function imagesState(
  state: ImagesState = initialState,
  action: AnyAction
){
    switch (action.type) {
        case ImagesActionTypes.LOADING_IMAGES:
            return {
                ...state,
                preloader: true,
            }

        case ImagesActionTypes.SUCCESS_LOAD_IMAGES:
            return {
                ...state,
                images:action.payload,
                preloader: false,
            }

        case ImagesActionTypes.ERROR_LOAD_IMAGES:
            return {
                ...state,
                error:action.payload,
                preloader: false,
            }

        case CanvasActionTypes.SUCCESS_SAVED_IMAGE:
            return {
                ...state,
                images:[...state.images, action.payload],
                preloader: false,
            }

        default:
            return state;
    }
} 