import React, { useState, useEffect }  from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification,image,flex} from 'antd';
import logo from 'C:/Users/User/IdeaProjects/first-react-app/first-react-app/src/assets/images/logo2.png'
import PropTypes from 'prop-types';
import {useAuthentication} from "../../context/authentication";
import {useCart, CartContext} from "../../context/cart";
import {Link} from "react-router-dom";

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

Header.defaultProps = {
    text: 'где бля текст'
}

// сделать красивый хедер
function Header({text}) {

    const {isAuthenticated, setIsAuthenticated} = useAuthentication();
    const {cart} = useCart();

    // console.log('123')
    // console.log(cart)
    // console.log(cartLenght)
    // console.log('123')
    return (

        <Row  type="flex" justify="space-around" align="middle">
            <Col span={12} >

                <img src={logo} alt="logo"/>




            </Col>
            <Col span={5} >

            <Button icon="search" onClick={()=> setIsAuthenticated(!isAuthenticated)} size={"large"}>Search</Button>
            {
                !isAuthenticated && (
                    <h1>Продуктов в корзине:{cart.length}

                    </h1>
                )
            }
            </Col>
            <Col span={5} >
                <Button type="dashed" size={"large"} >
                    О нас
                </Button>
            </Col>
            <Col span={2} >

                <Link to="/products"><Button type="primary" >product</Button></Link>
                <Link to="/userdata"><Button type="primary" >user data</Button></Link>

            </Col>
        </Row>




)
}

export default Header;

