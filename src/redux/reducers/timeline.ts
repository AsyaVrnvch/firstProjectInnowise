import { AnyAction } from 'redux'
import { TimelineActionTypes } from '../actions/timeline'
import { Image } from './images'

const initialState = {
  error: '',
  images: [],
  preloader: false,
}

export interface TimelineState {
  error: string
  images: Array<Image>
  preloader: boolean
}

export default function timelineState(state: TimelineState = initialState, action: AnyAction) {
  switch (action.type) {
    case TimelineActionTypes.LOAD_IMAGES:
      return {
        ...state,
        preloader: true,
      }

    case TimelineActionTypes.SUCCESS_LOAD_IMAGES:
      return {
        ...state,
        images: action.payload,
        preloader: false,
      }

    case TimelineActionTypes.ERROR_LOAD_IMAGES:
      return {
        ...state,
        error: action.payload,
        preloader: false,
      }

    default:
      return state
  }
}
