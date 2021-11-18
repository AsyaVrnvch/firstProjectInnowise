import { AnyAction } from "redux";
import { AuthActionTypes } from "../actions/auth";

const initialState = {
  RegInfo: "",
  AuthError: "",
  isAuth: false,
  currentUser: {
    email: "",
    username: "",
  },
};

export interface State {
  RegInfo: string;
  AuthError: string;
  isAuth: boolean;
  currentUser: {
    email: string;
    username: string;
  };
}

export default function authState(
  state: State = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case AuthActionTypes.SIGNING_UP:
      return state;

    case AuthActionTypes.SUCCESS_SIGN_UP:
      return {
        ...state,
        RegInfo: "Пользователь успешно зарегистрирован",
        AuthError: "",
        currentUser: {
          email: "",
          username: "",
        },
        isAuth: false,
      };

    case AuthActionTypes.ERROR_SIGN_UP:
      return {
        ...state,
        RegInfo: action.payload.error.message,
        AuthError: "",
          currentUser: {
            email: "",
            username: "",
          },
        isAuth: false,
      };

    case AuthActionTypes.SIGNING_IN:
      return state;

    case AuthActionTypes.SUCCESS_SIGN_IN:
      return {
        ...state,
        isAuth: true,
        AuthError: "",
        RegInfo: "",
        currentUser: action.payload
      };

    case AuthActionTypes.ERROR_SIGN_IN:
      return {
        ...state,
        isAuth: false,
        currentUser: {
          email: "",
          username: "",
        },
        RegInfo: "",
        AuthError: action.payload.error,
      };

    case AuthActionTypes.SIGNING_OUT:
      return {
        ...state
      };

    case AuthActionTypes.SUCCESS_SIGN_OUT:
      return {
        ...state,
        RegInfo: "",
        AuthError: "",
        isAuth: false,
        currentUser: {
          email: "",
          username: "",
        },
      };

    case AuthActionTypes.ERROR_SIGN_OUT:
      return {
        ...state,
        AuthError:action.payload
      };

    default:
      return state;
  }
}
