import { put, call } from 'redux-saga/effects';
import { AnyAction } from "redux";
import * as CanvasActionTypes from "../actions/canvas";
import * as CanvasService from "../../services/CanvasService";

export function* savingCanvasImage( action: AnyAction ) {
    try{
        const image = yield call(CanvasService.saveImage, action.payload);
        yield put(CanvasActionTypes.successSavedImage(image));
    }
    catch(e){
        console.log(e)
        yield put(CanvasActionTypes.errorSavedImage(e));
    }
}