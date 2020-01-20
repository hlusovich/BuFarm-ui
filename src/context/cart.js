import React, {useEffect, useState} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, message} from 'antd';

const CartContext = React.createContext(null);

function CartProvider(props) {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (sessionStorage.getItem("cart")) {
            setCart(JSON.parse(sessionStorage.getItem("cart")))
        }

    }, [])


    const addProductToCart = product => {
        const unicProduct = cart.filter(function (number) {
            return number.product.id == product.product.id
        })
        console.log(product.product.id)
        if (unicProduct.length > 0) {
            notification.error({message: "error"})
        } else {
            const newCart =cart.concat([product])
            setCart(newCart)
            const jsonCart= JSON.stringify(newCart)
            sessionStorage.setItem("cart",jsonCart)
        }
    };
    const deleteProductFromCart = (productId) => {
        const newCart = cart.filter(product => product.product.id !== productId);
        setCart(newCart)
        const jsonCart= JSON.stringify(newCart)
        sessionStorage.setItem("cart",jsonCart)

    };

    const updateProduct = product => {
        const foundIndex = cart.findIndex(x => x.id == product.id)
        let newCart = cart
        newCart[foundIndex] = product
        setCart(newCart)
        const jsonCart= JSON.stringify(newCart)
        sessionStorage.setItem("cart",jsonCart)

    }


    return (
        <CartContext.Provider
            value={{
                cart,
                addProductToCart,
                updateProduct,
                deleteProductFromCart,
                // toggleTheme,
                // cartLenght


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