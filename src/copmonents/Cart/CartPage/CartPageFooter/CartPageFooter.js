import React, {useState} from "react";
import style from "../CartPage.module.css";
import CartMenu from "../CartMenu/CartMenu";
import PropTypes from 'prop-types';


const CartPageFooter=({id,addresses,setId,addOrder})=>{
    const [checkOutBtn, setCheckOutBtn]=useState(false)
    const createOrder=async ()=>{
        setCheckOutBtn(true)
        await addOrder()
        setCheckOutBtn(false)

    }
    return <>
        <div className={style.cartFooter}>
            {!!addresses.length&&<CartMenu addresses={addresses} setId={setId}/>}
            {id && <button disabled={checkOutBtn} className={style.checkOutbtn} onClick={() =>createOrder() }>CheckOut
            </button>}
        </div>
        </>
}
CartPageFooter.propTypes={
    addresses: PropTypes.array,
    createOrder: PropTypes.func,
    setId:PropTypes.func,
    addOrder:PropTypes.func
}
export default CartPageFooter