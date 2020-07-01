import React from "react";
import style from "../Form.module.css";
import logo from "../../../images/logo.png";
import PropTypes from "prop-types";

const FullForm=({field,name})=>{
    return(<>
            <span className={style.form}>
                <div className={style.header}>
                    <div>
                        <div>{name}</div>
                        <img src={logo} alt={""}/>
                    </div>
                </div>
                {field}
            </span>
       </>)
}
FullForm.propTypes={
    field:PropTypes.element,
    name:PropTypes.string,
}
export default FullForm