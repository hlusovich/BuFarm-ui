import React from "react";
import MyProfileAddAddressFullForm from "./MyProfileAddAddressFullForm/MyProfileAddAddressFullForm";
import MyProfileChangeAddressFullForm from "./MyProfileChangeAddressFullForm/MyProfileChangeAddressFullForm";
import style from "../MyProfile.module.css";
import PropTypes from 'prop-types';

const MyProfileAddressesFullForms = ({changeAddressForm, addAddressForm, changeAnimation, changeAddress, id, setChangeAnimation, addAnimation, setAddAnimation, addAddressThunk}) => {


    return (
        <>
            <div className={style.forms}>
                <MyProfileAddAddressFullForm addAnimation={addAnimation} addAddressForm={addAddressForm}
                                             addAddressThunk={addAddressThunk} setAddAnimation={setAddAnimation}
                />
                <MyProfileChangeAddressFullForm addAddressForm={addAddressForm} id={id} changeAddress={changeAddress}
                                                changeAddressForm={changeAddressForm}
                                                setChangeAnimation={setChangeAnimation}
                                                changeAnimation={changeAnimation}/>
            </div>
        </>
    )
}
MyProfileAddressesFullForms.propTypes = {
    changeAddressForm: PropTypes.bool,
    addAddressForm: PropTypes.bool,
    changeAnimation: PropTypes.bool,
    changeAddress: PropTypes.func,
    id: PropTypes.number,
    setChangeAnimation: PropTypes.func,
    addAnimation: PropTypes.bool,
    setAddAnimation: PropTypes.func,
    addAddressThunk: PropTypes.func

}
export default MyProfileAddressesFullForms