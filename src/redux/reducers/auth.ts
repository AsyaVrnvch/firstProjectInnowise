import { AnyAction } from "redux";
import { AuthActionTypes } from "../actions/auth";

const initialState = {
  regInfo: "",
  authError: "",
  isAuth: false,
  currentUser: {
    email: "",
    username: "",
  },
};

export interface State {
  regInfo: string;
  authError: string;
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
        regInfo: "Пользователь успешно зарегистрирован",
        authError: "",
        currentUser: {
          email: "",
          username: "",
        },
        isAuth: false,
      };

    case AuthActionTypes.ERROR_SIGN_UP:
      return {
        ...state,
        regInfo: action.payload.error.message,
        authError: "",
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
        authError: "",
        regInfo: "",
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
        regInfo: "",
        authError: action.payload.error,
      };

    case AuthActionTypes.SIGNING_OUT:
      return {
        ...state
      };

    case AuthActionTypes.SUCCESS_SIGN_OUT:
      return {
        ...state,
        regInfo: "",
        authError: "",
        isAuth: false,
        currentUser: {
          email: "",
          username: "",
        },
      };

    case AuthActionTypes.ERROR_SIGN_OUT:
      return {
        ...state,
        authError:action.payload
      };

    default:
      return state;
  }
}
