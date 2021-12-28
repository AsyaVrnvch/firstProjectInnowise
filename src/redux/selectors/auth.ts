import { createSelector } from 'reselect'
import * as auth from '../reducers/auth/auth'
import { AppState } from '../reducers'

const selectAuthState = (state: AppState): auth.State => state.authState

export const selectIsAuth = createSelector(selectAuthState, (state) => state.isAuth)

export const selectAuthError = createSelector(selectAuthState, (state) => state.authError)

export const selectRegistrationInfo = createSelector(selectAuthState, (state) => state.regInfo)
