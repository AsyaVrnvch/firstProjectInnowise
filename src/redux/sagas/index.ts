import { takeEvery, all } from "redux-saga/effects";
import * as authSaga from './authSaga';
import * as imagesSaga from './imageSaga';
import * as canvasSaga from './canvasSaga';
import * as profileSaga from './profileSaga';
import { AuthActionTypes } from "../actions/auth";
import { ImagesActionTypes } from "../actions/images";
import { CanvasActionTypes } from "../actions/canvas";
import { TimelineActionTypes } from "../actions/timeline";
import { ProfileActionTypes } from "../actions/profile";

export default function* rootSaga() {
  yield all([
    takeEvery(AuthActionTypes.SIGNING_OUT, authSaga.signOutWorker),
    takeEvery(AuthActionTypes.SIGNING_IN, authSaga.signInWorker),
    takeEvery(AuthActionTypes.SIGNING_UP, authSaga.signUpWorker),
    takeEvery(AuthActionTypes.CHECKING_AUTH, authSaga.checkAuthWorker),
    takeEvery(ImagesActionTypes.LOADING_IMAGES, imagesSaga.loadingMyImagesWorker),
    takeEvery(CanvasActionTypes.SAVING_IMAGE, canvasSaga.savingCanvasImage),
    takeEvery(TimelineActionTypes.LOADING_IMAGES, imagesSaga.loadingAllImagesWorker),
    takeEvery(ProfileActionTypes.LOADING_AVATAR, profileSaga.loadingAvatar),
    takeEvery(ProfileActionTypes.CHANGING_TITLE, profileSaga.changingTitle),
  ]);
}
