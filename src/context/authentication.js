import React, {useState} from 'react';

const AuthenticationContext = React.createContext(null);

function AuthenticationProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [headerStatus, setHeaderStatus] = useState(window.location.href)
    const [addressChange, setAddressChange] = useState("")
    const [editButtom, setEditButtom] = useState("")
    const [host, setHost] = useState()
    const [mainStatus, setMainStatus] = useState()

    function logOut() {
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
                setHeaderStatus,
                addressChange,
                setAddressChange,
                editButtom, setEditButtom,
                host,setHost,
                mainStatus,setMainStatus
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