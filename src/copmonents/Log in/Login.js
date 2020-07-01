import React from "react";
import style from "../Form/Form.module.css";
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';

const LogIn = ({handleSubmit,formbutton}) => {
    return (
        <form className={style.fields} onSubmit={handleSubmit}>
            <Field
                component={"input"}
                placeholder="🤵 User Name"
                name="username"
                size={"large"}
            />
            <Field
                component={"input"}
                placeholder="🔒 Password"
                name="password"
                size={"large"}
                type={"password"}
            />
            {formbutton}
        </form>

    )
}
LogIn.propTypes={
    handleSubmit:PropTypes.func,
    formbutton:PropTypes.element
}
export default reduxForm({form:"login-form"})(LogIn)

