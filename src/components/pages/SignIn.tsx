import Button from "../shared/Button/Button";
import Form from "../shared/Form/Form";
import Input from "../shared/Input/Input";
import Label from "../shared/Label/Label";
import Error from "../shared/Error/Error";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signingInAction } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import { selectAuthError } from "../../redux/selectors/auth";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "", error: "" });

  const dispatch = useDispatch();

  const history = useHistory();

  const errorAuth = useSelector(selectAuthError);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  function checkIsEmpty() {
    let isEmpty = false;
    if (state.email === "" || state.password === "") {
      isEmpty = true;
      setState({
        ...state,
        error: "Введите все поля",
      });
    } else {
      setState({
        email: "",
        password: "",
        error: "",
      });
    }
    return isEmpty;
  }

  function signIn() {
    if (!checkIsEmpty()) {
      dispatch(
        signingInAction({
          email: state.email,
          password: state.password,
        })
      );
      history.replace("/main");
    }
  }

  return (
    <div>
      <Form>
        <h3>Sign In</h3>
        <Label>Enter your email:</Label>
        <Input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email..."
        />
        <Label>Enter your password:</Label>
        <Input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password..."
        />
        <Error>{state.error ? state.error : errorAuth}</Error>
        <Button onClick={signIn}>Sign in</Button>
      </Form>
    </div>
  );
}

export default SignIn;
