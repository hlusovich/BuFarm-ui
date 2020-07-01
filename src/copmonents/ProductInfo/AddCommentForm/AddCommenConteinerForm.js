import React, {useState} from "react";
import AddComment from "./AddCommentForm";
import {connect} from "react-redux";
import {createCommentThunk} from "../../../BLL/thunk/thunk";
import {notification} from "antd";
import PropTypes from "prop-types";


const AddCommentConteinerForm = ({createCommentThunk,productInfo,setShowComments}) => {
    const [buttonState, setButtonState] = useState(false)
    const addComment = (value) => {
        if (value.commentText) {
            setButtonState(true)
            createCommentThunk(value.commentText, productInfo.id)
            value.commentText = ""
            notification.success({message: "comment created"})
            setShowComments(true)
            setButtonState(false)
        }
    }
    return <>
        <AddComment buttonState={buttonState} onSubmit={addComment}/>
    </>
}
const mapStateToProps = (state) => {
    return {
        productInfo: state.productInfo
    }
}
AddCommentConteinerForm.propTypes = {
    createCommentThunk: PropTypes.func,
    setShowComments: PropTypes.func,
    productInfo: PropTypes.object,

}
export default connect(mapStateToProps, {createCommentThunk})(AddCommentConteinerForm)