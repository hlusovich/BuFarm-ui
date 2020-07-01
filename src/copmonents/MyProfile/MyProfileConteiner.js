import React, {useEffect} from "react";
import MyProfile from "./MyProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Title from "../Title/Tittle";
import PropTypes from 'prop-types';
import {
    addAddressThunk,
    changeAddressThunk,
    changeUserDataThunk,
    deleteAddressThunk,
    getUserDataThunk
} from "../../BLL/thunk/thunk";
import { patchUserData} from "../../DAL/API/API";
import {addresseSelector, userSelector} from "../../BLL/selectors/selectors";
import {withInitialize} from "../../HOC/withInitialize";

const MyProfileConteiner = ({getUserDataThunk,...props}) => {


    return (
        <>
            <Title text={"My profile"} url={"/myprofile"}
                   img={"https://organik.thememove.com/wp-content/uploads/2016/10/section-bg-04.png"}/>
            <MyProfile {...props} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        user: userSelector(state),
        addresses: addresseSelector(state)
    }
}
MyProfileConteiner.propTypes={
    getUserDataThunk:PropTypes.func

}

export default compose(withAuthRedirect,withInitialize,connect(mapStateToProps, {
    getUserDataThunk,
    patchUserData,
    deleteAddressThunk,
    addAddressThunk,
    changeAddressThunk,changeUserDataThunk,
}))(MyProfileConteiner)