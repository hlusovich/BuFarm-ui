import React from "react";
import {Spin} from "antd";
import style from "./Loading.module.css"
const Loading=()=>{
    return(
        <><div className={style.spin}>
            <Spin tip={"Loading..."}   size="large"></Spin>
        </div>
            </>
    )
}
export  default Loading