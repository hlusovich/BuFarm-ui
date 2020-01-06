import React, {useState} from 'react';

const CartContext = React.createContext(null);

function CartProvider(props) {
    const [cart, setCart] = useState([]);
    // const [cartLenght,setcartLenght] = useState(0);


    const addProductToCart = product => {
        // console.log('addProductToCart')
        // console.log(product)
        // let newCart = cart;
        // newCart.push(product)
        // console.log('new cart')
        // console.log(newCart)
        // console.log("cart")
        // console.log(cart)
        setCart(cart.concat([product]))
        // setcartLenght(newCart.length)
    };
    const deleteProductFromCart = productId => {
        const newCart = cart.filter(product => product.id !== productId);
        setCart(newCart)
    };

    const updateProduct = product => {
        const foundIndex = cart.findIndex(x=>x.id==product.id)
        let newCart =cart
        newCart[foundIndex] = product
        setCart(newCart)

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