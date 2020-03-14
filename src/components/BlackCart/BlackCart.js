import React, {useState} from "react";
import by from '../../assets/images/by.png'
import PropTypes from "prop-types";
import {useCart} from "../../context/cart";
import Buttman from '../../assets/images/196.png'
import {Link} from "react-router-dom";
import {Button, Col, Row} from "antd";
import {useAuthentication,cartst,setCartst} from "../../context/authentication";



BlackCart.propTypes = {
    fun: PropTypes.func,
    xf: PropTypes.func,
}

function BlackCart({fun, string}) {
    const { isAuthenticated,setIsAuthenticated,cartst,setCartst,cartView,setCartView,cart,deleteProductFromCart,addProductToCart}=useAuthentication()
    const [xCond, setXCond] = useState(null)
    const xbytton = () => {
        if (xCond) {
            setXCond(null)
        } else {
            setXCond(true)
        }
    }
    const cartToggle = ()=>{
        setCartst(!cartst)
    }



    return (
        <div>{cartView&&
            <div className={cartst ? "black-cart2" : "black-cart"}>
            <div className={"center"}> Корзина
            </div>
            <div className={"center"}><img src={by} alt={";j"} height={70}/></div>
            <div class="black-line2"></div>
            <div onClick={cartToggle}  class="cart__close-btn">X</div>
            <div class="fot">
                {
                    cart.map((item) =>
                        <Row>
                            <Col span={6} offset={1} >
                            <div><img src={item.images.length ? item.images[0].url : Buttman}
                                      className={"photocart"}/></div></Col>
                            <Col span={4}offset={2}>{item.name}</Col>
                            <Col span={4} offset={2}><div className={"center"}>{item.count+" "+item.unit_type}</div></Col>
                            <Col span={4} offset={1}><div onClick={() => deleteProductFromCart(item.id)} className="shelf-item__del">X
                            </div></Col>
                        </Row>)
                }

                <Link to={"/cart"}><div className="buy-btn">Checkout</div></Link>
            </div>
        </div>}</div>

    )

}

export default BlackCart