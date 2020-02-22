import React from 'react';
import {useAuthentication} from "../../context/authentication";
import {
    Route,
    Redirect,
} from "react-router-dom";


function PrivateRoute ({ component: Component, ...rest }) {
    const {isAuthenticated} = useAuthentication();
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: './',
                    state: { from: props.location }
                }} />
        )} />
    )
}
export default PrivateRoute;
