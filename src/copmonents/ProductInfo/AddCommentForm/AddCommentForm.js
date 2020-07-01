import React from "react";
import style from "../ProductInfo.module.css";
import {Field, reduxForm} from "redux-form";
import ProductInfoButton from "../ProductInfoButton/ProductinfoButton";
import PropTypes from "prop-types";

const AddCommentForm = ({handleSubmit,buttonState}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field  component={"input"} placeholder={"write your comment..."} name={"commentText"}/>
                <ProductInfoButton text={"Add Comment"} State={buttonState} style={style.addCommentButton}/>
            </form>
        </>
    )
}
AddCommentForm.propTypes = {
    handleSubmit: PropTypes.func,
    buttonState: PropTypes.bool,

}
export default reduxForm({form:"add comment form"})(AddCommentForm)