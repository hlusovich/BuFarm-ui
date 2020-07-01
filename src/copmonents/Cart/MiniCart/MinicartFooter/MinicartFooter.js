import React from "react";
import style from "../CartConteiner.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
const MinicartFooter = ({total,setShowCart}) => {
    return (
        <>
            <div className={style.subtotal_conteiner}>
                <div>Subtotal:</div>
                <div className={style.total}>{total}$</div>
            </div>
            <div className={style.miniCart_line}></div>
            <div className={style.cart_buttons}>
                <button className={style.viewCartbtn}><NavLink to={"/cart"}>View cart</NavLink></button>
                <button onClick={() => setShowCart(value => !value)} className={style.checkOutbtn}>Close</button>
            </div>
        </>
    )
}
MinicartFooter.propTypes={
    total:PropTypes.number,
    setShowCart:PropTypes.func
}
export default MinicartFooter