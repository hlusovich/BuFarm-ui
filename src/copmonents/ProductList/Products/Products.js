import React from "react";
import style from "../ProductList.module.css";
import Product from "../Product/Product";
import {withInitialize} from "../../../HOC/withInitialize";
import PropTypes from "prop-types";
const Products=({products,canLoad,showMoreProducts,page,setPage})=>{
    return(
        <div className={style.productsList}>
            <div className={style.container}>{
                products.map(product => <Product key={product.id} id={product.id} name={product.name} price={product.price}
                                                       image={product.images[0].url}/>)
            }</div>
            {canLoad.canLoad &&
            <div className={style.button} onClick={() => showMoreProducts(page, setPage)}>Show more</div>}
            </div>
    )
}

Products.propTypes = {
    canLoad: PropTypes.object,
    showMoreProducts: PropTypes.func,
    products: PropTypes.array,
    page:PropTypes.number,
    setPage:PropTypes.func
}

export default withInitialize( Products)