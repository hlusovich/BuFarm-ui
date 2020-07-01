import React from "react";
import MiniCart from "./MiniCart";
import {connect} from "react-redux";
import {deleteProductThunk, getCartThunk} from "../../../BLL/thunk/thunk";
import {compose} from "redux";
import {deleteFromCart, setCartTotal} from "../../../BLL/actionsCreators/actionsCreators";
import {cartSelector, ititializedSelector} from "../../../BLL/selectors/selectors";
import PropTypes from "prop-types";


const MiniCartConteiner = ({setShowCart, showCart, cart, ititialized, deleteProductThunk}) => {
    return (
        <>
            <MiniCart setShowCart={setShowCart} showCart={showCart} products={cart.cart}
                      ititialized={ititialized} total={cart.total}
                      deleteProduct={deleteProductThunk}/>
        </>)
}
const mapStateToProps = (state) => {
    return {
        cart: cartSelector(state),
        ititialized: ititializedSelector(state),
    }
}
MiniCartConteiner.propTypes = {
    setShowCart: PropTypes.func,
    showCart: PropTypes.bool,
    cart: PropTypes.object,
    ititialized: PropTypes.object,
    deleteProductThunk: PropTypes.func
}

export default compose(connect(mapStateToProps, {
    getCartThunk,
    deleteFromCart,
    setCartTotal,
    deleteProductThunk
}))(MiniCartConteiner)