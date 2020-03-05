import React, {useEffect, useState} from "react";
import {useCart, CartContext} from "../../context/cart";
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification, image, flex, Radio,Select} from 'antd';
import Buttman from "../../assets/images/196.png";
import BlackButton from "../BlackButton/BlackButton";
import {AddressIn, signIn, getUser, getAddress} from "../../API/API";
import {OrderProductIn, CreateOrder, GetOrdet} from "../../API/API";
const { Option } = Select;

function Cart() {
    const [bool, setBool] = useState(true)
    const {deleteProductFromCart, cart, updateProduct, test, updTest} = useCart()
    const [addresses, setAddress] = useState([]);
    const [city, setCity] = useState(null)
    const fprInput = (event, item) => {
        const value = event.target.value
        item.count = value
        updateProduct(item)
    }

    useEffect(() => {
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

    const chooseCity = (value) => {
        setCity(value)
        console.log(city)
    }

    const handle = async (event) => {
        event.preventDefault()
        let arrayOrdereProducts = []

        function createOrederedProducts(item) {
            const count = Number(item.count)
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
            ordered_products:arrayOrdereProducts,
            address_id: city,
        }

        try {
            const response = await CreateOrder(orderData)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div>
            <h1>Корзина с продуктами</h1>
            <h3 className={"rightzagolovok"}>это аш 3 заголовок</h3>
            <h5>второй заголовок вообще не вкурсе зачем </h5>
            <Row align="middle" type="flex">
                <Col offset={2} span={4}>
                    <div className={"round3"}>
                        Изоображение
                    </div>
                </Col>
                < Col span={3}>
                    <div className={"round3"}>
                        Имя продукта
                    </div>
                </Col>
                < Col span={3}>
                    <div className={"round3"}>
                        Количество
                    </div>
                </Col>
                < Col span={6}>
                    <div className={"round3"}>
                        цена продукта
                    </div>
                </Col>
                <Col offset={1} span={3}>
                </Col>
            </Row>
            <div className={"black-line2"}>
            </div>

            {cart.map(item =>
                <Row align="middle" type="flex">
                    <Col offset={2} span={4}>
                        <div>
                            <img src={item.product.images.length ? item.product.images[0].url : Buttman}
                                 className={"photocart2"}/>
                        </div>
                    </Col>
                    < Col span={3}>
                        <div>{item.product.name}</div>
                    </Col>
                    < Col span={1}>
                        {bool && <Input type="number" onClick={() => setBool(false)} value={item.count}/>}
                        {!bool && <Input type="number" onChange={event => fprInput(event, item)}/>}
                    </Col>


                    < Col offset={2} span={6}>
                        <div>{item.product.price}</div>
                    </Col>
                    <Col offset={1} span={3}>
                        <BlackButton onKlick={() => deleteProductFromCart(item.product.id)} label={"удалить"}/>
                    </Col>
                </Row>)}
            <div className={"flexorder"}>
                <Select onChange={chooseCity} defaultValue="Выберите город" style={{ width: 120 }} >
                    {addresses.map(item => <Option value={item.id}
                                                   >{item.city}</Option>
                    )}


                </Select>
                <Button onClick={handle} disabled={!city || cart == false}> оформить заказ</Button>
            </div>


        </div>
    )

}

export default Cart