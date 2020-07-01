import React, {useState} from "react";
import Title from "../../Title/Tittle";
import EmptyCartPage from "./EmptyCartPage/EmptyCartPage";
import FullCartPage from "./FullCartPage/FullCartPage";
import CartPageFooter from "./CartPageFooter/CartPageFooter";
import PropTypes from 'prop-types';

const CartPage = ({cart, deleteProduct, addresses, changeCount, setCartTotal, total, createOrder, redirect}) => {
    const [id, setId] = useState("")
    const addOrder = (buttonToggle) => {
        createOrder(id, cart, redirect, buttonToggle)
    }

    return (
        <>
            <Title text={"Cart"} url={"/cart"}/>
            {!cart.length && <EmptyCartPage />}
            {cart.length && <><FullCartPage setCartTotal={setCartTotal} changeCount={changeCount} total={total}
                                            deleteProduct={deleteProduct} cart={cart}/>
                <CartPageFooter setId={setId} addresses={addresses} addOrder={addOrder} id={id}/>
            </>}

        </>
    )
}
CartPage.propTypes = {
    cart: PropTypes.array,
    deleteProduct: PropTypes.func,
    addresses: PropTypes.array,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    total: PropTypes.number,
    createOrder: PropTypes.func,
    redirect: PropTypes.func

}
export default CartPage