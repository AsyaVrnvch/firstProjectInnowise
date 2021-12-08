import Navbar from "./components/shared/Navbar/Navbar";
import ProtectedRoute from "./components/shared/ProtectedRoute/ProtectedRoute";
import { Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import CanvasPage from "./components/pages/Canvas";
import TimeLine from "./components/pages/Timeline";
import { AppRoutes } from "./config/routes";
import { useEffect } from "react";
import { checkingAuth } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import { fb } from "./config/firebase";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fb.auth().onAuthStateChanged(user => {
      if(user){
        const uid = user?.uid;
        dispatch(checkingAuth(uid));
      }
    })
  })

  return (
    <div>
      <Navbar />
      <Route path={AppRoutes.SignIn} exact component={SignIn} />
      <Route path={AppRoutes.SignUp} exact component={SignUp} />
      <ProtectedRoute path={AppRoutes.Main} exact Component={Main} />
      <ProtectedRoute path={AppRoutes.CanvasPage} exact Component={CanvasPage} />
      <Route path={AppRoutes.Timeline} exact component={TimeLine} />
    </div>
  );
}

export default App;
