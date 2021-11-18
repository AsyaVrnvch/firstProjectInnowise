import { put, call } from 'redux-saga/effects';
import { AnyAction } from "redux";
import * as AuthServce from "../../services/AuthService";
import * as AuthActions from "../actions/auth";

export function* signOutWorker( action: AnyAction ) {
    try{
        yield call(AuthServce.signOut);
        yield put(AuthActions.successSignOutAction());
    }
    catch(e){
        yield put(AuthActions.errorSignOutAction(e));
    }
}

export function* signInWorker( action: AnyAction ) {
    try{
        let data = yield call(
            AuthServce.signIn,
            action.payload.email, 
            action.payload.password);
        yield put(AuthActions.successSignInAction(data));
    }
    catch(e){
        yield put(AuthActions.errorSignInAction(e));
    }
}

export function* signUpWorker( action: AnyAction ) {
    try{
        yield call(
            AuthServce.signUp,
            action.payload.email, 
            action.payload.password,
            action.payload.username);
        yield put(AuthActions.successSignUpAction());
    }
    catch(e){
        console.log(e)
        yield put(AuthActions.errorSignUpAction({ error: e }));
    }
}