import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { Link, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

function App() {

  return (
    <div>
      <Navbar/>
      <Route path='/' exact component={SignIn}/>
      <Route path='/signup' exact component={SignUp}/>
      <ProtectedRoute path='/main' exact Component={Main}/>
    </div>
  );
}

export default App;
