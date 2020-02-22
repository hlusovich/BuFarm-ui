import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn, AddressIn} from "../../API/API";
import {Link, withRouter} from 'react-router-dom'
import {useAuthentication,headerStatus,setHeaderStatus} from "../../context/authentication";

function Addresses({history}) {
    const [city, setCity] = useState('')
    const [building, setBuilding] = useState('')
    const [flat, setFlat] = useState("")
    const [street, setStreet] = useState("")
    const {headerStatus,setHeaderStatus} = useAuthentication()

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
        if(flat){
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

        }}
        else{const data = {
            city: city,
            street: street,
            building: building,
            flat: "нет",
        }
            try {
                const response = await AddressIn(data)
                history.push("/userdata")

            } catch (e) {
                console.log(e.name + "AddressIn")

            }}
    }
    useEffect(() => {
            const wievHeader = () => {
                if (window.location.href == "http://localhost:3000/loginpage" || window.location.href == "http://localhost:3000/addresses" || window.location.href == "http://localhost:3000/users") {
                    setHeaderStatus(false)
                }
                else {
                    setHeaderStatus(true)                }

            }
            wievHeader()
        }
    )
    return (
        <div className={"login-style"}>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col>
                        <h1 className={"zagolovok"}>Введите ваш адресс</h1>
                        <div className={"greenline"}></div>
                        <Input
                            prefix={<Icon type="text" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите город"
                            name="username"
                            onChange={changeCity}
                            size={"large"}
                            className={"login-input"}
                        />
                        <Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите улицу"
                            name="username"
                            onChange={changeStreet}
                            size={"large"}
                            className={"login-input"}
                        /><Input
                        prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Введите номер дома"
                        name="username"
                        onChange={changeBuilding}
                        size={"large"}
                        className={"login-input"}
                    /><Input
                        prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Введите номер квартиры"
                        name="username"
                        onChange={changeFlat}
                        size={"large"}
                        className={"login-input"}
                    />

                        <Button disabled={!city || !street || !building} className={"greenbuttom"} size={"large"}
                                htmlType="submit">Добавить</Button>
                    </Col>
                </Form>
            </Row>
        </div>
    )
}

export default withRouter(Addresses)