import SignInForm from "../shared/SignInForm/SignInForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/selectors/auth";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../config/routes";

const SignIn: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const history = useHistory();

  useEffect(() => {
    if(isAuth) {
      history.replace(AppRoutes.Main);
    }
  }, [isAuth])

  return(
    <SignInForm/>
  )
}

export default SignIn;
