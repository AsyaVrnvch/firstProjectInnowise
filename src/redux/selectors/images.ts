import { createSelector } from "reselect";
import * as images from "../reducers/images";
import { AppState } from "../reducers";

const selectImagesState = (state: AppState):images.ImagesState => state.imagesState;

export const selectAllImages = createSelector(
  selectImagesState, 
  (state) => state.images);