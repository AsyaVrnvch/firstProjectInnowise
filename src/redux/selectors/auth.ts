import { createSelector } from "reselect";
import * as auth from "../reducers/auth";
import { AppState } from "../reducers";


const selectAuthState = (state: AppState):auth.State => state.authState;

export const selectIsAuth = createSelector(
  selectAuthState, 
  (state) => state.isAuth);
export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.currentUser.username
);
export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.AuthError
);
export const selectRegistrationInfo = createSelector(
  selectAuthState,
  (state) => state.RegInfo
);
