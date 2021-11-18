import Button from "../../shared/Button/Button";
import Form from "../../shared/Form/Form";
import Input from "../../shared/Input/Input";
import Label from "../../shared/Label/Label";
import Error from "../../shared/Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { signingInAction } from "../../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import { selectAuthError } from "../../../redux/selectors/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "./SignInSchema";

function SignInForm() {
  const dispatch = useDispatch();

  const history = useHistory();

  const errorAuth = useSelector(selectAuthError);

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignInSchema)
  });

  const onSubmit = ( data ) => {
    dispatch(
        signingInAction({
          email: data.email,
          password: data.password,
        })
      );
    history.replace("/main");
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign In</h3>
        <Label>Enter your email:</Label>
        <Controller
            control={control}
            name='email'
            render={({ 
              field: { onChange }
            })=>(
              <Input type='text' onChange={onChange} placeholder="Email..."/>
            )}
          />
        <Error>{errors.email ? errors.email.message : ''}</Error>
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
        <Error>{errors.password ? errors.password.message : errorAuth}</Error>
        <Button>Sign in</Button>
      </Form>
    </div>
  );
}

export default SignInForm;
