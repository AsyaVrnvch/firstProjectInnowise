import { createAction } from "redux-actions";
import { Image } from "../reducers/images";

export enum ImagesActionTypes {
  LOADING_IMAGES = "[Images] LOADING_IMAGES",
  SUCCESS_LOAD_IMAGES = "[Images] SUCCESS_LOAD_IMAGES",
  ERROR_LOAD_IMAGES = "[Images] ERROR_LOAD_IMAGES",
}

export const loadingImages = createAction(
  ImagesActionTypes.LOADING_IMAGES,
  (payload: {}) => payload
);

export const successLoadImages = createAction(
  ImagesActionTypes.SUCCESS_LOAD_IMAGES,
  (payload: { images: Array<Image> }) => payload
);

export const errorLoadImages = createAction(
  ImagesActionTypes.ERROR_LOAD_IMAGES,
  (payload: { error: string }) => payload
);
