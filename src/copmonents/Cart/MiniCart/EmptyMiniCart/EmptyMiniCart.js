import React from "react";
import style from "../CartConteiner.module.css";
import PropTypes from 'prop-types';
import FullMiniCart from "../FullMiniCart/FullMiniCart";
const EmptyMiniCart=({showCart,showStyleEmptyCart})=>{
    return(
        <><div className={showCart ? style.emptyCart : showStyleEmptyCart}>No products in the cart.</div>
            </>
    )
}
FullMiniCart.propTypes = {
    showCart: PropTypes.bool,
    showStyleEmptyCart:PropTypes.string,
}
export default EmptyMiniCart