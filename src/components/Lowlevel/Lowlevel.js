import React from "react";
import  PropTypes from "prop-types";
import {Input} from "antd";

Lowlevel.propTypes ={
    name: PropTypes.func,
}

function Lowlevel({name}) {
    const InputChange = (event)=>{
        name(event.target.value)

    }
    return(
        <Input onChange={InputChange}/>   )

}
export default Lowlevel