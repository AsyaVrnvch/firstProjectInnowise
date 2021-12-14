import { createAction } from 'redux-actions'

export enum AuthActionTypes {
  SIGNING_IN = '[Auth] SIGNING_IN',
  SUCCESS_SIGN_IN = '[Auth] SUCCESS_SIGN_IN',
  ERROR_SIGN_IN = '[Auth] ERROR_SIGN_IN',

  SIGNING_UP = '[Auth] SIGNING_UP',
  SUCCESS_SIGN_UP = '[Auth] SUCCESS_SIGN_UP',
  ERROR_SIGN_UP = '[Auth] ERROR_SIGN_UP',

  SIGNING_OUT = '[Auth] SIGNING_OUT',
  SUCCESS_SIGN_OUT = '[Auth] SUCCESS_SIGN_OUT',
  ERROR_SIGN_OUT = '[Auth] ERROR_SIGN_OUT',

  CHECKING_AUTH = '[Auth] CHECKING_AUTH',
}

export const checkingAuth = createAction(
  AuthActionTypes.CHECKING_AUTH,
  (payload: { uid: string }) => payload
)

export const signingInAction = createAction(
  AuthActionTypes.SIGNING_IN,
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

export const signingUpAction = createAction(
  AuthActionTypes.SIGNING_UP,
  (payload: { email: string; password: string; username: string }) => payload
)
export const successSignUpAction = createAction(AuthActionTypes.SUCCESS_SIGN_UP)
export const errorSignUpAction = createAction(
  AuthActionTypes.ERROR_SIGN_UP,
  (payload: { error: string }) => payload
)

export const signingOutAction = createAction(AuthActionTypes.SIGNING_OUT)
export const successSignOutAction = createAction(AuthActionTypes.SUCCESS_SIGN_OUT)
export const errorSignOutAction = createAction(
  AuthActionTypes.ERROR_SIGN_OUT,
  (payload: { error: string }) => payload
)
