import React, {useEffect, useState} from "react";
import {useAuthentication} from "../../context/authentication";
import {Col, Row, Menu, Button, Select, notification} from "antd";

import Buttman from "../../assets/images/196.png";
import header from "../../assets/images/header (3).png";
import {
    getAddress, CreateOrder
} from "../../API/API";
import {Link,withRouter} from "react-router-dom";

function Cart({history}) {
    const [select,setSelect]=useState(false)
    const { Option } = Select;
    const {cart, setCart, deleteProductFromCart, setCartView, setCartst} = useAuthentication()
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [render, setRender] = useState(false)
    const [address, setAddress] = useState([])
    const [city, setCity] = useState()
    const[menust,setMenust]=useState(false)
    const chooseCity = event => {
        setCity(event)
            }

    const incrementCount = (id) => {
        let count = cart.find(item => item.id == id)
        count.count += 1
        setRender(!render)
            }
    const handle = async (event) => {
        event.preventDefault()
        if(city){
        let arrayOrdereProducts = []
        function createOrederedProducts(item) {
            const count = +item.count
            const orderedProductData = {
                product_id: item.id,
                count: count,
            }
            return orderedProductData
        }

        cart.map(item => {
            arrayOrdereProducts.push(createOrederedProducts(item))
        })
        const orderData = {
            ordered_products: arrayOrdereProducts,
            address_id: city.id,
        }
        try {console.log("nen")
            const response = await CreateOrder(orderData)
            notification.success({message:"ваш заказ успешно отправлен"})
            history.push("/main/")
        } catch (e) {
            console.log(e)
        }}
        else{
            notification.error({message:"город не выбран"})
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
                console.log(address)
            } catch (e) {
                console.log('ошибка')

            }
        };
        fetchAddress();
    },[])
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
    useEffect(()=>{
        let bill = cart.reduce((prev, current) => prev + current.price * current.count, 0)
        setTotal(bill)}
        , [cart.length]
    )
    if(cart.length){
    return (<div className={"white"}>
        <img src={header} className={'headerimage'}/>
        <h1><b>Ваша корзина</b></h1>
        <Row><Col span={6} offset={1}></Col><Col span={4} offset={1}><div className={"cart-product-name"}>Название</div></Col><Col span={8} offset={1}>
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
        <Row><Col offset={1} span={10}>
            <Select defaultValue={"Выберите ваш адресс"} onChange={chooseCity} style={{width:480}}>
                {address.map(item=><Option value={item.city}><b>город:</b>{item.city} <b>улица:</b>{item.street} <b>здание:</b>{item.building} <b>квартира:</b>{item.flat}</Option>)}
            </Select>
        </Col><Col offset={9} span={2}>
            <div className={"confirm-order-box"}>Итого:{cart.length ? total : 0}руб.
                <div onClick={ handle}  className={"confirm-order-botton"}>Оформить</div>
            </div>
        </Col></Row>}
    </div>)}
    else{
        return <div className={"white"}>
            <img src={header} className={'headerimage'}/>
            <h1 className={"center"}><b>Ваша корзина пуста</b></h1>
                <Link  to={"/products"}><div className={"cart-return-toproducts-href"}>Перейти к списку продуктов</div></Link>
        </div>
    }
}

export default withRouter(Cart)