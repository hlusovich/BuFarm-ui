import React, {useEffect} from "react";
import {connect} from "react-redux";
import CartPage from "./CartPage";
import {changeCount, clearCart, deleteFromCart, setCartTotal} from "../../../BLL/actionsCreators/actionsCreators";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {createOrder, getUserDataThunk} from "../../../BLL/thunk/thunk";
import {withRouter} from "react-router-dom";
import {addresseSelector, cartSelector} from "../../../BLL/selectors/selectors";
import PropTypes from  'prop-types';


const CartPageConteiner = React.memo(({cart, history,getUserDataThunk, ...props}) => {
    useEffect(() => {
        getUserDataThunk()
    }, [])
    const deleteProduct = (id) => {
        deleteFromCart(id)
        setCartTotal()
        const cart = JSON.parse(localStorage.getItem("cart")).filter(item => +item.id !== id)
        if (cart.length === 0) {
            localStorage.removeItem("cart")
        } else {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }
    const redirect=()=>{
        history.push("/")
    }

    return (
        <CartPage redirect={redirect}  cart={cart.cart} deleteProduct={deleteProduct} total={cart.total} {...props} />)

})
const mapStateToProps = (state) => {
    return {
        cart: cartSelector(state),
        addresses: addresseSelector(state)
    }
}

CartPageConteiner.propTypes={
    cart:PropTypes.object,
    getUserDataThunk:PropTypes.func,
    history:PropTypes.object
}
export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {
    deleteFromCart,
    getUserDataThunk,
    changeCount,
    setCartTotal,
    clearCart,
    createOrder
}))((CartPageConteiner))