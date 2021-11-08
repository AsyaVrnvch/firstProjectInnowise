import { AnyAction } from 'redux';
import * as actions from './actions';

const initialState={
    users:[{
        email:'',
        password:'',
        username:''
    }],
    RegInfo:'',
    AuthError:'',
    isAuth:false,
    currentUser:{
        email:'',
        username:''
    },
}

export default function usersReducer(
    state=initialState, 
    action:AnyAction
){
    switch(action.type){
        case actions.REGISTRATION_REQUEST:
            const registeredUser = state.users.find( user => user.email === action.payload.email)
            if(!registeredUser){
                return{
                    ...state,
                    users:[
                        ...state.users,
                        action.payload
                    ],
                    RegInfo:'Пользователь успешно зарегистрирован',
                    AuthError:''
                }
            }
            return{
                ...state,
                RegInfo:'Данный пользователь уже зарегистрирован', 
                AuthError:''
            }
            
        case actions.REGISTRATION_SUCCESS:
            console.log('REGISTRATION_SUCCESS');
            return state
        case actions.REGISTRATION_FAILURE:
            console.log('REGISTRATION_FAILURE');
            return state

        case actions.AUTH_REQUEST:
            let errorInfo='';
            const current = state.users.find( user => user.email===action.payload.email)
            if(current){
                if(current.password === action.payload.password){
                    return{
                        ...state,
                        isAuth:true,
                        currentUser:current,
                        AuthError:'',
                        RegInfo:''
                    }
                }
                else{
                    errorInfo='Проверьте данные. Пароли не совпадают';
                }
            }
            else{
                errorInfo='Данный пользователь не зарегистрирован';
            }
            return{
                ...state,
                isAuth:false,
                AuthError:errorInfo,
                RegInfo:''
            }

        case actions.LOG_OUT:
            return{
                ...state, 
                RegInfo:'',
                AuthError:'',
                isAuth:false,
                currentUser:{
                    email:'',
                    username:''
                },
            }

        default: return state;
    }

}