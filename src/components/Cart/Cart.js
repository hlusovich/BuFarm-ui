import React, {useEffect, useState} from "react";
import {useAuthentication} from "../../context/authentication";
import {Col, Row, Menu,Button} from "antd";
import Buttman from "../../assets/images/196.png";
import header from "../../assets/images/header (3).png";
import {
    getAddress, CreateOrder
} from "../../API/API";

function Cart() {
    const {cart, setCart, deleteProductFromCart, setCartView, setCartst} = useAuthentication()
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [render, setRender] = useState(false)
    const [address, setAddress] = useState()
    const [city, setCity] = useState("")
    const[menust,setMenust]=useState(false)
    const chooseCity = (value) => {
        setCity(value)
    }

    const incrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        count.count += 1
        console.log(cart)
        setRender(!render)

    }
    const handle = async (event) => {
        event.preventDefault()
        let arrayOrdereProducts = []

        function createOrederedProducts(item) {
            const count = +item.count
            const orderedProductData = {
                product_id: item.product.id,
                count: count,
            }
            return orderedProductData
        }

        cart.map(item => {
            arrayOrdereProducts.push(createOrederedProducts(item))
        })
        const orderData = {
            ordered_products: arrayOrdereProducts,
            address_id: city,
        }

        try {
            const response = await CreateOrder(orderData)
        } catch (e) {
            console.log(e)
        }

    }
    const decrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        if (count.count > 0) {
            count.count -= 1
            setRender(!render)
        }
    }
    useEffect(() => {
        setCartView(false)
        setCartst(false)
        const fetchAddress = async () => {
            try {
                const addresses = await getAddress();
                setAddress(addresses)
            } catch (e) {
                console.log('ошибка')

            }
        };
        fetchAddress();
    }, [])
    const changeMenuStyle = ()=>{
        setMenust(true)
        console.log(menust)
    }
    useEffect(() => {
            setCart([].concat(cart))
            let bill = cart.reduce((prev, current) => prev + current.price * current.count, 0)
            setTotal(bill)
        },
        [render])
    return (<div className={"white"}>
        <img src={header} className={'headerimage'}/>
        <h1><b>Ваша корзина</b></h1>
        <Row><Col span={6} offset={1}></Col><Col span={4} offset={1}>Название</Col><Col span={8} offset={1}>
            <div className={"center"}>Количество</div>
        </Col></Row>
        {cart.map((item) =>
            <Row>
                <div className={"cart-block"}>
                    <Col span={6} offset={1}>
                        <div><img src={item.images.length ? item.images[0].url : Buttman}
                                  className={"image-cart"}/></div>
                    </Col>
                    <Col span={4} offset={1}>
                        <div className={"cart-text"}>{item.name}</div>
                    </Col>
                    <Col span={8} offset={1}>
                        <div className={"column"}>
                            <div className={"center"}>
                                <div className={"count-button-style"}
                                     onClick={() => decrementCount(item.id)}>-
                                </div>

                                <div className={"cart-text"}>{(item.count) + " " + item.unit_type}</div>
                                <div className={"count-button-style"}
                                     onClick={() => incrementCount(item.id)}> +
                                </div>
                            </div>
                            <div className={"cart-text-unit-tp"}>{item.price * item.count}руб./{item.unit_type}</div>
                        </div>
                    </Col>
                    <Col span={1} offset={1}>
                        <div onClick={() => deleteProductFromCart(item.id)} className="cart-del-buttom">X
                        </div>
                    </Col>
                </div>
            </Row>
        )
        }
        <Row><Col span={6}>
            {!menust&& <Button onClick={()=>changeMenuStyle()}>Выберите ваш город</Button>}
            {menust&&
                address.map(item=><p>{item.city}</p>
                )}

            </Col><Col offset={14} span={3}>
            <div className={"confirm-order-box"}>Итого:{cart.length ? total : 0}руб.
                <div onClick={() => handle} className={"confirm-order-botton"}>Оформить</div>
            </div>
        </Col></Row>
    </div>)
}

export default Cart