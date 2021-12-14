import { put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import * as ImagesActionTypes from '../actions/images'
import * as ImagesService from '../../services/ImageService'
import * as TimelineActionTypes from '../actions/timeline'

export function* loadingMyImagesWorker(action: AnyAction) {
  try {
    const images = yield call(ImagesService.loadMyImages)
    yield put(ImagesActionTypes.successLoadImages(images))
  } catch (e) {
    yield put(ImagesActionTypes.errorLoadImages(e))
  }
}

export function* loadingAllImagesWorker(action: AnyAction) {
  try {
    const images = yield call(ImagesService.loadAllImages)
    yield put(TimelineActionTypes.successLoadImages(images))
  } catch (e) {
    yield put(TimelineActionTypes.errorLoadImages(e))
  }
}
