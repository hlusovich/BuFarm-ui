import React, {useState} from "react";
import by from '../../assets/images/by.png'
import PropTypes from "prop-types";
import {useCart} from "../../context/cart";
import Buttman from '../../assets/images/196.png'
import {Link} from "react-router-dom";


BlackCart.propTypes = {
    fun: PropTypes.func.isRequired,
    xf: PropTypes.func,
}

function BlackCart({fun, string}) {
    const {cart, deleteProductFromCart,cartState,setState} = useCart()
    const [xCond, setXCond] = useState(null)
    const xbytton = () => {
        if (xCond) {
            setXCond(null)
        } else {
            setXCond(true)
        }
    }


    return (<div className={cartState ? "black-cart2" : "black-cart"}>
            <div className={"center"}> Корзина
            </div>
            <div className={"center"}><img src={by} alt={";j"} height={70}/></div>
            <div class="black-line2"></div>
            <div onClick={setState} class="cart__close-btn">X</div>
            <div class="fot">
                {
                    cart.map((item) =>
                        <div className="price">

                            <div><img src={item.product.images.length ? item.product.images[0].url : Buttman}
                                      className={"photocart"}/></div>
                            <div>{item.product.name}</div>
                            <div>{item.product.price}</div>
                            <div onClick={() => deleteProductFromCart(item.product.id)} className="shelf-item__del">X
                            </div>
                        </div>)
                }
                <Link to={"/cart"}><div className="buy-btn">Checkout</div></Link>
            </div>
        </div>

    )

}

export default BlackCart