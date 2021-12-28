import { AnyAction } from 'redux'
import { AuthActionTypes } from '../../actions/auth'
import * as Consts from "./consts"

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
    case AuthActionTypes.CHECK_AUTH:
      return {
        ...state,
        preloader: true,
      }

    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        regInfo: '',
        preloader: true,
      }

    case AuthActionTypes.SUCCESS_SIGN_UP:
      return {
        ...state,
        regInfo: Consts.successSignUp,
        authError: '',
        isAuth: false,
        preloader: false,
      }

    case AuthActionTypes.ERROR_SIGN_UP:
      const errorSignUp = Consts.errorText(action.payload);
      return {
        ...state,
        regInfo: errorSignUp,
        authError: '',
        isAuth: false,
        preloader: false,
      }

    case AuthActionTypes.SIGN_IN:
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
      const errorSignIn = Consts.errorText(action.payload);
      return {
        ...state,
        isAuth: false,
        regInfo: '',
        authError: errorSignIn,
        preloader: false,
      }

    case AuthActionTypes.SIGN_OUT:
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
