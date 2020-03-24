import React, {useEffect, useState} from "react";
import by from '../../assets/images/by.png'
import PropTypes from "prop-types";
import {useCart} from "../../context/cart";
import Buttman from '../../assets/images/196.png'
import {Link} from "react-router-dom";
import {Button, Col, Row} from "antd";
import {useAuthentication, cartst, setCartst, setCart} from "../../context/authentication";


BlackCart.propTypes = {
    fun: PropTypes.func,
    xf: PropTypes.func,
}

function BlackCart({fun, string}) {
    const {isAuthenticated, setIsAuthenticated, setCart, cartst, setCartst, cartView, setCartView, cart, deleteProductFromCart, addProductToCart} = useAuthentication()
    const [render, setRender] = useState(false)
    const[total,setTotal] = useState()

    const cartToggle = () => {
        setCartst(!cartst)
    }
    const incrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        count.count += 1
        console.log(cart)
        setRender(!render)

    }
    const decrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        if (count.count > 0) {
            count.count -= 1
            setRender(!render)
        }
    }
    useEffect(() => {
            setCart([].concat(cart))
        let bill=cart.reduce((prev,current)=>prev+current.price*current.count,0)
        setTotal(bill)
        },
        [render])
    useEffect(() => {
            setCart([].concat(cart))
            let bill=cart.reduce((prev,current)=>prev+current.price*current.count,0)
            setTotal(bill)
        },
        [cart.length])
    return (
        <div>{cartView &&
        <div className={cartst ? "black-cart2" : "black-cart"}>
            <div className={"center"}> Корзина
            </div>
            <div className={"center"}><img src={by} alt={";j"} height={70}/></div>
            <div class="black-line2"></div>
            <div onClick={cartToggle} class="cart__close-btn">X</div>
            <div class="fot">
                {
                    cart.map((item) =>
                        <Row>
                            <Col span={6} offset={1}>
                                <div><img src={item.images.length ? item.images[0].url : Buttman}
                                          className={"photocart"}/></div>
                            </Col>
                            <Col span={4} offset={1}>{item.name}</Col>
                            <Col span={8} offset={1}>
                                <div className={"column"}>
                                    <div className={"center"}>
                                        <div className={"count-button-style"}
                                             onClick={() => incrementCount(item.id)}> +
                                        </div>
                                        <div>{(item.count) + " " + item.unit_type}</div>
                                        <div className={"count-button-style"}
                                             onClick={() => decrementCount(item.id)}>-
                                        </div>
                                    </div>
                                    <div>{item.price * item.count}руб.</div>
                                </div>
                            </Col>
                            <Col span={1} offset={1}>
                                <div onClick={() => deleteProductFromCart(item.id)} className="shelf-item__del">X
                                </div>
                            </Col>
                        </Row>)
                }
                <Row>
                    {cart.length&&<Col offset={13} span={9}>Итого:{total} руб.</Col>}
                </Row>

                <Link to={"/cart"}>
                    <div className="buy-btn">Оформить заказ</div>
                </Link>
            </div>
        </div>}
        </div>

    )

}

export default BlackCart