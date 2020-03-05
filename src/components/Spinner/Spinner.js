import React from "react";
import {Spin} from "antd";

function Spinner() {
    return (

       <div> <Spin tip={"загружается"} size="large" className='center-absolute' size="large"></Spin></div>
    )
}

export default Spinner