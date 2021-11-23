import React from "react";
import Button from "../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signingOutAction } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import { selectUsername } from "../../redux/selectors/auth";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const username = useSelector(selectUsername);

  function signOut() {
    dispatch(signingOutAction());
    history.replace("/");
  }

  return (
    <div>
      <h3>MainPage</h3>
      <p>{username}</p>
      <Button onClick={signOut}>Log out</Button>
    </div>
  );
}

export default Main;
