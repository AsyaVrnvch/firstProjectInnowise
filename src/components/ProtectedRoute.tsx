import { Route } from "react-router";
import { Redirect } from "react-router";
import { useSelector, RootStateOrAny } from 'react-redux';

export default function ProtectedRoute({path, Component, ...rest}){
    
    const isAuth = useSelector(( state:RootStateOrAny ) => state.usersReducer.isAuth);
    
    return(
        <Route path={path} {...rest} render={ props => isAuth ? (
            <Component {...props}/>
        ) : (
            <Redirect to='/'/>
        )}/>
    )
}