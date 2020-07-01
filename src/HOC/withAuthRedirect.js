import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isInitialized} from "../BLL/actionsCreators/actionsCreators";

const mapStateToProps = (state) => {
    return {
        isAuth: state.user.user
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!localStorage.getItem("user")) {
            return(<Redirect to={"/login"}/>)
        }
        return (<><Component {...props}/></>)
    }
    return connect(mapStateToProps, {isInitialized})(RedirectComponent)
}

export default withAuthRedirect
