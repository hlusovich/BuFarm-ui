import React, {useEffect} from "react";
import ProuctList from "./ProductList";
import {connect} from "react-redux";
import {canLoad} from "../../BLL/actionsCreators/actionsCreators";
import {setProductsThunk, showMoreProducts} from "../../BLL/thunk/thunk";
import {compose} from "redux";
import {canLoadSelector, ititializedSelector, productsSelector} from "../../BLL/selectors/selectors";
import PropTypes from "prop-types";



const ProductListContainer = ({canLoadProducts,showMoreProducts,setProductsThunk,products,ititialized}) => {
    const showProducts = async (page, setPage) => {
        if (canLoadProducts.canLoad) {
            setPage(page + 4)
            showMoreProducts(page)
        }
    }
    useEffect(() => {
        setProductsThunk()
    }, [])
    return (
        <>
            <ProuctList products={products} canLoad={canLoadProducts} showMoreProducts={showProducts} ititialized={ititialized}
            />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: productsSelector(state),
        canLoadProducts: canLoadSelector(state),
        ititialized:ititializedSelector(state)
    }
}

ProductListContainer.propTypes = {
    canLoadProducts: PropTypes.object,
    setProductsThunk: PropTypes.func,
    ititialized: PropTypes.object,
    showMoreProducts: PropTypes.func,
    products: PropTypes.array

}
export default compose(connect(mapStateToProps, {showMoreProducts, canLoad, setProductsThunk}))(ProductListContainer)
