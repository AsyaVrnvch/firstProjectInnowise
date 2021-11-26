import { put, call } from 'redux-saga/effects';
import { AnyAction } from "redux";
import * as ImagesActionTypes from "../actions/images";
import * as ImageService from "../../services/ImageService";

export function* loadingImageWorker( action: AnyAction ) {
    try{
        yield call(ImageService.loadImage,action.payload);
        yield put(ImagesActionTypes.successLoadImage());
    }
    catch(e){
        console.log(e)
        yield put(ImagesActionTypes.errorLoadImage(e));
    }
}