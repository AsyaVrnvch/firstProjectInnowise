import { put, call } from 'redux-saga/effects';
import { AnyAction } from "redux";
import * as ProfileActionTypes from "../actions/profile";
import * as ProfileService from "../../services/ProfileService";

export function* loadingAvatar( action: AnyAction ) {
    try{
        const image = yield call(ProfileService.loadAvatar, action.payload);
        console.log(image);
        yield put(ProfileActionTypes.successLoadAvatar(image));
    }
    catch(e){
        console.log(e)
        yield put(ProfileActionTypes.errorLoadAvatar(e));
    }
}