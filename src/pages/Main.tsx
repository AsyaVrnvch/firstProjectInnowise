import React from 'react';
import FormButton from '../styledComponents/buttons/formButton';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { LOG_OUT } from '../store/users/actions';
import { useHistory } from 'react-router-dom';

function Main(){

    const dispatch = useDispatch();

    const history = useHistory();

    const username = useSelector(( state:RootStateOrAny ) => state.usersReducer.currentUser.username);

    function logout(){
        dispatch({type:LOG_OUT})
        history.replace('/')
    }

    return(
        <div>
            <h3>MainPage</h3>
            <p>{username}</p>
            <FormButton onClick={()=>logout()}>Log out</FormButton>
        </div>
    )
}

export default Main;