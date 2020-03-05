import React, {useState, useEffect, useContext} from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, image, flex} from 'antd';
import logo from '../../assets/images/logo192.png'
import PropTypes from 'prop-types';
import {useAuthentication} from "../../context/authentication";
import {useCart, CartContext} from "../../context/cart";
import {Link} from "react-router-dom";
import BlackButton from "../BlackButton/BlackButton";
import BlackCart from "../BlackCart/BlackCart";
import by2 from '../../assets/images/by2.jpg'





function Header() {
    const {isAuthenticated, setIsAuthenticated} = useAuthentication();
    const {deleteProductFromCart, cart,cartState,setCartState,setState,cartButton,
        setCartButton,CartButtomFunction} = useCart()
    const [cartMeny, setCartMeny] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        notification.error({message: "ты че примат"})


    }

    function CartViever(event) {

        if (cartButton == null) {
            console.log(cartButton+"1")
            CartButtomFunction()
            console.log(cartButton+"1")

        } else {
            setState()
        }
    }


    return (
        <div className={'navbar'}>

            <Row  type="flex" justify="space-between"   >
                <Col span={3}>
                    <div className={'left'}><img className="logo" src={logo} alt="logo"/></div>
                </Col>

                <Col span={4}  >
                    <div className={"navflex"}>
                        <Link>
                            <div className={'color'}> О нас</div>
                        </Link>
                        <Link to="/products">
                            <div className={'color2'}>products</div>
                        </Link>
                        <Link to="/userdata">
                            <div className={'color2'}>user</div>
                        </Link>
                    </div>

                </Col>
                <Col span={7} offset={3}>
                    <div className={"forsearch"}>
                    <Input size={"large"} placeholder={"search"}/>
                    <Button icon="search" onClick={() => setIsAuthenticated(!isAuthenticated)}
                            size={"large"}>Search</Button>
                    </div>
                </Col>
                <Col>
                    <div className="cart" onClick={CartViever}><img src={by2}/></div>
                </Col>
                {cartButton && <BlackCart string={cartMeny} fun={CartViever}/>}

            </Row>

        </div>


    )
}

export default Header;

