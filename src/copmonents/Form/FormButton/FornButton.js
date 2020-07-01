import React from "react";
import style from "../Form.module.css";
import PropTypes from "prop-types";

const FormButton = ({buttonCondition, text}) => {
    return (
        <button disabled={buttonCondition} className={style.submit_button}>{text} </button>
    )
}
FormButton.propTypes = {
    buttonCondition: PropTypes.bool,
    text: PropTypes.string

}
export default FormButton