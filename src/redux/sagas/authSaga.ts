import { put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import * as AuthServce from '../../services/AuthService'
import * as AuthActions from '../actions/auth'

export function* checkAuth(action: AnyAction) {
  try {
    const data = yield call(AuthServce.getCurrentUser, action.payload)
    yield put(AuthActions.successSignInAction(data))
  } catch (e) {
    yield put(AuthActions.successSignOutAction())
  }
}

export function* signOut(action: AnyAction) {
  try {
    yield call(AuthServce.signOut)
    yield put(AuthActions.successSignOutAction())
  } catch (e) {
    yield put(AuthActions.errorSignOutAction(e))
  }
}
 
export function* signIn(action: AnyAction) {
  try {
    const { email, password } = action.payload
    const data = yield call(AuthServce.signIn, email, password)
    yield put(AuthActions.successSignInAction(data))
  } catch (e) {
    yield put(AuthActions.errorSignInAction(e))
  }
}

export function* signUp(action: AnyAction) {
  try {
    const { email, password, username } = action.payload
    yield call(AuthServce.signUp, email, password, username)
    yield put(AuthActions.successSignUpAction())
  } catch (e) {
    yield put(AuthActions.errorSignUpAction(e))
  }
}
