import React from "react";
import Redirect from "react-router-dom/es/Redirect";

function RedirectToMain() {
    if (window.location.pathname == "/") {
        return <Redirect to='/main'/>;
    }
    return (
        <>
        </>
    )

}

export default RedirectToMain