import React from "react";
import Button from "../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import { selectUsername } from "../../redux/selectors/auth";

function Main() {
  const dispatch = useDispatch();

  const history = useHistory();

  const username = useSelector(selectUsername);

  function logout() {
    dispatch(logOutAction());
    history.replace("/");
  }

  return (
    <div>
      <h3>MainPage</h3>
      <p>{username}</p>
      <Button onClick={logout}>Log out</Button>
    </div>
  );
}

export default Main;
