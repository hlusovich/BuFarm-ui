import React, {useEffect, useState} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, message} from 'antd';


const CartContext = React.createContext(null);

function CartProvider(props) {
    const [cart, setCart] = useState([]);
    const [cartState,setCartState] = useState(null)
    const [cartButton,setCartButton] = useState(null)
    const [test, setTest] = useState('')
    useEffect(() => {
        if (sessionStorage.getItem("cart")) {
            setCart(JSON.parse(sessionStorage.getItem("cart")))
        }

    }, [])

    const updTest= (value) => {
        setTest(value)
    }


    const addProductToCart = product => {
        const unicProduct = cart.filter(function (number) {
            return number.product.id == product.product.id
        })
        if (unicProduct.length > 0) {
            notification.error({message: "error"})
        } else {
            const newCart =cart.concat([product])
            CartButtomFunction()
            console.log(cartButton+"kkkkkkk")
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
    const CartButtomFunction = ()=>{ if (cartButton == null) {
        setCartButton(true)

    } else {
        if(cartState){
        setState()}
    }


    }

    const updateProduct = product => {
        console.log('55555555')
        console.log(product)
        console.log('55555555')
        const foundIndex = cart.findIndex(x => x.product.id == product.product.id)
        console.log('6')
        console.log(foundIndex)
        console.log('6')
        cart[foundIndex] = product
        const newCart = cart
        setCart(newCart)
        const jsonCart= JSON.stringify(newCart)
        sessionStorage.setItem("cart",jsonCart)

    }
    const setState = ()=>{
        if(cartState){
            setCartState(null)
            console.log("петух")
        }
        else {
            setCartState(true)
            console.log("пидр")
        }
    }


    return (
        <CartContext.Provider
            value={{
                cart,
                addProductToCart,
                updateProduct,
                deleteProductFromCart,
                setState,
                cartState,
                setCartState,
                cartButton,
                setCartButton,
                CartButtomFunction,
                test,
                updTest


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