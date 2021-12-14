import { createSelector } from 'reselect'
import * as profile from '../reducers/profile'
import { AppState } from '../reducers'

const selectProfileState = (state: AppState): profile.ProfileState => state.profileState

export const selectAvatar = createSelector(
  selectProfileState,
  (state) => state.currentUser.imageUrl
)

export const selectTitle = createSelector(selectProfileState, (state) => state.currentUser.title)

export const selectUsername = createSelector(
  selectProfileState,
  (state) => state.currentUser.username
)
