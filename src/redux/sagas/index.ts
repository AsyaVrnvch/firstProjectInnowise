import { takeEvery, all } from 'redux-saga/effects'
import * as authSaga from './authSaga'
import * as imagesSaga from './imageSaga'
import * as canvasSaga from './canvasSaga'
import * as profileSaga from './profileSaga'
import { AuthActionTypes } from '../actions/auth'
import { ImagesActionTypes } from '../actions/images'
import { CanvasActionTypes } from '../actions/canvas'
import { TimelineActionTypes } from '../actions/timeline'
import { ProfileActionTypes } from '../actions/profile'

export default function* rootSaga() {
  yield all([
    takeEvery(AuthActionTypes.SIGN_OUT, authSaga.signOut),
    takeEvery(AuthActionTypes.SIGN_IN, authSaga.signIn),
    takeEvery(AuthActionTypes.SIGN_UP, authSaga.signUp),
    takeEvery(AuthActionTypes.CHECK_AUTH, authSaga.checkAuth),
    takeEvery(ImagesActionTypes.LOAD_IMAGES, imagesSaga.loadMyImages),
    takeEvery(CanvasActionTypes.SAVE_IMAGE, canvasSaga.saveCanvasImage),
    takeEvery(TimelineActionTypes.LOAD_IMAGES, imagesSaga.loadAllImages),
    takeEvery(ProfileActionTypes.LOAD_AVATAR, profileSaga.loadAvatar),
    takeEvery(ProfileActionTypes.CHANGE_TITLE, profileSaga.changeTitle),
  ])
}
