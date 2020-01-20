import React from "react";
import Buttman from '../../assets/images/196.png'
import BlackButton from "../BlackButton/BlackButton";
import PropTypes from "prop-types";
import Header from "../Header/Header";
ProductCart.propTypes = {
    product: PropTypes.object.isRequired,
};


function ProductCart({product}) {
    return(
        <div class="product-div">
            <img src={product.images.length?product.images[0].url:Buttman} class="photo"/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <div class="line" ></div>
            <BlackButton  label={"Add to cart"}/>
        </div>
    )

}
export default ProductCart