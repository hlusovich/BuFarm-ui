import React, {useState} from "react";
import FormButton from "../Form/FormButton/FornButton";
import Registration from "./RegistrationForm";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {RegistrationThunk} from "../../BLL/thunk/thunk";
import {compose} from "redux";
import PropTypes from "prop-types";
import Form from "../Form/Form";

const RegistrationFormConteiner = ({history,registration}) => {
    const [buttonCondition, setButtonCondition] = useState(false)
    const redirect = () => {
        history.push("/addresses")
    }
    const onSubmit = async (value) => {
        setButtonCondition(true)
       await registration(value, redirect)
        setButtonCondition(false)
}
    return (
            <Form name={"Addresses Form"} field={ <Registration onSubmit={onSubmit} formbutton={<FormButton buttonCondition={buttonCondition}
                                                                                                                     text={"Sign in"}/>}/>}/>

    )
}
const mapStateToProps = (state) => {
    return {}
}
RegistrationFormConteiner.propTypes = {
    history: PropTypes.object,
    registration:PropTypes.func

}

export default compose(withRouter, connect(mapStateToProps, {registration: RegistrationThunk}))(RegistrationFormConteiner)