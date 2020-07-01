import React from "react";
import PropTypes from "prop-types";

const ProductInfoButton = ({text, buttonFunction, count, state, style}) => {
    return (
        <>
            <button onClick={() => buttonFunction ? buttonFunction(count) : null} disabled={state}
                    className={style}>{text}</button>
        </>
    )
}
ProductInfoButton.propTypes = {
    text:PropTypes.string,
    buttonFunction:PropTypes.func,
    count:PropTypes.number,
    state:PropTypes.bool,
    style:PropTypes.string

}
export default ProductInfoButton