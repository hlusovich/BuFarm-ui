import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {clearCart, removeUser, setUser} from "../../BLL/actionsCreators/actionsCreators";
import {getCartThunk, getUserDataThunk} from "../../BLL/thunk/thunk";
import {cartSelector, userIdSelector} from "../../BLL/selectors/selectors";
import PropTypes from 'prop-types';

const HeaderContainer = ({getCartThunk, cart, isAuth, getUserDataThunk, removeUser, clearCart}) => {

    useEffect(() => {
        getCartThunk(cart)
        getUserDataThunk()
    }, [])
    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("cart")
        removeUser()
        clearCart()
    }
    return <>
        <Header logOut={logOut} isAuth={isAuth} cart={cart}/>
    </>
}
const mapStateToProps = (state) => {
    return {
        isAuth: userIdSelector(state),
        user: state.user,
        cart: cartSelector(state)
    }
}
HeaderContainer.propTypes = {
    getCartThunk: PropTypes.func,
    cart: PropTypes.object,
    setUser: PropTypes.func,
    removeUser: PropTypes.func,
    clearCart: PropTypes.func

}


export default connect(mapStateToProps, {removeUser, setUser, getCartThunk, clearCart,getUserDataThunk})(HeaderContainer)