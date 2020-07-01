import React from "react";
import user from "../../../images/icon1.png"
import style from "./Comment.module.css"
import PropTypes from 'prop-types';


const Comment = ({name, text, userId, deleteComment, id}) => {
    return (
        <>
            <div className={style.container}>
                <div>
                    <img src={user} alt={""}/>
                    <div>{name}</div>
                </div>
                <div className={style.item}>
                    <div>{text}</div>
                    {userId === +localStorage.getItem("user") &&
                    <img onClick={() => deleteComment(id)} className={style.deleteButton}
                         src={"https://i.pinimg.com/originals/50/e8/6d/50e86dfbf0bd5b3ee1d38d7af2a01334.png"} alt={""}/>}
                </div>
            </div>
            <div className={style.line}></div>
        </>
    )

}
Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    userId: PropTypes.number,
    deleteComment: PropTypes.func,
    id: PropTypes.number
}
export default Comment