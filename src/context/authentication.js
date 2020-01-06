import React from 'react';

const AuthenticationContext = React.createContext(null);

function AuthenticationProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState( false);

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
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