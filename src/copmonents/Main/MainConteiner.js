import React from "react";
import Main from "./Main";
import {withInitialize} from "../../HOC/withInitialize";

const MainConteiner = () => {
    return (<>
        <Main/>
    </>)
}


export default  withInitialize(MainConteiner)