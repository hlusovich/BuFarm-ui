import React, {useEffect, useState} from "react";
import style from "./ProductInfo.module.css"
import CommentList from "../CommentsList/CommentList";
import AddCommentConteinerForm from "./AddCommentForm/AddCommenConteinerForm";
import ProductInfoData from "./ProductInfoData/ProductInfoData";
import PropTypes from "prop-types";

const ProductInfo = ({setProductInfo, productInfo, addToCart, deleteComment, isAuth}) => {
    const [count, setCount] = useState(0)
    const [showComments, setShowComments] = useState(false)
    useEffect(() => {
        setProductInfo()
    }, [])
    return (
        <>

            <div className={style.container}>
                <img src={productInfo.images[0]?.url} alt={""}/>
                <div className={style.productInfo}>
                    <ProductInfoData count={count} productInfo={productInfo} addToCart={addToCart} setCount={setCount} isAuth={isAuth}/>
                    <h3 onClick={() => setShowComments(!showComments)}>Show comments <span>∨</span></h3>
                    <div className={style.comments}></div>
                    {showComments && <CommentList deleteComment={deleteComment} comments={productInfo.comments}/>}
                    {isAuth && <AddCommentConteinerForm setShowComments={setShowComments}/>}
                </div>
            </div>
        </>
    )
}
ProductInfo.propTypes = {
    setProductInfo: PropTypes.func,
    getCartThunk: PropTypes.func,
    isAuth: PropTypes.string,
    productInfo: PropTypes.object,
    addToCart:PropTypes.func

}
export default ProductInfo