import { createAction } from 'redux-actions'

export enum ProfileActionTypes {
  LOAD_AVATAR = '[Profile] LOAD_AVATAR',
  SUCCESS_LOAD_AVATAR = '[Profile] SUCCESS_LOAD_AVATAR',
  ERROR_LOAD_AVATAR = '[Profile] ERROR_LOAD_AVATAR',

  CHANGE_TITLE = '[Profile] CHANGE_TITLE',
  SUCCESS_CHANGE_TITLE = '[Profile] SUCCESS_CHANGE_TITLE',
  ERROR_CHANGE_TITLE = '[Profile] ERROR_CHANGE_TITLE',
}

export const loadAvatar = createAction(
  ProfileActionTypes.LOAD_AVATAR,
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

export const changeTitle = createAction(
  ProfileActionTypes.CHANGE_TITLE,
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
