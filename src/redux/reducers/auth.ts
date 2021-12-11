import { AnyAction } from "redux";
import { AuthActionTypes } from "../actions/auth";

const initialState = {
  regInfo: "",
  authError: "",
  isAuth: false,
  preloader: false,
};

export interface State {
  regInfo: string;
  authError: string;
  isAuth: boolean;
  preloader: boolean;
}

export default function authState(
  state: State = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case AuthActionTypes.CHECKING_AUTH:
      return {
        ...state,
        preloader: true,
      };

    case AuthActionTypes.SIGNING_UP:
      return {
        ...state,
        regInfo:"",
        preloader: true,
      };

    case AuthActionTypes.SUCCESS_SIGN_UP:
      return {
        ...state,
        regInfo: "Пользователь успешно зарегистрирован",
        authError: "",
        isAuth: false,
        preloader: false,
      };

    case AuthActionTypes.ERROR_SIGN_UP:
      return {
        ...state,
        regInfo: action.payload.error.message,
        authError: "",
        isAuth: false,
        preloader: false,
      };

    case AuthActionTypes.SIGNING_IN:
      return {
        ...state,
        preloader: true,
      };

    case AuthActionTypes.SUCCESS_SIGN_IN:
      return {
        ...state,
        isAuth: true,
        authError: "",
        preloader: false,
      };

    case AuthActionTypes.ERROR_SIGN_IN:
      return {
        ...state,
        isAuth: false,
        regInfo: "",
        authError: action.payload.error,
        preloader: false,
      };

    case AuthActionTypes.SIGNING_OUT:
      return {
        ...state,
        preloader: true,
      };

    case AuthActionTypes.SUCCESS_SIGN_OUT:
      return {
        ...state,
        regInfo: "",
        authError: "",
        isAuth: false,
        preloader: false,
      };

    case AuthActionTypes.ERROR_SIGN_OUT:
      return {
        ...state,
        authError:action.payload,
        preloader: true,
      };

    default:
      return state;
  }
}
