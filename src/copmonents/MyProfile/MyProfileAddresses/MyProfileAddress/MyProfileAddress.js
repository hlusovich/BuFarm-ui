import React from "react";
import style from "./MyProfileAdress.module.css"
import {Button} from "antd";
import redactirovanie from "../../../../images/re.svg"

const MyProfileAddress = ({id, city, street, building, flat,deleteAddressThunk,showChangeForm}) => {
    return (
        <>
            <div className={ style.container}>
                <div className={ style.block}>
                    <div>City</div>
                    {city}
                    <div>street</div>
                    {street}
                    <div>building</div>
                    {building} {flat &&
                <span><div>flat</div> {flat}</span>}</div>
                <Button onClick={()=>{deleteAddressThunk(id)}} danger={"danger"}  type={"primary"} shape="round" >X</Button>
                <img className={style.change} src={redactirovanie} alt="" onClick={()=>showChangeForm(id)}/>
            </div>
        </>
    )
}
export default MyProfileAddress