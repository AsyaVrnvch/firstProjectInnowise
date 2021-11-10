import { Route } from "react-router";
import { Redirect } from "react-router";
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/selectors/auth';


function ProtectedRoute({path, Component, ...rest}){
    
    const isAuth = useSelector(selectIsAuth);
    
    return(
        <Route path={path} {...rest} render={ props => isAuth ? (
            <Component {...props}/>
        ) : (
            <Redirect to='/'/>
        )}/>
    )
}

export default ProtectedRoute