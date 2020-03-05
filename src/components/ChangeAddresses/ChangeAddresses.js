import React, {useState} from "react";
import {Button, Col, Icon, Input, Row} from "antd";
import {Link} from "react-router-dom";
import logo from "../../assets/images/cover.png";
import {getAddress, patchUserAddress} from "../../API/API";
import {useAuthentication} from "../../context/authentication";


function ChangeAddresses(props) {
    const {addressChange,setAddressChange,editButtom,setEditButtom} = useAuthentication()
    const [addressState2, setAddressState2] = useState("")
    const [city, setCity] = useState(props.city)
    const [building, setBuilding] = useState(props.building)
    const [flat, setFlat] = useState(props.flat)
    const [street, setStreet] = useState(props.street)
    const [addresses, setAddress] = useState([]);
    const [addressId, setAddressId] = useState(null)
    const [addressState, setAddressState] = useState("")
    const [editAddress, setEditAddress] = useState("")
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
    const changeAddresState = () => {
        if (addressState) {
            setAddressState(false)
        }
    }


    return (
        <div onClick={changeAddresState2} className={editButtom?"blur":"empty"}>< div onClick={preventEvent} className={!editButtom ? "address-style2" : "address-style"}>
        <Row>

            <Col>
                <Link to={"/loginpage"}><img src={logo}
                                             className={"logoforlogin"}/></Link>
                <h1 className={"zagolovok"}>измените ваш адресс</h1>
                <div className={"greenline"}></div>
                <Input
                    prefix={<Icon type="text"
                                  style={{color: 'rgba(0,0,0,.25)'}}/>}
                    placeholder="Введите город"
                    name="username"
                    onChange={changeCity}
                    size={"large"}
                    className={"login-input"}
                    value={city}
                />
                <Input
                    prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                    placeholder="Введите улицу"
                    name="username"
                    onChange={changeStreet}
                    size={"large"}
                    className={"login-input"}
                    value={street}
                /><Input
                prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                placeholder="Введите номер дома"
                name="username"
                onChange={changeBuilding}
                size={"large"}
                className={"login-input"}
                value={building}
            /><Input
                prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                placeholder="Введите номер квартиры"
                name="username"
                onChange={changeFlat}
                size={"large"}
                className={"login-input"}
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