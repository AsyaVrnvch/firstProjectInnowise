import { useState } from "react";
import Button from "../../shared/Button/Button";
import Form from "../../shared/Form/Form";
import Input from "../../shared/Input/Input";
import Label from "../../shared/Label/Label";
import Error from "../../shared/Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { signingUpAction } from "../../../redux/actions/auth";
import InfoModal from "../../modals/InfoModal/InfoModal";
import { selectRegistrationInfo } from "../../../redux/selectors/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./SignUpSchema";

const SignUpForm: React.FC = () => {
  const regInfo = useSelector(selectRegistrationInfo);

  const dispatch = useDispatch();

  const [modalState, setModalState] = useState(false);

  function closeModal() {
    setModalState(false);
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignUpSchema)
  });

  const onSubmit = ( data: {
    email:string,
    password:string,
    repeatPassword:string,
    username:string
  } ) => {
    dispatch(
      signingUpAction({
        email: data.email,
        password: data.password,
        username: data.username,
      })
    );
    setModalState(true);
  }

  return (
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Sign Up</h3>
          <Label>Enter your email:</Label>
          <Controller
            control={control}
            name='email'
            render={({ 
              field: { onChange }
            })=>(
              <Input type="text" onChange={onChange} placeholder="Email..."/>
            )}
          />
          <Error>{errors.email?.message}</Error>
          <Label>Enter your password:</Label>
          <Controller
            control={control}
            name='password'
            render={({ 
              field: { onChange }
            })=>(
              <Input type="password" onChange={onChange} placeholder="Password..."/>
            )}
          />
          <Error>{errors.password?.message}</Error>
          <Label>Repeate your email:</Label>
          <Controller
            control={control}
            name='repeatPassword'
            render={({ 
              field: { onChange }
            })=>(
              <Input type='password' onChange={onChange} placeholder="Repeate password..."/>
            )}
          />
          <Error>{errors.repeatPassword?.message}</Error>
          <Label>Enter your username:</Label>
          <Controller
            control={control}
            name='username'
            render={({ 
              field: { onChange }
            })=>(
              <Input type='text' onChange={onChange} placeholder="Username..."/>
            )}
          />
          <Error>{errors.username?.message}</Error>
          <Button>Sign up</Button>
        </Form>
      {modalState &&
        <InfoModal title="Регистрация" content={regInfo} onClose={closeModal} />
      }
    </div>
  );
}

export default SignUpForm;
