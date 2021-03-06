import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button,Row, Col} from 'antd';
import { AddressIn} from "../../API/API";
import {Link, withRouter} from 'react-router-dom'
import {useAuthentication} from "../../context/authentication";
import logo from "../../assets/images/cover.png";

function Addresses({history}) {
    const [city, setCity] = useState('')
    const [building, setBuilding] = useState('')
    const [flat, setFlat] = useState("")
    const [street, setStreet] = useState("")
    const {setHeaderStatus} = useAuthentication()
    const changeCity = event => {
        setCity(event.target.value)
    }
    const changeBuilding = event => {
        setBuilding(event.target.value)
    }
    const changeFlat = event => {
        setFlat(event.target.value)
    }
    const changeStreet = event => {
        setStreet(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!flat) {
            setFlat("нет")
        }
        const data = {
            city: city,
            street: street,
            building: building,
            flat: flat,
        }
        try {
            const response = await AddressIn(data)
            history.push("/userdata")

        } catch (e) {
            console.log(e.name + "AddressIn")
        }

    }
    useEffect(() => {
            setHeaderStatus(false)
        },
    )
    return (
        <div>
            <div className={"login__container"}>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <Col>
                            <Link to={"/main"}><img src={logo} className={"login__picture"}/></Link>
                            <h1 className={"login__text"}>Введите ваш адрес</h1>
                            <Input
                                prefix={<Icon type="text" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Введите город"
                                name="username"
                                onChange={changeCity}
                                size={"large"}
                                className={"login__input"}
                            />
                            <Input
                                prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Введите улицу"
                                name="username"
                                onChange={changeStreet}
                                size={"large"}
                                className={"login__input"}
                            /><Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите номер дома"
                            name="username"
                            onChange={changeBuilding}
                            size={"large"}
                            className={"login__input"}
                        /><Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите номер квартиры"
                            name="username"
                            onChange={changeFlat}
                            size={"large"}
                            className={"login__input"}
                        />
                            <Button disabled={!city || !street || !building} className={"greenbuttom"} size={"large"}
                                    htmlType="submit">Добавить</Button>
                        </Col>
                    </Form>
                </Row>
            </div>
        </div>
    )
}

export default withRouter(Addresses)