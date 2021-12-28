import Navbar from './components/shared/Navbar/Navbar'
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute'
import { Route } from 'react-router-dom'
import SignIn from './components/pages/SignIn/SignIn'
import SignUp from './components/pages/SignUp/SignUp'
import Main from './components/pages/Main/Main'
import CanvasPage from './components/pages/Canvas/Canvas'
import TimeLine from './components/pages/Timeline/Timeline'
import { AppRoutes } from './config/routes'
import { useEffect } from 'react'
import { checkAuth } from './redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { fb } from './config/firebase'
import Preloader from './components/shared/Preloader/Preloader'
import * as preloader from './redux/selectors/preloader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { css } from 'glamor'
import 'firebase/compat/auth'

function App() {
  const dispatch = useDispatch()

  const authPreloader = useSelector(preloader.authPreloader)
  const canvasPreloader = useSelector(preloader.canvasPreloader)
  const imagesPreloader = useSelector(preloader.imagesPreloader)
  const timelinePreloader = useSelector(preloader.timelinePreloader)
  const profilePreloader = useSelector(preloader.profilePreloader)

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user?.uid
        dispatch(checkAuth(uid))
      }
    })
  }, [])

  return (
    <div>
      {(authPreloader ||
        canvasPreloader ||
        imagesPreloader ||
        timelinePreloader ||
        profilePreloader) && <Preloader />}
      <Navbar />
      <div className="content">
        <Route path={AppRoutes.SignIn} exact component={SignIn} />
        <Route path={AppRoutes.SignUp} exact component={SignUp} />
        <ProtectedRoute path={AppRoutes.Main} exact Component={Main} />
        <ProtectedRoute path={AppRoutes.CanvasPage} exact Component={CanvasPage} />
        <Route path={AppRoutes.Timeline} exact component={TimeLine} />
      </div>
      <ToastContainer
        autoClose={4000}
        pauseOnHover={false}
        className={`${css({
          padding: '3px',
          minHeight: '40px',
        })}`}
        bodyClassName={`${css({
          fontSize: '20px',
          fontFamily: 'Calibri',
          padding: '12px',
        })}`}
        progressClassName={`${css({
          background: '#434d65',
        })}`}
      />
    </div>
  )
}

export default App
