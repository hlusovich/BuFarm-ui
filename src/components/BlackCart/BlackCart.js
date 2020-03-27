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
    const {setCart, cartst, setCartst, cartView, cart, deleteProductFromCart,} = useAuthentication()
    const [render, setRender] = useState(false)
    const [total, setTotal] = useState(0)
    const cartToggle = () => {
        setCartst(!cartst)
    }
    const incrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        count.count += 1
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
            let bill = cart.reduce((prev, current) => prev + current.price * current.count, 0)
            setTotal(bill)
        },
        [render])
    useEffect(() => {
            setCart([].concat(cart))
            let bill = cart.reduce((prev, current) => prev + current.price * current.count, 0)
            setTotal(bill)
        },
        [cart.length])
    return (
        <div>{cartView &&
        <div className={cartst ? "blackCart__in" : "blackCart__out"}>
            <div className={"center"}> Корзина</div>
            <div className={"center"}><img src={by} alt={";j"} height={70}/></div>
            <div class="blackCart__line"></div>
            <div onClick={cartToggle} class="backCart__closebtn">X</div>
            <div class="blackCart__foter">
                {cart.map((item) =>
                    <div className={"blackCart__item"}>
                        <Row>
                            <Col span={5} offset={1}>
                                <div><img src={item.images.length ? item.images[0].url : Buttman}
                                          className={"blackCart__img"}/></div>
                            </Col>
                            <Col span={4} offset={2}>
                                <div className={"textcenter"}>{item.name}</div>
                            </Col>
                            <Col span={8} offset={1}>
                                <div className={"blackCart__column"}>
                                    <div className={"center"}>
                                        <div className={"blackCart__countbutton"}
                                             onClick={() => decrementCount(item.id)}> -
                                        </div>
                                        <div>{(item.count) + " " + item.unit_type}</div>
                                        <div className={"blackCart__countbutton"}
                                             onClick={() => incrementCount(item.id)}>+
                                        </div>
                                    </div>
                                    <div>{item.price * item.count}руб.</div>
                                </div>
                            </Col>
                            <Col span={1} offset={1}>
                                <div onClick={() => deleteProductFromCart(item.id)} className="blackCart__del">X
                                </div>
                            </Col>
                        </Row></div>)
                }
                <Row>
                    <Col offset={13} span={9}>Итого:{total} руб.</Col>
                </Row>
                <div className={"blackCart__btn--position"}>
                    <Link  to={"/cart"}>
                        <Button  disabled={!cart.length} className="blackCart__cartbtn">Оформить заказ</Button>
                    </Link>
                </div>
            </div>
        </div>}
        </div>

    )

}

export default BlackCart