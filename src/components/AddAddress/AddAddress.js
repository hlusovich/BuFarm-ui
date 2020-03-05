import React, {useEffect, useState} from "react";
import {Button, Col, Form, Icon, Input, Row} from "antd";
import {Link} from "react-router-dom";
import logo from "../../assets/images/cover.png";
import {AddressIn, getAddress} from "../../API/API";
import {useAuthentication} from "../../context/authentication";

function AddAddress(props) {
    const {isAuthenticated, setIsAuthenticated, headerStatus, setHeaderStatus,addressChange,editButtom,setEditButtom,setAddressChange} = useAuthentication()
    const [addressState, setAddressState] = useState(true)
    const [addCity, setAddCity] = useState('')
    const [addBuilding, setAddBuilding] = useState('')
    const [addFlat, setAddFlat] = useState("")
    const [addStreet, setAddStreet] = useState("")
    const [flag,setFlag] = useState("")
    const changeAddFlat = event => {
        setAddFlat(event.target.value)
    }
    const changeAddStreet = event => {
        setAddStreet(event.target.value)
    }
    const changeAddCity = event => {
        setAddCity(event.target.value)
    }
    const changeAddBuilding = event => {
        setAddBuilding(event.target.value)
    }
    const changeAddresState = () => {
        setAddressState(false)
        setFlag(true)

        }

    const preventEvent = (event) => {
        event.stopPropagation()
    }
    const handleSubmitAddAddress = async (event) => {
        event.preventDefault()
        if (addFlat) {
            const data = {
                city: addCity,
                street: addStreet,
                building: addBuilding,
                flat: addFlat,
            }
            try {
                const response = await AddressIn(data)
                setAddressChange(!addressChange)


            } catch (e) {
                console.log(e.name + "AddressIn")

            }
        } else {
            const data = {
                city: addCity,
                street: addStreet,
                building: addBuilding,
                flat: "нет",
            }
            try {
                const response = await AddressIn(data)
                setAddressChange(!addressChange)



            } catch (e) {
                console.log(e.name + "AddressIn")

            }}

        // eslint-disable-next-line react-hooks/rules-of-hooks
            setAddressState(false)
        setAddCity("")
        setAddFlat("")
        setAddStreet("")
        setAddBuilding("")

    }
    useEffect(()=>
        setAddressState(true)
    ,[props.addressState])
    return (<div onClick={changeAddresState} className={addressState ? "blur2" : "empty"}>
        <div onClick={preventEvent} className={!addressState ? "address-style2" : "address-style"}>
            <Row>
                <Form onSubmit={handleSubmitAddAddress}>
                    <Col>
                        <Link to={"/loginpage"}><img src={logo} className={"logoforlogin"}/></Link>
                        <h1 className={"zagolovok"}>Введите ваш адресс</h1>
                        <div className={"greenline"}></div>
                        <Input
                            prefix={<Icon type="text" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите город"
                            name="username"
                            onChange={changeAddCity}
                            size={"large"}
                            className={"login-input"}
                            value={addCity}
                        />
                        <Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите улицу"
                            name="username"
                            onChange={changeAddStreet}
                            size={"large"}
                            className={"login-input"}
                            value={addStreet}
                        /><Input
                        prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Введите номер дома"
                        name="username"
                        onChange={changeAddBuilding}
                        size={"large"}
                        className={"login-input"}
                        value={addBuilding}
                    /><Input
                        prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Введите номер квартиры"
                        name="username"
                        onChange={changeAddFlat}
                        size={"large"}
                        className={"login-input"}
                        value={addFlat}
                    />

                        <Button disabled={!addCity || !addStreet || !addBuilding} className={"greenbuttom"}
                                size={"large"}
                                htmlType="submit">Добавить</Button>
                    </Col>
                </Form>
            </Row>
        </div>
    </div>)

}

export default AddAddress