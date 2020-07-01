import React from "react";
import style from "../../MyProfile.module.css";
import FullForm from "../../../Form/FullForm/FullForm";
import AddressesForm from "../../../AddressesForm/AddressesForm";
import FormButton from "../../../Form/FormButton/FornButton";
import {notification} from "antd";
import PropTypes from 'prop-types';

const MyProfileChangeAddressFullForm = ({changeAddress, id, setChangeAnimation, changeAddressForm,  changeAnimation}) => {
    const changeAddressSubmit = (value) => {
        if (value.city && value.street && value.building) {
            changeAddress(id, value)
            setChangeAnimation(false)
        } else {
            notification.error({message: "There are fields city,building,street  are required"})
        }


    }
    return (
        <> {changeAddressForm &&
        <div
            className={changeAnimation ? style.cartInDown : style.cartOutDown}>
            <FullForm name="Change Address"
                      field={<AddressesForm
                          onSubmit={changeAddressSubmit}
                          formbutton={<FormButton
                              text={"Change"}/>}/>}/>
        </div>}
        </>
    )

}
MyProfileChangeAddressFullForm.propTypes = {
    changeAddress: PropTypes.func,
    id: PropTypes.number,
    setChangeAnimation: PropTypes.func,
    changeAddressForm: PropTypes.bool,
    addAddressForm: PropTypes.bool,
    changeAnimation: PropTypes.bool
}
export default MyProfileChangeAddressFullForm