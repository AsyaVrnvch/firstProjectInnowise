import { createAction } from "redux-actions";
import { Image } from "../reducers/images";

export enum TimelineActionTypes {
  LOADING_IMAGES = "[Timeline] LOADING_IMAGES",
  SUCCESS_LOAD_IMAGES = "[Timeline] SUCCESS_LOAD_IMAGES",
  ERROR_LOAD_IMAGES = "[Timeline] ERROR_LOAD_IMAGES",
}

export const loadingImages = createAction(
  TimelineActionTypes.LOADING_IMAGES,
  (payload: {}) => payload
);

export const successLoadImages = createAction(
  TimelineActionTypes.SUCCESS_LOAD_IMAGES,
  (payload: { images: Array<Image> }) => payload
);

export const errorLoadImages = createAction(
  TimelineActionTypes.ERROR_LOAD_IMAGES,
  (payload: { error: string }) => payload
);
