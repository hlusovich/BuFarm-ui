import React, { useState} from "react";
import {Button, Col, Form, Icon, Input, Row} from "antd";
import {Link} from "react-router-dom";
import logo from "../../assets/images/cover.png";
import {AddressIn, getAddress, patchUserAddress} from "../../API/API";
import {useAuthentication} from "../../context/authentication";
import PropTypes from "prop-types";
ChangeAddresses.propTypes = {
    state: PropTypes.string,
    setState: PropTypes.func
}
function ChangeAddresses(props) {
    const {addressChange, setAddressChange} = useAuthentication()
    const [city, setCity] = useState(props.city)
    const [building, setBuilding] = useState(props.building)
    const [flat, setFlat] = useState(props.flat)
    const [street, setStreet] = useState(props.street)
    const changeFlat = event => {
        setFlat(event.target.value)
    }
    const changeStreet = event => {
        setStreet(event.target.value)
    }
    const changeCity = event => {
        setCity(event.target.value)
    }
    const changeBuilding = event => {
        setBuilding(event.target.value)
    }
    const changeAddresState = () => {
        props.setState(false)
    }

    const preventEvent = (event) => {
        event.stopPropagation()
    }
    const editAddressList = async (event) => {
        event.preventDefault()
        const data = {
            city: city,
            street: street,
            building: building,
            flat: flat
        }
        try {
            const response = await patchUserAddress(data, props.id)
            const addresses = await getAddress();
            setAddressChange(!addressChange)
            props.setState(!props.state)

        } catch (e) {
            console.log(e.name + "AddressPatch")
        }
    }
     const addAddress = async (event) => {
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
             setAddressChange(!addressChange)
         } catch (e) {
             console.log(e.name + "AddressIn")
         }
        props.setState(false)
        setCity("")
        setFlat("")
        setStreet("")
        setBuilding("")
    }

    return (
        <div onClick={changeAddresState} className={props.state ? "blur" : "empty"}>
            <div onClick={preventEvent}
                 className={props.state ? "userdata__address--in" : "userdata__address--out"}>
                <Row>
                    <Form onSubmit={props.type=="add"?addAddress:editAddressList}>
                        <Col>
                            <Link to={"/main"}><img src={logo} className={"login__picture"}/></Link>
                            <h1 className={"login__text"}>{props.title}</h1>
                            <Input
                                prefix={<Icon type="text" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Введите город"
                                name="username"
                                onChange={changeCity}
                                size={"large"}
                                className={"login__input"}
                                value={city}
                            />
                            <Input
                                prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Введите улицу"
                                name="username"
                                onChange={changeStreet}
                                size={"large"}
                                className={"login__input"}
                                value={street}
                            /><Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите номер дома"
                            name="username"
                            onChange={changeBuilding}
                            size={"large"}
                            className={"login__input"}
                            value={building}
                        /><Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите номер квартиры"
                            name="username"
                            onChange={changeFlat}
                            size={"large"}
                            className={"login__input"}
                            value={flat}
                        />

                           {props.type=="add"? <Button disabled={!city || !street || !building} className={"greenbuttom"}
                                                        size={"large"}
                                                        htmlType="submit">Добавить</Button>:<Button disabled={!city || !street || !building} className={"greenbuttom"}
                                                                                                    size={"large"}
                                                                                                    htmlType="submit">Изменить</Button>}
                        </Col>
                    </Form>
                </Row>
            </div>
        </div>)

}

export default ChangeAddresses