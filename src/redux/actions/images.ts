import { createAction } from "redux-actions";

export enum ImagesActionTypes {
  LOADING_IMAGE = "[Images] LOADING_IMAGE",
  SUCCESS_LOAD_IMAGE = "[Images] SUCCESS_LOAD_IMAGE",
  ERROR_LOAD_IMAGE = "[Images] ERROR_LOAD_IMAGE"
}

export const loadingImage = createAction(
  ImagesActionTypes.LOADING_IMAGE,
  (payload: { file:{} }) => payload
);

export const successLoadImage = createAction(
  ImagesActionTypes.SUCCESS_LOAD_IMAGE,
  (payload: {}) => payload
);

export const errorLoadImage = createAction(
  ImagesActionTypes.ERROR_LOAD_IMAGE,
  (payload: { error: string }) => payload
);