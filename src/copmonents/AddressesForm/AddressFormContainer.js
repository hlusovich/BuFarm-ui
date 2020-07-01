import React from "react";
import AddressesForm from "./AddressesForm";
import FormButton from "../Form/FormButton/FornButton";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {addAddressThunk} from "../../BLL/thunk/thunk";
import PropTypes from  'prop-types';
import Form from "../Form/Form";



const AddressFormContainer = (props) => {
    const redirect = () => {
       props.history.push("/")
    }
    const onSubmit = (value) => {
       props.addAddress(value, redirect)
    }
    return (
        <Form name={"Addresses Form"} field={<AddressesForm onSubmit={onSubmit} formbutton={<FormButton text={"Add Address"}/>}/>}/>
    )
}
const mapStateToProps = (state) => {
    return {}
}

export default compose(connect(mapStateToProps, {addAddress: addAddressThunk}), withRouter)(AddressFormContainer)

AddressFormContainer.propTypes={
    addAddress:PropTypes.func,
    history:PropTypes.object
}

