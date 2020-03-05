import React from "react";
import Buttman from '../../assets/images/196.png'
import BlackButton from "../BlackButton/BlackButton";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
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
            <Link to={`/products/${product.id}`}><BlackButton label={"Я Линка"} /></Link>
        </div>
    )

}
export default ProductCart