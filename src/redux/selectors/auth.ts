import { createSelector } from "reselect";
import * as auth from "../reducers/auth";
import { AppState } from "../reducers";

const authState = (state: AppState): auth.State => state.auth;

export const selectIsAuth = createSelector(authState, (state) => state.isAuth);
export const selectUsername = createSelector(
  authState,
  (state) => state.currentUser.username
);
export const selectAuthError = createSelector(
  authState,
  (state) => state.AuthError
);
export const selectRegistrationInfo = createSelector(
  authState,
  (state) => state.RegInfo
);
