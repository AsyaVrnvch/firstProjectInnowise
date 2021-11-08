import FormButton from '../styledComponents/buttons/formButton';
import Form from '../styledComponents/form/SignForm';
import InputForm from '../styledComponents/form/InputForm';
import LabelForm from '../styledComponents/form/LabelForm';
import Error  from '../styledComponents/Error';
import { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { AUTH_REQUEST } from '../store/users/actions';
import { useHistory } from 'react-router-dom';

function SignIn(){

    const [state, setState] = useState({ email: '', password: '', error:'' })

    const dispatch = useDispatch();

    const history = useHistory();

    const errorAuth= useSelector(( state:RootStateOrAny ) => state.usersReducer.AuthError);

    const handleChange = (event:any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    function isEmpty(){
        let isEmpty = false;
        if(state.email === '' || state.password === ''){
            isEmpty=true;
            setState({
                ...state,
                error:'Введите все поля'
            })
        } 
        else{
            setState({
                email:'',
                password:'',
                error:''
            })
        }
        return isEmpty
    }

    function signIn(){
        if(!isEmpty()){
            dispatch({
                type:AUTH_REQUEST,
                payload:{
                    email:state.email,
                    password:state.password
                }
            })
            history.replace('/main');
        }
    }

    return(
        <div>
            <Form>
                <h3>Sign In</h3>
                <LabelForm>Enter your email:</LabelForm>
                <InputForm 
                    type='text' 
                    name='email' 
                    value={state.email}
                    onChange={handleChange} 
                    placeholder='Email...'/>
                <LabelForm>Enter your password:</LabelForm>
                <InputForm 
                    type='password' 
                    name='password' 
                    value={state.password} 
                    onChange={handleChange}
                    placeholder='Password...'/>
                <Error>{state.error ? (state.error) :errorAuth }</Error>
                <FormButton onClick={() => { signIn() }}>Sign in</FormButton>
            </Form>

        </div>
    )
}

export default SignIn;