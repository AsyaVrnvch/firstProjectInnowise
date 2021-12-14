import { AnyAction } from 'redux'
import { ProfileActionTypes } from '../actions/profile'
import { AuthActionTypes } from '../actions/auth'

const initialState = {
  currentUser: {
    email: '',
    username: '',
    imageUrl: '',
    title: '',
  },
  preloader: false,
}

export interface ProfileState {
  currentUser: {
    email: string
    username: string
    imageUrl: string
    title: string
  }
  preloader: boolean
}

const emptyUser = {
  email: '',
  username: '',
  imageUrl: '',
  title: '',
}

export default function profileState(state: ProfileState = initialState, action: AnyAction) {
  switch (action.type) {
    case AuthActionTypes.SUCCESS_SIGN_IN:
      return {
        ...state,
        currentUser: action.payload,
      }

    case AuthActionTypes.SUCCESS_SIGN_OUT:
      return {
        ...state,
        currentUser: emptyUser,
      }

    case ProfileActionTypes.LOADING_AVATAR:
      return {
        ...state,
        preloader: true,
      }

    case ProfileActionTypes.SUCCESS_LOAD_AVATAR:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          imageUrl: action.payload,
        },
        preloader: false,
      }

    case ProfileActionTypes.ERROR_LOAD_AVATAR:
      return {
        ...state,
        preloader: false,
      }

    case ProfileActionTypes.CHANGING_TITLE:
      return {
        ...state,
        preloader: true,
      }

    case ProfileActionTypes.SUCCESS_CHANGE_TITLE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          title: action.payload,
        },
        preloader: false,
      }

    case ProfileActionTypes.ERROR_CHANGE_TITLE:
      return {
        ...state,
        preloader: false,
      }

    default:
      return state
  }
}
