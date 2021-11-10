import { combineReducers } from 'redux';
import authState, { State } from './auth';

export interface AppState {
    auth:State
}

export default combineReducers({
    authState
})
