import React, {useState} from "react";
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, Badge} from 'antd';
import {Link} from "react-router-dom";
import logo from '../../assets/images/cover.png'
import header from '../../assets/images/header (3).png'
import {useAuthentication} from "../../context/authentication";
import cartimg from "../../assets/images/cart.png"


function Header({history}) {
    const {isAuthenticated, setIsAuthenticated, cartst, setCartst, cartView, setCartView, cart} = useAuthentication()
    const[burger,setBurger]=useState(true)
    const logOut = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(localStorage.getItem("token"))
        changeBurgerToggle()
    }
    const toggleCart = (event) => {
        event.preventDefault()
        setCartView(true)
        setCartst(!cartst)
        changeBurgerToggle()
    }
    const changeBurgerToggle=()=>{
        setBurger(!burger)
    }
    return (<>
        {!burger&&<div className={burger?"":'burger__menu'}>
                {isAuthenticated && <Link to={"/userdata"} className={"header__text"} onClick={changeBurgerToggle}>Ваши
                    контакты</Link>}
                <Link to={'/cart'}><div onClick={changeBurgerToggle} className={"header__text"}>Оформить
                    заказ</div></Link>
                <Link onClick={changeBurgerToggle} to={"/products"} className={"header__text"}><div>Продукты</div></Link>
            <Link onClick={changeBurgerToggle} className={"header__text"} to={"/aboutus"}><div>О нас</div></Link>
                {!isAuthenticated &&
                <Link to={"/loginpage"}><div onClick={changeBurgerToggle} className={"header__text"}>Log in</div></Link>}
                {isAuthenticated &&
                <Link to={"/loginpage"}><div  onClick={logOut} className={"header__text"}>Log
                    out</div></Link>}
                {!isAuthenticated &&
                <Link to={"/users"}><div  onClick={changeBurgerToggle} className={"header__text"}>Регистрация</div></Link>}
            {isAuthenticated && <div><Badge count={cart.length}> <img onClick={toggleCart} className={"burger__menu--cart"}
                                                                      src={cartimg}/></Badge></div>}
            </div>}
            <div className={"burger"}>
            <Link to={"/main"}><img src={logo} className={"header__logo"}/></Link>
            <div onClick={changeBurgerToggle} className={"burger__toggle"}>
                <div className={burger?"burger__toggle--item":"burger__toggle--item transform" }></div>
            </div>
        </div>
        <div className={"header"}>
            <Link to={"/main"}><img src={logo} className={"header__logo"}/></Link>
            {isAuthenticated && <Link to={"/userdata"} className={"header__text"}>Ваши
                контакты</Link>}
            <Link to={'/cart'}><a className={"header__text"}>Оформить
                заказ</a></Link>
            <Link to={"/products"} className={"header__text"}>Продукты</Link>
            <Link className={"header__text"} to={"/aboutus"}>О нас</Link>
            {!isAuthenticated &&
            <Link to={"/loginpage"}><a className={"header__text"}>Log in</a></Link>}
            {isAuthenticated &&
            <Link to={"/loginpage"}><a onClick={logOut} className={"header__text"}>Log
                out</a></Link>}
            {!isAuthenticated &&
            <Link to={"/users"}><a className={"textcolor"}>Регистрация</a></Link>}
            {isAuthenticated && <Badge className={"badge"} count={cart.length}> <img onClick={toggleCart} className={"header__logo"}
                                                                 src={cartimg}/></Badge>}
        </div>
        </>
    )

}

export default Header