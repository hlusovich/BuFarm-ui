import React from "react";
import style from "./CartProduct.module.css"
import PropTypes from 'prop-types';


const CartProduct = ({id, name, images, price, count, deleteProduct}) => {
    return (
        <>
            <div className={style.miniCart_item}>
                <div>
                    <img src={images[0].url} alt=""/>
                    <div>
                        <div>{name}</div>
                        <div>{price}x{count}</div>
                    </div>
                    <div onClick={() => deleteProduct(id)} className={style.deleteButton}>X</div>
                </div>
                <div className={style.miniCart_item_line}></div>
            </div>
        </>
    )
}
CartProduct.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.array,
    price:PropTypes.string,
    count: PropTypes.number,
    deleteProduct: PropTypes.func

}
export default CartProduct