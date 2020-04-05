import React, {useEffect, useState} from 'react';
import {notification} from 'antd';

const CartContext = React.createContext(null);

function CartProvider(props) {
    const [cart, setCart] = useState([]);
    const [cartState, setCartState] = useState(null)
    const [cartButton, setCartButton] = useState(null)
    useEffect(() => {
        if (sessionStorage.getItem("cart")) {
            setCart(JSON.parse(sessionStorage.getItem("cart")))
        }

    }, [])

      const addProductToCart = product => {
        const unicProduct = cart.filter(function (number) {
            return number.product.id == product.product.id
        })
        if (unicProduct.length > 0) {
            notification.error({message: "error"})
        } else {
            const newCart = cart.concat([product])
            CartButtomFunction()
            console.log(cartButton + "kkkkkkk")
            setCart(newCart)
            const jsonCart = JSON.stringify(newCart)
            sessionStorage.setItem("cart", jsonCart)
        }
    };
    const deleteProductFromCart = (productId) => {
        const newCart = cart.filter(product => product.product.id !== productId);
        setCart(newCart)
        const jsonCart = JSON.stringify(newCart)
        sessionStorage.setItem("cart", jsonCart)

    };
    const CartButtomFunction = () => {
        if (cartButton == null) {
            setCartButton(true)

        } else {
            if (cartState) {
                setState()
            }
        }


    }

    const updateProduct = product => {
        const foundIndex = cart.findIndex(x => x.product.id == product.product.id)
        cart[foundIndex] = product
        const newCart = cart
        setCart(newCart)
        const jsonCart = JSON.stringify(newCart)
        sessionStorage.setItem("cart", jsonCart)

    }
    const setState = () => {
        if (cartState) {
            setCartState(null)
        } else {
            setCartState(true)
        }
    }


    return (
        <CartContext.Provider
            value={{
                addProductToCart,
                updateProduct,
                deleteProductFromCart,
                setState,
                CartButtomFunction,
            }}
            {...props}
        />
    );
}


function useCart() {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useAuthentication must be used within an AuthenticationProvider');
    }
    return context;
}

export {CartContext, CartProvider, useCart};