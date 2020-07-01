import React from "react";
import style from "../Footer.module.css";
import {NavLink} from "react-router-dom";

const FooterLinks = () => {
    return (
        <>
            <div className={style.item}>
                <div className={style.itemHeader}>Usefull Links</div>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/cart"}>Cart</NavLink>
                <NavLink to={"/aboutus"}>About us</NavLink>
                <NavLink to={"/myprofile"}>My profile</NavLink>
                <NavLink to={"/login"}>Log in</NavLink>
                <NavLink to={"/registration"}>Register</NavLink>
            </div>
        </>
    )
}
export default FooterLinks