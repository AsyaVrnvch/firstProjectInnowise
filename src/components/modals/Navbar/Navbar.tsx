import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./Navbar.Styles";
import { AppRoutes } from "../../../config/routes";

const Navbar: React.FC = () => {
  return (
    <Styles.NavbarContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.Main}>Main page</Link>
      </Styles.NavbarLinkContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.SignIn}>Sign In</Link>
      </Styles.NavbarLinkContainer>
      <Styles.NavbarLinkContainer>
        <Link to={AppRoutes.SignUp}>Sign Up</Link>
      </Styles.NavbarLinkContainer>
    </Styles.NavbarContainer>
  );
};

export default Navbar;
