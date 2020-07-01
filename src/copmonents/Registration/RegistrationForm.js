import React from "react";
import style from "../Form/Form.module.css";
import {Field, reduxForm} from "redux-form";
import PropTypes from "prop-types";

const RegistrationForm = (props) => {
    return (
        <form className={style.fields} onSubmit={props.handleSubmit}>
            <Field component={"input"}
                   placeholder=" 📧 email"
                   name="email"
                   size={"large"}
            />
            <Field component={"input"}
                   type="password"
                   placeholder=" 🔒 password"
                   name="password"


            />
            <Field component={"input"}
                   type="password"
                   placeholder=" 🔒 password again"
                   name="passwordAgain"
                   size={"large"}
            />
            <Field component={"input"}
                   placeholder=" 🤵 name"
                   name="first_name"
                   size={"large"}
            />

            <Field component={"input"}
                   size={"large"}
                   placeholder=" 🤵 family name"
                   name="last_name"

            />

            <Field component={"input"}
                   placeholder="   ℹ information"
                   name="info"
                   size={"large"}
            />
            {props.formbutton}
        </form>

    )
}
RegistrationForm.propTypes = {
    formbutton: PropTypes.element,
    handleSubmit:PropTypes.func

}

export default reduxForm({form: "registration-form"})(RegistrationForm)