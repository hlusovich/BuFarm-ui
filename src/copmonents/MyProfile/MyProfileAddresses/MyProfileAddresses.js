import React from "react";
import MyProfileAddress from "./MyProfileAddress/MyProfileAddress";
import style from "./MyProfileAddressList.module.css"
import PropTypes from 'prop-types';

const MyProfileAddressesList = ({addresses, deleteAddressThunk, showChangeForm}) => {
    return (
        <>
            <div className={style.container}>
                <h1>Address List</h1>
                <div className={style.line}></div>
                {addresses?.map(address => <MyProfileAddress key={address.id}  {...address}
                                                             showChangeForm={showChangeForm}
                                                             deleteAddressThunk={deleteAddressThunk}/>)}
            </div>
        </>
    )
}
MyProfileAddressesList.propTypes = {
    addresses: PropTypes.array,
    deleteAddressThunk: PropTypes.func,
    showChangeForm: PropTypes.func

}

export default MyProfileAddressesList