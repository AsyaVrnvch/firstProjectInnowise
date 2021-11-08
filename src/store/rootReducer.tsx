import { combineReducers } from 'redux';
import usersReducer from './users/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
    usersReducer,
    authReducer
})