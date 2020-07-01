import React from "react";
import PropTypes from "prop-types";


const IncrementCount = ({changeCount, setCartTotal, id, cart, count, setCount}) => {
    const incremmentCount = () => {
        setCount(count + 1)
        if (changeCount) {
            changeCount(id, count + 1)
            setCartTotal()
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }

    return (
        <div onClick={() => incremmentCount()}>+</div>

    )
}
IncrementCount.propTypes = {
    setCount: PropTypes.func,
    count: PropTypes.number,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    cart: PropTypes.array

}
export default IncrementCount