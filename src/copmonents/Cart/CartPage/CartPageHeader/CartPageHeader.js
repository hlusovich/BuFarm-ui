import React from "react";
import style from "../CartPage.module.css";

const CartPageHeader = () => {
    return (
        <>
            <div className={style.line}></div>
            <div className={style.cartHeader}>
                <div className={style.product}>Product</div>
                <div className={style.price}>Price</div>
                <div className={style.quantity}>Quantity</div>
                <div className={style.subtotal}>Subtotal</div>
            </div>
            <div className={style.line}></div>
        </>
    )
}
export default CartPageHeader