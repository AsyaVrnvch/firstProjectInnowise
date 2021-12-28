import { createSelector } from 'reselect'
import * as auth from '../reducers/auth/auth'
import * as canvas from '../reducers/canvas/canvas'
import * as images from '../reducers/images'
import * as timeline from '../reducers/timeline'
import * as profile from '../reducers/profile'
import { AppState } from '../reducers'

const selectAuthState = (state: AppState): auth.State => state.authState
const selectCanvasState = (state: AppState): canvas.CanvasState => state.canvasState
const selectImagesState = (state: AppState): images.ImagesState => state.imagesState
const selectTimelineState = (state: AppState): timeline.TimelineState => state.timelineState
const selectProfileState = (state: AppState): profile.ProfileState => state.profileState

export const authPreloader = createSelector(selectAuthState, (state) => state.preloader)

export const canvasPreloader = createSelector(selectCanvasState, (state) => state.preloader)

export const imagesPreloader = createSelector(selectImagesState, (state) => state.preloader)

export const timelinePreloader = createSelector(selectTimelineState, (state) => state.preloader)

export const profilePreloader = createSelector(selectProfileState, (state) => state.preloader)
