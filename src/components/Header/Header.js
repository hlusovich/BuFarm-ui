import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, Badge} from 'antd';
import {Link} from "react-router-dom";
import logo from '../../assets/images/cover.png'
import header from '../../assets/images/header (3).png'
import {useAuthentication} from "../../context/authentication";
import cartimg from "../../assets/images/cart.png"


function Header({history}) {
    const {isAuthenticated, setIsAuthenticated, cartst, setCartst, cartView, setCartView, cart} = useAuthentication()
    const logOut = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(localStorage.getItem("token"))
    }
    const toggleCart = (event) => {
        event.preventDefault()
        setCartView(true)
        setCartst(!cartst)
    }
    return (
        <div className={"header"}>
            <Row>
                <div className={"forheader"}>
                    <Col span={3}><Link to={"/main"}><img src={logo} className={"logo"}/></Link></Col>
                    {isAuthenticated && < Col offset={1} span={1}> <Link to={"/userdata"} className={"textcolor"}>Ваши
                        контакты</Link></Col>}
                    <Col offset={1} span={2}><Link to={'/cart'}><a className={"textcolor"}>Оформить
                        заказ</a></Link></Col>
                    <Col offset={1} span={2}><Link to={"/products"} className={"textcolor"}>Продукты</Link></Col>
                    <Col offset={1} span={1}><Link className={"textcolor"} to={"/aboutus"}>О нас</Link></Col>
                    {!isAuthenticated &&
                    <Col offset={1} span={2}><Link to={"/loginpage"}><a className={"textcolor"}>Log in</a></Link></Col>}
                    {isAuthenticated &&
                    <Col offset={1} span={2}><Link to={"/loginpage"}><a onClick={logOut} className={"textcolor"}>Log
                        out</a></Link></Col>}
                    {!isAuthenticated &&
                    <Col offset={1}><Link to={"/users"}><a className={"textcolor"}>Регистрация</a></Link></Col>}
                    {isAuthenticated && <Col offset={1} span={1}><Badge count={cart.length}> <img onClick={toggleCart}
                                                                                                  className={"cart-logo"}
                                                                                                  src={cartimg}/></Badge></Col>}
                    <Col span={1}> </Col>

                </div>


            </Row>
        </div>
    )

}

export default Header