import { AnyAction } from 'redux'
import { AuthActionTypes } from '../actions/auth'

const initialState = {
  regInfo: '',
  authError: '',
  isAuth: false,
  preloader: false,
}

export interface State {
  regInfo: string
  authError: string
  isAuth: boolean
  preloader: boolean
}

export default function authState(state: State = initialState, action: AnyAction) {
  switch (action.type) {
    case AuthActionTypes.CHECKING_AUTH:
      return {
        ...state,
        preloader: true,
      }

    case AuthActionTypes.SIGNING_UP:
      return {
        ...state,
        regInfo: '',
        preloader: true,
      }

    case AuthActionTypes.SUCCESS_SIGN_UP:
      return {
        ...state,
        regInfo: 'User registered successfully',
        authError: '',
        isAuth: false,
        preloader: false,
      }

    case AuthActionTypes.ERROR_SIGN_UP:
      const errorSignUp =
        action.payload.code === 'auth/email-already-in-use'
          ? 'The email address is already in use by another account'
          : action.payload.code === 'auth/network-request-failed'
          ? 'Network error'
          : action.payload.message
      return {
        ...state,
        regInfo: errorSignUp,
        authError: '',
        isAuth: false,
        preloader: false,
      }

    case AuthActionTypes.SIGNING_IN:
      return {
        ...state,
        authError: '',
        preloader: true,
      }

    case AuthActionTypes.SUCCESS_SIGN_IN:
      return {
        ...state,
        isAuth: true,
        authError: '',
        preloader: false,
      }

    case AuthActionTypes.ERROR_SIGN_IN:
      const errorSignIn =
        action.payload.code === 'auth/wrong-password'
          ? 'The password is invalid'
          : action.payload.code === 'auth/user-not-found'
          ? 'This user is not registered'
          : action.payload.code === 'auth/network-request-failed'
          ? 'Network error'
          : action.payload.message
      return {
        ...state,
        isAuth: false,
        regInfo: '',
        authError: errorSignIn,
        preloader: false,
      }

    case AuthActionTypes.SIGNING_OUT:
      return {
        ...state,
        preloader: true,
      }

    case AuthActionTypes.SUCCESS_SIGN_OUT:
      return {
        ...state,
        regInfo: '',
        authError: '',
        isAuth: false,
        preloader: false,
      }

    case AuthActionTypes.ERROR_SIGN_OUT:
      return {
        ...state,
        authError: action.payload,
        preloader: true,
      }

    default:
      return state
  }
}
