import { put, call } from 'redux-saga/effects';
import { AnyAction } from "redux";
import * as ImagesActionTypes from "../actions/images";
import * as ImagesService from "../../services/ImageService";

export function* loadingImagesWorker( action: AnyAction ) {
    try{
        const images = yield call(ImagesService.loadImages);
        yield put(ImagesActionTypes.successLoadImages(images));
    }
    catch(e){
        console.log(e)
        yield put(ImagesActionTypes.errorLoadImages(e));
    }
}
