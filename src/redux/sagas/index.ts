import { takeEvery, all } from "redux-saga/effects";
import * as authSaga from './authSaga'
import { AuthActionTypes } from "../actions/auth";

export default function* rootSaga() {
  yield all([
    takeEvery(AuthActionTypes.SIGNING_OUT, authSaga.signOutWorker),
    takeEvery(AuthActionTypes.SIGNING_IN, authSaga.signInWorker),
    takeEvery(AuthActionTypes.SIGNING_UP, authSaga.signUpWorker),
  ]);
}
