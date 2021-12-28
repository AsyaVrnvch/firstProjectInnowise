import { createAction } from 'redux-actions'
import { Image } from '../reducers/images'
import { Tools } from "../reducers/canvas/consts"

export enum CanvasActionTypes {
  CHANGE_TOOL = '[Canvas] CHANGE_TOOL',
  CHANGE_WIDTH = '[Canvas] CHANGE_WIDTH',
  CHANGE_COLOR = '[Canvas] CHANGE_COLOR',

  RESET_STATE = '[Canvas] RESET_STATE',

  SAVE_REQUEST = '[Canvas] SAVE_REQUEST',
  SAVE_IMAGE = '[Canvas] SAVE_IMAGE',
  SUCCESS_SAVE_IMAGE = '[Canvas] SUCCESS_SAVE_IMAGE',
  ERROR_SAVE_IMAGE = '[Canvas] ERROR_SAVE_IMAGE',
}

export const changeToolAction = createAction(
  CanvasActionTypes.CHANGE_TOOL,
  (payload: { tool: Tools }) => payload
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

export const saveImage = createAction(
  CanvasActionTypes.SAVE_IMAGE,
  (payload: { blob: Blob; success: (text: string) => void ; error: (text: string) => void }) => payload
)

export const successSaveImage = createAction(
  CanvasActionTypes.SUCCESS_SAVE_IMAGE,
  (payload: Image) => payload
)

export const errorSaveImage = createAction(
  CanvasActionTypes.ERROR_SAVE_IMAGE,
  (payload: { e: string }) => payload
)
