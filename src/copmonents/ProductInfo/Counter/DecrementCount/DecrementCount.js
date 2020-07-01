import React from "react";
import PropTypes from "prop-types";


const DecrementCount = ({changeCount, setCartTotal, id, cart, count, setCount}) => {
    const decrementCount = () => {
        if (count > 0) {
            setCount(value => value - 1)
            if (changeCount) {
                changeCount(id, count - 1)
                setCartTotal()
                localStorage.setItem("cart", JSON.stringify(cart))
            }
        }
    }

    return (

        <div onClick={() => {
            decrementCount()
        }}>-
        </div>

    )
}
DecrementCount.propTypes = {
    setCount: PropTypes.func,
    count: PropTypes.number,
    changeCount: PropTypes.func,
    setCartTotal: PropTypes.func,
    cart: PropTypes.array

}
export default DecrementCount