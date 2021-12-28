import { combineReducers } from 'redux'
import authState, { State } from './auth/auth'
import imagesState, { ImagesState } from './images'
import canvasState, { CanvasState } from './canvas/canvas'
import timelineState, { TimelineState } from './timeline'
import profileState, { ProfileState } from './profile'

export interface AppState {
  authState: State
  imagesState: ImagesState
  canvasState: CanvasState
  timelineState: TimelineState
  profileState: ProfileState
}

export default combineReducers({
  authState,
  imagesState,
  canvasState,
  timelineState,
  profileState,
})
