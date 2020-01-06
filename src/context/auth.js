import React from 'react';
import FullPageSpinner from '../components/FullPageSpinner';
import api, {
    getTokenFromLocalStorage,
    persistTokenToLocalStorage,
    removeTokenFromLocalStorage,
} from '../api';


const TOKEN_REFRESH_INTERVAL_MIN = 15;
const TOKEN_SEARCH_PARAM = 'user';

const AuthContext = React.createContext(null);

function getUserTokenFromUrl() {
    const url = new URL(window.location.href);
    return url.searchParams.get(TOKEN_SEARCH_PARAM);
}

function getAndPersistUserTokenFromUrlIfExists() {
    const userToken = getUserTokenFromUrl();
    if (userToken) {
        persistTokenToLocalStorage(userToken);
        window.history.replaceState(null, null, window.location.pathname);
    }
    return userToken;
}

function AuthProvider(props) {
    const [accountDetails, setAccountDetails] = React.useState( null);
    const [isPending, setIsPending] = React.useState(true);
    const [persistedToken] = React.useState(() => {
        return getTokenFromLocalStorage();
    });

    const logout = React.useCallback(() => {
        removeTokenFromLocalStorage();
        setIsPending(false);
        setAccountDetails(null);
    }, []);

    const login = React.useCallback(async token => {
        if (token) {
            persistTokenToLocalStorage(token);
            setIsPending(true);
            setIsPending(false);
        }
    }, [fetchAndSetAccountDetails]);

    if (isPending) {
        return <FullPageSpinner/>;
    }

    return (
        <AuthContext.Provider
            value={{
                accountDetails,
                logout,
                login,
            }}
            {...props}
        />
    );
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export {AuthProvider, useAuth, AuthContext};
