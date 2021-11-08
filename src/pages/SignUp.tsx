import { useState } from "react";
import FormButton from '../styledComponents/buttons/formButton';
import Form from '../styledComponents/form/SignForm';
import InputForm from '../styledComponents/form/InputForm';
import LabelForm from '../styledComponents/form/LabelForm';
import Error from '../styledComponents/Error';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { REGISTRATION_REQUEST } from '../store/users/actions';
import InfoModal from "../styledComponents/InfoModal";

function SignUp(){

    const regInfo = useSelector(( state:RootStateOrAny ) => state.usersReducer.RegInfo);

    const dispatch = useDispatch();

    const [state, setState] = useState({ 
        email: '', 
        password: '', 
        repeatPassword:'', 
        username:'',
    })

    const [errorState, setErrorState] = useState({
        email: '', 
        password: '', 
        repeatPassword:'', 
        username:'',
    })

    const  [modalState, setModalState] = useState( false );

    const handleChange = (event:any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    function isEmpty(){
        const error = {
            email:'',
            password:'',
            repeatPassword:'',
            username:''
        };
        let isEmpty = false;
        for (const elem in state) {
            if(state[elem] == ''){
                error[elem] ='Это поле обязательно для заполнения';
                isEmpty = true;
            }
            setErrorState({ ...error })
        }
        return isEmpty
    }

    function validatePassword(){
        let isValid = true;
        if(state.password.length < 6){
            isValid=false;
            setErrorState({
                email: '', 
                password:'Пароль должен состоять минимум из 6 символов',
                repeatPassword:'', 
                username:'',
            })
        }
        else{
            if(state.password !== state.repeatPassword){
                isValid=false;
                setErrorState({
                    email: '', 
                    password:'',
                    repeatPassword:'Пароли не совпадают',
                    username:'',
                })
            }
        }
        return isValid
    }

    function signUp(){
        if(!isEmpty()){
            if(validatePassword()){
                setState({
                    email: '', 
                    password: '', 
                    repeatPassword:'', 
                    username:''
                })
                dispatch({
                    type:REGISTRATION_REQUEST,
                    payload:{
                        email: state.email, 
                        password: state.password, 
                        username: state.username
                    }});
                setModalState(true)
            }
        }
    }

    function closeModal(){
        setModalState(false)
    }

    return(
        <div>
            <Form>
                <h3>Sign Up</h3> 
                <LabelForm>Enter your email:</LabelForm>
                <InputForm 
                    type='text' 
                    name='email' 
                    value={state.email}
                    onChange={handleChange} 
                    placeholder='Email...'/>
                <Error>{errorState.email}</Error>
                <LabelForm>Enter your password:</LabelForm>
                <InputForm 
                    type='password' 
                    name='password' 
                    value={state.password}
                    onChange={handleChange} 
                    placeholder='Password...'/>
                <Error>{errorState.password}</Error>
                <LabelForm>Repeate your email:</LabelForm>
                <InputForm 
                    type='password' 
                    name='repeatPassword'
                    value={state.repeatPassword}
                    onChange={handleChange}  
                    placeholder='Repeate password...'/>
                <Error>{errorState.repeatPassword}</Error>
                <LabelForm>Enter your username:</LabelForm>
                <InputForm 
                    type='text' 
                    name='username' 
                    value={state.username}
                    onChange={handleChange} 
                    placeholder='Username...'/>
                <Error>{errorState.username}</Error>
                <FormButton onClick={ () => {signUp()} }>Sign up</FormButton>
            </Form>
            { modalState ? (
                <InfoModal 
                    title='Регистрация'
                    content={regInfo}
                    onClose={() => closeModal()}
                />
            ) : ''}
        </div>
    )
}

export default SignUp;