import React from "react";
import style from "../Form/Form.module.css";
import {Field, reduxForm} from "redux-form";
import PropTypes from  'prop-types';

const AddressesForm = ({handleSubmit,formbutton}) => {
    return (
        <form className={style.fields} onSubmit={handleSubmit}>
            <Field component={"input"}
            placeholder="🏘 City"
            name="city"
            size={"large"}
        />
            <Field component={"input"}
                placeholder="🏡 Street "
                name="street"
                size={"large"}
            /><Field component={"input"}
                placeholder="🏡 House number"
                name="building"
                size={"large"}
            /><Field component={"input"}
                placeholder="🏡 Flat number"
                name="flat"
                size={"large"}
            />
            {formbutton}
        </form>
    )
}

AddressesForm.propTypes={
    handleSubmit:PropTypes.func,
    formbutton:PropTypes.element
}
export default reduxForm({form: "addressForm"})(AddressesForm )