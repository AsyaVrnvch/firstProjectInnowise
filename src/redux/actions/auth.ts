import { createAction } from 'redux-actions';

export enum AuthActionTypes {
    SIGNING_IN = '[Auth] SIGNING_IN',
    SUCCESS_SIGN_IN = '[Auth] SUCCESS_SIGN_IN',
    ERROR_SIGN_IN = '[Auth] ERROR_SIGN_IN',

    SIGNING_UP = '[Auth] SIGNING_UP',
    SUCCESS_SIGN_UP='[Auth] SUCCESS_SIGN_UP',
    ERROR_SIGN_UP='[Auth] ERROR_SIGN_UP',

    LOG_OUT='[Auth] LOG_OUT'
}

export const signingInAction = createAction(AuthActionTypes.SIGNING_IN, (payload:{ email:string, password:string }) => payload);
export const successSignInAction = createAction(AuthActionTypes.SUCCESS_SIGN_IN, (payload:{ email:string, username:string }) => payload);
export const errorSignInAction = createAction(AuthActionTypes.ERROR_SIGN_IN, (payload: { error: string }) => payload);

export const signingUpAction = createAction(AuthActionTypes.SIGNING_UP, (payload:{ email:string, password:string, username:string }) => payload);
export const successSignUpAction = createAction(AuthActionTypes.SUCCESS_SIGN_UP);
export const errorSignUpAction = createAction(AuthActionTypes.ERROR_SIGN_UP, (payload: { error: string }) => payload);

export const logOutAction = createAction(AuthActionTypes.LOG_OUT);
