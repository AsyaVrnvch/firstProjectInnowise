import { Route } from 'react-router'
import { Redirect, RouteProps } from 'react-router'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../../redux/selectors/auth'

interface ProtectedRouteProps extends RouteProps {
  Component: React.ComponentType<RouteProps>
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, Component, ...rest }) => {
  const isAuth = useSelector(selectIsAuth)

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}

export default ProtectedRoute
