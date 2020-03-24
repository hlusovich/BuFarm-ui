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
    return (<>
        <img src={header} className={'header__image'}/>
        <h1><b>Ваша корзина</b></h1>
        <Row><Col span={6} offset={1}></Col><Col span={4} offset={1}><div className={"cart__product--name"}>Название</div></Col><Col span={8} offset={1}>
            <div className={"center"}>Количество</div>
        </Col></Row>
        {cart.map((item) =>
            <Row>
                <div className={"cart__block"}>
                    <Col span={6} offset={1}>
                        <div><img src={item.images.length ? item.images[0].url : Buttman}
                                  className={"cart__image"}/></div>
                    </Col>
                    <Col span={4} offset={1}>
                        <div className={"cart__text"}>{item.name}</div>
                    </Col>
                    <Col span={8} offset={1}>
                        <div className={"blackCart__column"}>
                            <div className={"center"}>
                                <div className={"blackCart__countbutton"}
                                     onClick={() => decrementCount(item.id)}>-
                                </div>

                                <div className={"cart__text "}>{(item.count) + " " + item.unit_type}</div>
                                <div className={"blackCart__countbutton"}
                                     onClick={() => incrementCount(item.id)}> +
                                </div>
                            </div>
                            <div className={"cart__unit"}>{item.price * item.count}руб./{item.unit_type}</div>
                        </div>
                    </Col>
                    <Col span={1} offset={1}>
                        <div onClick={() => deleteProductFromCart(item.id)} className="cart__delbuttom">X
                        </div>
                    </Col>
                </div>
            </Row>
        )
        }
        <Row><Col offset={1} span={10} xs={20}>
            <Select defaultValue={"Выберите ваш адресс"} onChange={chooseCity} className={"cart__changeAddress"}>
                {address.map(item=><Option className={"cart__select--item"} value={item.city}><b>город:</b>{item.city} <b>улица:</b>{item.street} <b>здание:</b>{item.building} <b>квартира:</b>{item.flat}</Option>)}
            </Select>
        </Col><Col   offset={1} md={2} xs={8}>
            <div className={"cart__confirm--box"}>Итого:{cart.length ? total : 0}руб.
                <div onClick={ handle}  className={"confirm-order-button"}>Оформить</div>
            </div>
        </Col></Row>}
    </>)}
    else{
        return <>
            <img src={header} className={'header__image'}/>
            <h1 className={"center"}><b>Ваша корзина пуста</b></h1>
                <Link  to={"/products"}><div className={"cart-return-toproducts-href"}>Перейти к списку продуктов</div></Link>
        </>
    }
}

export default withRouter(Cart)