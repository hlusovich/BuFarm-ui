import React from "react";
import ProductInfo from "./ProductInfo";
import {connect} from "react-redux";
import {deleteCommentThunk, getCartThunk, setProductInfoThunk} from "../../BLL/thunk/thunk";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {changeCount} from "../../BLL/actionsCreators/actionsCreators";
import {productInfoSelector, userIdSelector} from "../../BLL/selectors/selectors";
import Title from "../Title/Tittle";
import PropTypes from "prop-types";

const ProductInfoContainer = ({setProductInfoThunk, match, getCartThunk, isAuth, productInfo, deleteCommentThunk}) => {
    const setProductInfo = async () => {
        setProductInfoThunk(match.params.id)
    }
    const addToCart = (count) => {
        const checkCart = (item) => {
            if (item.id === match.params.id) {
                item.count = count
            }
            return item
        }
        if (localStorage.getItem("cart")) {
            const cart = JSON.parse(localStorage.getItem("cart"));
            if (cart.filter(item => +item.id === +match.params.id).length) {
                const newCart = cart.map(item =>
                    checkCart(item))
                localStorage.setItem("cart", JSON.stringify(newCart));
            } else {
                const newCart = cart.concat([{id: match.params.id, count}])
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
        } else {
            localStorage.setItem("cart", JSON.stringify([{id: match.params.id, count}]));
        }
        getCartThunk()
    }
    return (
        <>
            <Title text={"Product Info"} url={`/product/${match.params.id}`} textMedianum={"Products"}
                   urlMedianum={"/products"}/>
            <ProductInfo isAuth={isAuth} setProductInfo={setProductInfo} addToCart={addToCart}
                         productInfo={productInfo} deleteComment={deleteCommentThunk} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        productInfo: productInfoSelector(state),
        isAuth: userIdSelector(state)
    }
}
ProductInfoContainer.propTypes = {
    setProductInfoThunk: PropTypes.func,
    match: PropTypes.object,
    getCartThunk: PropTypes.func,
    isAuth: PropTypes.string,
    productInfo: PropTypes.object,
    deleteCommentThunk: PropTypes.func

}
export default compose(connect(mapStateToProps, {
    setProductInfoThunk, getCartThunk,
    deleteCommentThunk, changeCount
}), withRouter)(ProductInfoContainer)
