import React from "react";
import style from "./Form.module.css"
import FullForm from "./FullForm/FullForm";
import WithForm from "../../HOC/WithForm";

const Form = (props) => {
    return (<>
            <div className={style.back}></div>
        <div className={style.container}>
            <FullForm {...props}/>
        </div>
        </>
    )
}

export default WithForm(Form)