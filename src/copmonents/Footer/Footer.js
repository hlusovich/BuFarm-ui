import React from "react";
import logo from '../../images/logo.png'
import style from "./Footer.module.css"
import {NavLink} from "react-router-dom";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterMedia from "./FooterMedia/FooterMedia";

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div className={style.item}><NavLink to={"./"}><img src={logo} alt=""/></NavLink></div>
                <FooterLinks/>
                <FooterContacts/>
                <FooterMedia/>
            </div>
        </>
    )
}

export default Footer


