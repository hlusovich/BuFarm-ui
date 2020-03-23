import React, {useState} from 'react';
import {notification} from "antd";

const AuthenticationContext = React.createContext(null);

function AuthenticationProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [headerStatus, setHeaderStatus] = useState(true)
    const [addressChange, setAddressChange] = useState("")
    const [editButtom, setEditButtom] = useState("")
    const [host, setHost] = useState()
    const [mainStatus, setMainStatus] = useState()
    const [cartst, setCartst] = useState(false)
    const [cartView, setCartView] = useState(false)
    const [cart, setCart] = useState([]);
    const [mainPageСondition,setMainPageCondition]=useState(true)
    const addProductToCart = product => {
        const unicProduct = cart.filter(function (number) {
            return number.id == product.id
        })
        if (unicProduct.length > 0) {
            notification.error({message: "продукт в корзину уже добавлен"})
        } else {
            const newCart = cart.concat([product])
            setCart(newCart)
            const jsonCart = JSON.stringify(newCart)
            sessionStorage.setItem("cart", jsonCart)
        }
    };
    const deleteProductFromCart = (productId) => {
        const newCart = cart.filter(product => product.id !== productId);
        setCart(newCart)
        const jsonCart = JSON.stringify(newCart)
        sessionStorage.setItem("cart", jsonCart)

    };

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
                host, setHost,
                mainStatus, setMainStatus,
                cartst, setCartst,
                cartView, setCartView,
                cart,
                deleteProductFromCart,
                addProductToCart,
                setCart,
                setMainPageCondition,
                mainPageСondition
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