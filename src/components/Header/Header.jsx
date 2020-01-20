import React, { useState, useEffect }  from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification,image,flex} from 'antd';
import logo from '../../assets/images/logo2.png'
import PropTypes from 'prop-types';
import {useAuthentication} from "../../context/authentication";
import {useCart, CartContext} from "../../context/cart";
import {Link} from "react-router-dom";
import BlackButton from "../BlackButton/BlackButton";




Header.propTypes = {
    text: PropTypes.string.isRequired,
};

Header.defaultProps = {
    text: 'где бля текст'
}

// сделать красивый хедер
function Header({text}) {

    const {isAuthenticated, setIsAuthenticated} = useAuthentication();
    const {deleteProductFromCart, cart}=useCart()
    const handleSubmit=(event)=>{
        event.preventDefault()
        notification.error({message:"ты че примат"})
    }
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
                        <ul>
                        {
                            cart.map((item)=>
                                <li>
                                    {item.product.name}
                                    <Button onClick={()=>deleteProductFromCart(item.product.id)} >удалить</Button>
                                </li>)
                        }
                        </ul>
                    </h1>
                )
            }
            <BlackButton label={"я кнопочка"} onKlick={handleSubmit} />
            </Col>
            <Col span={5} >
                <Button type="dashed" size={"large"} >
                    О нас
                </Button>
            </Col>
            <Col span={2} >

                <Link to="/products"><Button type="primary" >product</Button></Link>
                <Link to="/userdata"><Button type="primary" >user data</Button></Link>
                <Link to="/grabarloh"><h1>klick</h1></Link>

            </Col>
        </Row>




)
}

export default Header;

