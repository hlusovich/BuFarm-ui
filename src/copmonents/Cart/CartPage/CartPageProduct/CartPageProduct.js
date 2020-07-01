import React, {useState} from "react";
import style from "./CartPageProduct.module.css"
import Counter from "../../../ProductInfo/Counter/Counter";
import PropTypes from 'prop-types';


const CartPageProduct = ({img, price, count, name, id, deleteProduct, changeCount, setCartTotal, cart}) => {

    const [countCart, setCountCart] = useState(count)
    return (
        <>
            <div className={style.conteiner}>
                <div onClick={() => deleteProduct(id)} className={style.deleteBtn}>X</div>
                <div>
                    <img src={img} alt={""}/>
                    {name}</div>
                <div className={style.price}>${price}</div>
                <div className={style.counter}>
                    <Counter setCartTotal={setCartTotal} id={id} changeCount={changeCount}
                             itemCount={count} count={countCart} setCount={setCountCart} cart={cart}/>
                </div>
                <div className={style.subtotal}>${price * count}</div>
            </div>
        </>
    )
}
CartPageProduct.propTypes = {
    img: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    deleteProduct: PropTypes.func,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    cart: PropTypes.array

}
export default CartPageProduct