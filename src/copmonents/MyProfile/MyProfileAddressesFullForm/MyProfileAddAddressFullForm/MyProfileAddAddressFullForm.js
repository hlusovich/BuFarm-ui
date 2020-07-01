import React from "react";
import {notification} from "antd";
import style from "../../MyProfile.module.css";
import FullForm from "../../../Form/FullForm/FullForm";
import AddressesForm from "../../../AddressesForm/AddressesForm";
import FormButton from "../../../Form/FormButton/FornButton";
import PropTypes from 'prop-types';

const MyProfileAddAddressFullForm = ({setAddAnimation, addAddressThunk, addAddressForm, addAnimation}) => {
    const showAddAddressResult = () => {
        notification.success({message: "your address was added "})
        setAddAnimation(false)
    }
    const addAddress = (value) => {
        addAddressThunk(value, showAddAddressResult)
    }
    return (
        <>{!addAddressForm&& <div className={style.whiteBlock}></div>}

            {addAddressForm &&
        <div className={addAnimation ? style.cartIn : style.cartOut}><FullForm name="Add new address"
                                                                               field={<AddressesForm
                                                                                   onSubmit={addAddress}
                                                                                   formbutton={<FormButton
                                                                                       text={"Add Address"}/>}/>}/>
        </div>}
        </>
    )
}
MyProfileAddAddressFullForm.propTypes = {
    setAddAnimation: PropTypes.func,
    addAddressThunk: PropTypes.func,
    addAddressForm: PropTypes.bool,
    addAnimation: PropTypes.bool
}
export default MyProfileAddAddressFullForm