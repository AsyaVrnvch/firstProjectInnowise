import { createSelector } from "reselect";
import * as images from "../reducers/images";
import { AppState } from "../reducers";

const selectImagesState = (state: AppState):images.ImagesState => state.imagesState;
const selectTimelineState = (state: AppState):images.ImagesState => state.timelineState;

export const selectMyImages = createSelector(
  selectImagesState, 
  (state) => state.images);

export const selectAllImages = createSelector(
  selectTimelineState, 
  (state) => state.images);