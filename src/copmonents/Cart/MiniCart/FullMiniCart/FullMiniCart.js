import React from "react";
import style from "../CartConteiner.module.css";
import CartProduct from "../CartProduct/CartProduct";
import MinicartFooter from "../MinicartFooter/MinicartFooter";
import PropTypes from 'prop-types';

const FullMiniCart = ({showCart, showStyle, deleteProduct, total, setShowCart, products}) => {
    return (
        <>
            <div className={showCart ? style.cartConteiner : showStyle}>
                {products.map(product => <CartProduct key={product.id} deleteProduct={deleteProduct} {...product} showCart={showCart}/>)
                }
                <MinicartFooter setShowCart={setShowCart} total={total}/>
            </div>
        </>
    )
}
FullMiniCart.propTypes = {
    showCart: PropTypes.bool,
    showStyle:PropTypes.string,
    setShowCart: PropTypes.func,
    deleteProduct: PropTypes.func,
    products:PropTypes.array,
    total:PropTypes.number,
}
export default FullMiniCart