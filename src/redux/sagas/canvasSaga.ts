import { put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import * as CanvasActionTypes from '../actions/canvas'
import * as CanvasService from '../../services/CanvasService'

export function* saveCanvasImage(action: AnyAction) {
  try {
    const image = yield call(CanvasService.saveImage, action.payload.blob)
    action.payload.success()
    yield put(CanvasActionTypes.successSaveImage(image))
  } catch (e) {
    action.payload.error()
    yield put(CanvasActionTypes.errorSaveImage(e))
  }
}
