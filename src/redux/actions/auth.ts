import { createAction } from 'redux-actions'

export enum AuthActionTypes {
  SIGN_IN = '[Auth] SIGN_IN',
  SUCCESS_SIGN_IN = '[Auth] SUCCESS_SIGN_IN',
  ERROR_SIGN_IN = '[Auth] ERROR_SIGN_IN',

  SIGN_UP = '[Auth] SIGN_UP',
  SUCCESS_SIGN_UP = '[Auth] SUCCESS_SIGN_UP',
  ERROR_SIGN_UP = '[Auth] ERROR_SIGN_UP',

  SIGN_OUT = '[Auth] SIGN_OUT',
  SUCCESS_SIGN_OUT = '[Auth] SUCCESS_SIGN_OUT',
  ERROR_SIGN_OUT = '[Auth] ERROR_SIGN_OUT',

  CHECK_AUTH = '[Auth] CHECK_AUTH',
}

export const checkAuth = createAction(
  AuthActionTypes.CHECK_AUTH,
  (payload: { uid: string }) => payload
)

export const signInAction = createAction(
  AuthActionTypes.SIGN_IN,
  (payload: { email: string; password: string }) => payload
)
export const successSignInAction = createAction(
  AuthActionTypes.SUCCESS_SIGN_IN,
  (payload: { email: string; username: string; imageUrl: string }) => payload
)
export const errorSignInAction = createAction(
  AuthActionTypes.ERROR_SIGN_IN,
  (payload: { error: string }) => payload
)

export const signUpAction = createAction(
  AuthActionTypes.SIGN_UP,
  (payload: { email: string; password: string; username: string }) => payload
)
export const successSignUpAction = createAction(AuthActionTypes.SUCCESS_SIGN_UP)
export const errorSignUpAction = createAction(
  AuthActionTypes.ERROR_SIGN_UP,
  (payload: { error: string }) => payload
)

export const signOutAction = createAction(AuthActionTypes.SIGN_OUT)
export const successSignOutAction = createAction(AuthActionTypes.SUCCESS_SIGN_OUT)
export const errorSignOutAction = createAction(
  AuthActionTypes.ERROR_SIGN_OUT,
  (payload: { error: string }) => payload
)
