import React, {useState} from "react";
import style from "./CartConteiner.module.css"
import FullMiniCart from "./FullMiniCart/FullMiniCart";
import EmptyMiniCart from "./EmptyMiniCart/EmptyMiniCart";
import PropTypes from "prop-types";


const MiniCart = React.memo(({products, showCart, total, deleteProduct, setShowCart}) => {
    const [showStyle] = useState(style.cartConteiner + " " + style.hide)
    const [showStyleEmptyCart] = useState(style.emptyCart + " " + style.hide)
    return (
        <>
            {products.length ?
                <FullMiniCart products={products} showCart={showCart} deleteProduct={deleteProduct}
                                             setShowCart={setShowCart} showStyle={showStyle} total={total}/> :
                <EmptyMiniCart showCart={showCart} showStyleEmptyCart={showStyleEmptyCart}/>
            }
        </>
    )
})
MiniCart.propTypes = {
    setShowCart: PropTypes.func,
    showCart: PropTypes.bool,
    deleteProduct: PropTypes.func,
    products:PropTypes.array,
    total:PropTypes.number
}
export default MiniCart