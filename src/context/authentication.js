import React, {useState} from 'react';

const AuthenticationContext = React.createContext(null);

function AuthenticationProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState( false);
    const [headerStatus,setHeaderStatus]=useState(window.location.href)
    function logOut(){
        localStorage.removeItem('token');
        setIsAuthenticated(localStorage.getItem("token"))
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                logOut,
                headerStatus,
                setHeaderStatus
            }}
            {...props}
        />
    );
}


function useAuthentication() {
    const context = React.useContext(AuthenticationContext);
    if (context === undefined) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
}

export {AuthenticationContext, AuthenticationProvider, useAuthentication};