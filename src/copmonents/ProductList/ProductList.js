import React, {useState} from "react";
import Title from "../Title/Tittle";
import Products from "./Products/Products";
import PropTypes from "prop-types";


const ProductList = ({products,canLoad,showMoreProducts}) => {
    const [page, setPage] = useState(4)
        return (
            <>
                <Title text={"Products"}
                       url={"/products"}/>
                <Products products={products} canLoad={canLoad} page={page} setPage={setPage}
                          showMoreProducts={showMoreProducts}/>
            </>
        )

}
ProductList.propTypes = {
    canLoad: PropTypes.object,
    showMoreProducts: PropTypes.func,
    products: PropTypes.array
}
export default ProductList

