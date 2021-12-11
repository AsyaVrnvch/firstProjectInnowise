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
import { useDispatch, useSelector } from "react-redux";
import { fb } from "./config/firebase";
import Preloader from "./components/shared/Preloader/Preloader";
import * as preloader from "./redux/selectors/preloader";

function App() {
  const dispatch = useDispatch();

  const authPreloader = useSelector(preloader.authPreloader);
  const canvasPreloader = useSelector(preloader.canvasPreloader);
  const imagesPreloader = useSelector(preloader.imagesPreloader);
  const timelinePreloader = useSelector(preloader.timelinePreloader);
  const profilePreloader = useSelector(preloader.profilePreloader);
  
  useEffect(() => {
    fb.auth().onAuthStateChanged(user => {
      if(user){
        const uid = user?.uid;
        dispatch(checkingAuth(uid));
      }
    })
  },[])

  return (
    <div>
      {
        (authPreloader || canvasPreloader || imagesPreloader || 
          timelinePreloader || profilePreloader) && <Preloader/>
      }
      <Navbar />
      <div className="content">
        <Route path={AppRoutes.SignIn} exact component={SignIn} />
        <Route path={AppRoutes.SignUp} exact component={SignUp} />
        <ProtectedRoute path={AppRoutes.Main} exact Component={Main} />
        <ProtectedRoute path={AppRoutes.CanvasPage} exact Component={CanvasPage} />
        <Route path={AppRoutes.Timeline} exact component={TimeLine} />
      </div>
    </div>
  );
}

export default App;
