import React from "react";
import style from "../ProductInfo.module.css";
import Counter from "../Counter/Counter";
import ProductInfoButton from "../ProductInfoButton/ProductinfoButton";
import PropTypes from "prop-types";

const ProductInfoData = ({productInfo, count, setCount, addToCart, isAuth}) => {
    return (
        <>
            <h1>{productInfo.name} </h1>
            <h2>${productInfo.price}</h2>
            <div>{productInfo.info}</div>
            <Counter count={count} setCount={setCount}/>
            {isAuth &&
            <ProductInfoButton text={"Add to cart"} state={count !==0 ? false : true} style={style.addToCartButton}
                               buttonFunction={addToCart} count={count}/>}
        </>
    )
}
ProductInfoButton.propTypes = {
    productInfo: PropTypes.object,
    count: PropTypes.number,
    setCount: PropTypes.func,
    addToCart: PropTypes.func,
    isAuth: PropTypes.string

}

export default ProductInfoData