import React from "react";
import {Spin} from "antd";

function Spinner() {
    return (
       <div className='spinner'> <Spin tip={"загружается"} size="medium"  size="large"></Spin></div>
    )
}
export default Spinner