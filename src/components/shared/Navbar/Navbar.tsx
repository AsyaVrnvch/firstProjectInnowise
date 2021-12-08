import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./Navbar.Styles";
import { AppRoutes } from "../../../config/routes";
import { selectIsAuth } from "../../../redux/selectors/auth";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signingOutAction } from "../../../redux/actions/auth";

const Navbar: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const history = useHistory();


  function signOut() {
    dispatch(signingOutAction());
    history.replace("/");
  }

  if(!isAuth){
    return (
      <Styles.NavbarContainer>
        <Styles.NavbarLinkContainer>
          <Link to={AppRoutes.Timeline}>TimeLine</Link>
        </Styles.NavbarLinkContainer>
        <Styles.NavbarLinkContainer>
          <Link to={AppRoutes.SignIn}>Sign In</Link>
        </Styles.NavbarLinkContainer>
        <Styles.NavbarLinkContainer>
          <Link to={AppRoutes.SignUp}>Sign Up</Link>
        </Styles.NavbarLinkContainer>
      </Styles.NavbarContainer>
    );
  }
  
  return (
    <Styles.NavbarContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.Main}>Main page</Link>
      </Styles.NavbarLinkContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.Timeline}>TimeLine</Link>
      </Styles.NavbarLinkContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.CanvasPage}>Canvas page</Link>
      </Styles.NavbarLinkContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.SignIn} onClick={signOut}>Log out</Link>
      </Styles.NavbarLinkContainer>
    </Styles.NavbarContainer>
  );
};

export default Navbar;
