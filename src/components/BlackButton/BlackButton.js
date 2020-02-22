import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";



BlackButton.propTypes = {
    label: PropTypes.string.isRequired,
    onKlick: PropTypes.func,
};

function BlackButton({label,onKlick}) {

    return(
        <button onClick={onKlick} class="black-button-style">{label}</button>
    )

}
export default BlackButton