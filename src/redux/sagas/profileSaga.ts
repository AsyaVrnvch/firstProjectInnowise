import { put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import * as ProfileActionTypes from '../actions/profile'
import * as ProfileService from '../../services/ProfileService'

export function* loadAvatar(action: AnyAction) {
  try {
    const image = yield call(ProfileService.loadAvatar, action.payload)
    yield put(ProfileActionTypes.successLoadAvatar(image))
  } catch (e) {
    yield put(ProfileActionTypes.errorLoadAvatar(e))
  }
}

export function* changeTitle(action: AnyAction) {
  try {
    const title = yield call(ProfileService.changeTitle, action.payload)
    yield put(ProfileActionTypes.successChangeTitle(title))
  } catch (e) {
    yield put(ProfileActionTypes.errorChangeTitle(e))
  }
}
