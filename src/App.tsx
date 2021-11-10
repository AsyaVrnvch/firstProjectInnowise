import Navbar from './components/modals/Navbar/Navbar';
import ProtectedRoute from './components/modals/ProtectedRoute/ProtectedRoute';
import { Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Main from './components/pages/Main';
import { AppRoutes } from './config/routes'

function App() {

  return (
    <div>
      <Navbar/>
      <Route path = { AppRoutes.SignIn } exact component = { SignIn }/>
      <Route path = { AppRoutes.SignUp } exact component = { SignUp }/>
      <ProtectedRoute path = { AppRoutes.Main } exact Component = { Main }/>
    </div>
  );
}

export default App;
