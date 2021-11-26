import Navbar from "./components/modals/Navbar/Navbar";
import ProtectedRoute from "./components/modals/ProtectedRoute/ProtectedRoute";
import { Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import CanvasPage from "./components/pages/Canvas";
import { AppRoutes } from "./config/routes";
import { useEffect } from "react";
import { checkingAuth } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import { fb } from "./config/firebase";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/selectors/auth";

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    fb.auth().onAuthStateChanged(user => {
      if(user){
        const uid = user?.uid;
        dispatch(checkingAuth(uid));
      }
    })
  })

  if(isAuth) return(
    <Redirect to={AppRoutes.Main}/>
  )

  return (
    <div>
      <Navbar />
      <Route path={AppRoutes.SignIn} exact component={SignIn} />
      <Route path={AppRoutes.SignUp} exact component={SignUp} />
      <ProtectedRoute path={AppRoutes.Main} exact Component={Main} />
      <ProtectedRoute path={AppRoutes.CanvasPage} exact Component={CanvasPage} />
    </div>
  );
}

export default App;
