import React, {useContext} from 'react';

const ThemeContext = React.createContext(null);

function ThemeProvider(props) {
    const [themeValue, setThemeValue] = React.useState( "red");

    const toggleTheme = () => {
        if(themeValue === 'white') {
            setThemeValue('black')
            console.log(themeValue)
        } else {
            setThemeValue('white')
            console.log(themeValue)
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                themeValue,
                toggleTheme
            }}
            {...props}
        />
    );
}

function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export {ThemeContext, ThemeProvider, useTheme};

