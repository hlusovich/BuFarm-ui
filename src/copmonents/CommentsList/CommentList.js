import React from "react";
import Comment from "./Comment/Comment";
import PropTypes from  'prop-types';
const CommentList=({comments,deleteComment})=>{
    return(<>
        {comments.map(item=><Comment key={item.id} userId={item.user} text={item.text} name={item.name} id={item.id} deleteComment={deleteComment}/>)}
        </>

    )
}
CommentList.propTypes={
    comments:PropTypes.array,
    deleteComment:PropTypes.func
}
export default CommentList