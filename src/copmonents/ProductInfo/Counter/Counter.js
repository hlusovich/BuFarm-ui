import React  from "react";
import style from "./Counter.module.css";
import DecrementCount from "./DecrementCount/DecrementCount";
import IncrementCount from "./IncrementCount/IncrementCount";
import PropTypes from "prop-types";

const Counter = ({id,count,cart,changeCount,setCartTotal,setCount}) => {
    return (
        <div className={style.counter}>
            <DecrementCount id={id} setCount={setCount} count={count} cart={cart} changeCount={changeCount} setCartTotal={setCartTotal}/>
            {count}
            <IncrementCount id={id} setCount={setCount} count={count} cart={cart} changeCount={changeCount} setCartTotal={setCartTotal}/>
        </div>
    )
}
Counter.propTypes = {
    price: PropTypes.string,
    count: PropTypes.number,
    id: PropTypes.number,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    cart: PropTypes.array

}
export default Counter