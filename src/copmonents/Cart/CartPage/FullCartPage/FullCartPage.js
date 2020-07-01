import React from "react";
import CartPageHeader from "../CartPageHeader/CartPageHeader";
import CartPageProduct from "../CartPageProduct/CartPageProduct";
import style from "../CartPage.module.css";
import PropTypes from 'prop-types';



const FullCartPage = ({cart, setCartTotal, changeCount, deleteProduct, total}) => {
    return (<>
        <div className={style.fullCart}>
            <CartPageHeader/>
            {cart.map(item => <CartPageProduct key={item.id} setCartTotal={setCartTotal} changeCount={changeCount} cart={cart}
                                               price={item.price} count={item.count} img={item.images[0].url}
                                               name={item.name} deleteProduct={deleteProduct} id={item.id}/>)}
        </div>
        <div className={style.line}></div>
        {cart.length && <div className={style.total}><span>Total:</span>${total}</div>}
        <div className={style.line}></div>
    </>)
}
FullCartPage.propTypes = {
    cart: PropTypes.array,
    deleteProduct: PropTypes.func,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    total: PropTypes.number,


}
export default FullCartPage