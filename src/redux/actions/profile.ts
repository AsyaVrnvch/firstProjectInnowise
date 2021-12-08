import { createAction } from "redux-actions";

export enum ProfileActionTypes {
  LOADING_AVATAR = "[Profile] LOADING_AVATAR",
  SUCCESS_LOAD_AVATAR = "[Profile] SUCCESS_LOAD_AVATAR",
  ERROR_LOAD_AVATAR = "[Profile] ERROR_LOAD_AVATAR",
}

export const loadingAvatar = createAction(
  ProfileActionTypes.LOADING_AVATAR,
  (payload: {file: File}) => payload
);

export const successLoadAvatar = createAction(
  ProfileActionTypes.SUCCESS_LOAD_AVATAR,
  (payload: { url: string }) => payload
);

export const errorLoadAvatar = createAction(
  ProfileActionTypes.ERROR_LOAD_AVATAR,
  (payload: { error: string }) => payload
);
