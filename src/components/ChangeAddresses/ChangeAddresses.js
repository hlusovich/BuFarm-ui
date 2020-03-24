import React, {useState} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import {Link} from "react-router-dom";
import logo from "../../assets/images/cover.png";
import {getAddress, patchUserAddress} from "../../API/API";
import {useAuthentication} from "../../context/authentication";
import PropTypes from "prop-types";
ChangeAddresses.propTypes={
    stait: PropTypes.string,
    setStait:PropTypes.func
}



function ChangeAddresses(props) {
    const {addressChange, setAddressChange, editButtom, setEditButtom} = useAuthentication()
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
    const preventEvent = (event) => {
        event.stopPropagation()
    }
    const changeAddresState2 = () => {
        setEditButtom(!editButtom)
        props.setStait(false)
    }
    const changeCity = event => {
        setCity(event.target.value)
    }
    const changeBuilding = event => {
        setBuilding(event.target.value)
    }
    const editAddressList = async () => {
        setEditButtom(!editButtom)
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

        } catch (e) {
            console.log(e.name + "AddressPatch")
        }


    }

    return (
        <div onClick={changeAddresState2} className={props.stait ? "blur" : "empty"}>
            < div onClick={preventEvent} className={props.stait ? "userdata__address--in" : "userdata__address--out"}>
                <Row>

                    <Col>
                        <Link to={"/main"}><img src={logo}
                                                     className={"login__picture"}/></Link>
                        <h1 className={"login__text"}>измените ваш адресс</h1>
                        <Input
                            prefix={<Icon type="text"
                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
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

                        <Button disabled={!city || !street || !building}
                                className={"greenbuttom"}
                                size={"large"}
                                onClick={editAddressList}>Изменить</Button>
                    </Col>

                </Row>
            </div>
        </div>
    )

}

export default ChangeAddresses