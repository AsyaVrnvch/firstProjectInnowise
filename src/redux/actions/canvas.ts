import { createAction } from 'redux-actions'
import { Image } from '../reducers/images'

export enum CanvasActionTypes {
  CHANGE_TOOL = '[Canvas] CHANGE_TOOL',
  CHANGE_WIDTH = '[Canvas] CHANGE_WIDTH',
  CHANGE_COLOR = '[Canvas] CHANGE_COLOR',

  RESET_STATE = '[Canvas] RESET_STATE',

  SAVE_REQUEST = '[Canvas] SAVE_REQUEST',
  SAVING_IMAGE = '[Canvas] SAVING_IMAGE',
  SUCCESS_SAVED_IMAGE = '[Canvas] SUCCESS_SAVED_IMAGE',
  ERROR_SAVED_IMAGE = '[Canvas] ERROR_SAVED_IMAGE',
}

export const changeToolAction = createAction(
  CanvasActionTypes.CHANGE_TOOL,
  (payload: { tool: string }) => payload
)

export const changeWidth = createAction(
  CanvasActionTypes.CHANGE_WIDTH,
  (payload: { width: number }) => payload
)

export const changeColor = createAction(
  CanvasActionTypes.CHANGE_COLOR,
  (payload: { color: string }) => payload
)

export const resetCanvas = createAction(CanvasActionTypes.RESET_STATE)

export const saveRequest = createAction(CanvasActionTypes.SAVE_REQUEST)

export const savingImage = createAction(
  CanvasActionTypes.SAVING_IMAGE,
  (payload: { blob: Blob; success: (text: string) => void ; error: (text: string) => void }) => payload
)

export const successSavedImage = createAction(
  CanvasActionTypes.SUCCESS_SAVED_IMAGE,
  (payload: Image) => payload
)

export const errorSavedImage = createAction(
  CanvasActionTypes.ERROR_SAVED_IMAGE,
  (payload: { e: string }) => payload
)
