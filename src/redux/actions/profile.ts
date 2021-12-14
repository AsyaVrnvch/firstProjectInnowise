import { createAction } from 'redux-actions'

export enum ProfileActionTypes {
  LOADING_AVATAR = '[Profile] LOADING_AVATAR',
  SUCCESS_LOAD_AVATAR = '[Profile] SUCCESS_LOAD_AVATAR',
  ERROR_LOAD_AVATAR = '[Profile] ERROR_LOAD_AVATAR',

  CHANGING_TITLE = '[Profile] CHANGING_TITLE',
  SUCCESS_CHANGE_TITLE = '[Profile] SUCCESS_CHANGE_TITLE',
  ERROR_CHANGE_TITLE = '[Profile] ERROR_CHANGE_TITLE',
}

export const loadingAvatar = createAction(
  ProfileActionTypes.LOADING_AVATAR,
  (payload: { file: File }) => payload
)

export const successLoadAvatar = createAction(
  ProfileActionTypes.SUCCESS_LOAD_AVATAR,
  (payload: { url: string }) => payload
)

export const errorLoadAvatar = createAction(
  ProfileActionTypes.ERROR_LOAD_AVATAR,
  (payload: { error: string }) => payload
)

export const changingTitle = createAction(
  ProfileActionTypes.CHANGING_TITLE,
  (payload: { title: string }) => payload
)

export const successChangeTitle = createAction(
  ProfileActionTypes.SUCCESS_CHANGE_TITLE,
  (payload: { title: string }) => payload
)

export const errorChangeTitle = createAction(
  ProfileActionTypes.ERROR_CHANGE_TITLE,
  (payload: { error: string }) => payload
)
