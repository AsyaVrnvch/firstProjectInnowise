import { useState } from "react";
import Button from "../shared/Button/Button";
import Form from "../shared/Form/Form";
import Input from "../shared/Input/Input";
import Label from "../shared/Label/Label";
import Error from "../shared/Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { signingUpAction } from "../../redux/actions/auth";
import InfoModal from "../shared/InfoModal/InfoModal";
import { selectRegistrationInfo } from "../../redux/selectors/auth";

function SignUp() {
  const regInfo = useSelector(selectRegistrationInfo);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
  });

  const [errorState, setErrorState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
  });

  const [modalState, setModalState] = useState(false);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  function checkIsEmpty() {
    const error = {
      email: "",
      password: "",
      repeatPassword: "",
      username: "",
    };
    let isEmpty = false;
    for (const elem in state) {
      if (state[elem] === "") {
        error[elem] = "Это поле обязательно для заполнения";
        isEmpty = true;
      }
      setErrorState({ ...error });
    }
    return isEmpty;
  }

  function validatePassword() {
    let isValid = true;
    if (state.password.length < 6) {
      isValid = false;
      setErrorState({
        email: "",
        password: "Пароль должен состоять минимум из 6 символов",
        repeatPassword: "",
        username: "",
      });
    } else {
      if (state.password !== state.repeatPassword) {
        isValid = false;
        setErrorState({
          email: "",
          password: "",
          repeatPassword: "Пароли не совпадают",
          username: "",
        });
      }
    }
    return isValid;
  }

  function signUp() {
    if (!checkIsEmpty()) {
      if (validatePassword()) {
        setState({
          email: "",
          password: "",
          repeatPassword: "",
          username: "",
        });
        dispatch(
          signingUpAction({
            email: state.email,
            password: state.password,
            username: state.username,
          })
        );
        setModalState(true);
      }
    }
  }

  function closeModal() {
    setModalState(false);
  }

  return (
    <div>
      <Form>
        <h3>Sign Up</h3>
        <Label>Enter your email:</Label>
        <Input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email..."
        />
        <Error>{errorState.email}</Error>
        <Label>Enter your password:</Label>
        <Input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password..."
        />
        <Error>{errorState.password}</Error>
        <Label>Repeate your email:</Label>
        <Input
          type="password"
          name="repeatPassword"
          value={state.repeatPassword}
          onChange={handleChange}
          placeholder="Repeate password..."
        />
        <Error>{errorState.repeatPassword}</Error>
        <Label>Enter your username:</Label>
        <Input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username..."
        />
        <Error>{errorState.username}</Error>
        <Button
          onClick={() => {
            signUp();
          }}
        >
          Sign up
        </Button>
      </Form>
      {modalState ? (
        <InfoModal title="Регистрация" content={regInfo} onClose={closeModal} />
      ) : (
        ""
      )}
    </div>
  );
}

export default SignUp;
