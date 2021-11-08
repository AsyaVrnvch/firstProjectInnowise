import * as actions from './actions';
import { AnyAction } from 'redux';

const initialState={
    isAuth:false,
    currentUser:{
        email:'',
        username:''
    },
    error:''
}

export default function usersReducer(
    state=initialState, 
    action:AnyAction
){
    switch(action.type){
        case actions.AUTH_REQUEST:
            // const currentUser = state.
            return{
                ...state
            }

        default: return state;
    }

}

