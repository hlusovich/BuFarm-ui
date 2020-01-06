import React from 'react';
import {useAuthentication} from "../../context/authentication";
import {
    Route,
    Redirect,
} from "react-router-dom";


function PrivateRoute ({ component: Component, ...rest }) {
    const {isAuthenticated} = useAuthentication();
    console.log('2')
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/grabarloh',
                    state: { from: props.location }
                }} />
        )} />
    )
}
export default PrivateRoute;
