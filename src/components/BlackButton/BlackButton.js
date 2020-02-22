import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import {Button} from "antd";

BlackButton.propTypes = {
    label: PropTypes.string.isRequired,
    onKlick: PropTypes.func,
};

function BlackButton({label, onKlick}) {
    return (
        <div onClick={onKlick} className="black-button-style">{label}</div>
    )
}

export default BlackButton