import React from "react";
import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../../images/logo.png";
import {Badge} from "antd";
import PropTypes from "prop-types";

const HeaderLinks = ({isAuth, setShowCart, showCart, logOut, cart,burgerMenu}) => {
    return (
        <> <div>
                <div className={style.item}>
                    <NavLink to='/products'>Products</NavLink>
                </div>
                {isAuth && <div className={style.item}>
                    <NavLink to='/myprofile'>My Profile</NavLink>
                </div>}
                <div className={style.item}><NavLink to="/aboutus">About us</NavLink></div>
            </div>
            <div className={style.logo}>
                <NavLink to={"/"}><img src={logo} alt={"logo"}/></NavLink>
            </div>
            <div>
                {(isAuth&&!burgerMenu )&& <div className={style.item}>
                    <NavLink to={'/cart'}>Cart</NavLink>
                </div>}
                {isAuth && <>
                    <div onClick={() => {
                        logOut()
                    }} className={style.item}><a>Log Out</a>
                    </div>
                    <Badge count={cart.cart.length}>
                        <img className={style.cart} onClick={() => setShowCart(!showCart)}
                             src="http://cdn.onlinewebfonts.com/svg/download_260172.png" alt=""/>
                    </Badge>
                </>}
                {!isAuth && <>
                    <div className={style.item}><NavLink to={"/login"}>Log in</NavLink></div>
                    < div className={style.item}><NavLink to={"/registration"}>Register</NavLink></div>
                </>}</div>
        </>
    )
}
HeaderLinks.propTypes = {
    logOut: PropTypes.func,
    cart: PropTypes.object,
    setShowCart:PropTypes.func,
    showCart:PropTypes.bool,
    burgerMenu:PropTypes.bool

}
export default HeaderLinks