import React from "react";
import LogIn from "./Login";
import FormButton from "../Form/FormButton/FornButton";
import {LogInThunk} from "../../BLL/thunk/thunk";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {isAuthSelector} from "../../BLL/selectors/selectors";
import {notification} from "antd";
import {validateEmail} from "../../BLL/validators/validators";
import Form from "../Form/Form";

const LogInConteiner = ({history,logIn}) => {
    const toMainPage = () => {
        history.push("/")
    }

    const onSubmit = (value) => {
        if (validateEmail(value.username)) {
            if (value.password) {
               logIn(value, toMainPage)
            } else {
                notification.error({message: "please write password"})
            }
        } else {
            notification.error({message: "please write correct username"})
        }
    }
    return (
        <Form field={<LogIn formbutton={<FormButton text={"Log in"}/>} onSubmit={onSubmit}/>} name={"Log In"}/>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: isAuthSelector(state)
    }
}
LogInConteiner.propTypes={
    history:PropTypes.object,
    logIn:PropTypes.func
}

export default compose(connect(mapStateToProps, {logIn: LogInThunk}), withRouter)(LogInConteiner)