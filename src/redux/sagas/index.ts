import { takeEvery, all } from "redux-saga/effects";
import * as authSaga from './authSaga';
import * as imageSaga from './imageSaga';
import { AuthActionTypes } from "../actions/auth";
import { ImagesActionTypes } from "../actions/images";

export default function* rootSaga() {
  yield all([
    takeEvery(AuthActionTypes.SIGNING_OUT, authSaga.signOutWorker),
    takeEvery(AuthActionTypes.SIGNING_IN, authSaga.signInWorker),
    takeEvery(AuthActionTypes.SIGNING_UP, authSaga.signUpWorker),
    takeEvery(AuthActionTypes.CHECKING_AUTH, authSaga.checkAuthWorker),
    takeEvery(ImagesActionTypes.LOADING_IMAGE,imageSaga.loadingImageWorker),
  ]);
}
