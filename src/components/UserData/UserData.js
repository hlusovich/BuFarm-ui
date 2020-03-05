import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {
    AddressIn,
    signIn,
    getUser,
    getAddress,
    deleteAddress,
    patchUserData,
    UserIn,
    patchUserAddress
} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import BlackButton from "../BlackButton/BlackButton";
import {useAuthentication, headerStatus, setHeaderStatus} from "../../context/authentication";
import logo from "../../assets/images/cover.png";
import ChangeAddresses from "../ChangeAddresses/ChangeAddresses";
import header from "../../assets/images/header (3).png";
import AddAddress from "../AddAddress/AddAddress";

function UserData({history}) {


    const {isAuthenticated, setIsAuthenticated, headerStatus, setHeaderStatus, addressChange, editButtom, setEditButtom, setMainStatus, mainStatus} = useAuthentication()
    const [user, setUser] = useState();
    const [addresses, setAddress] = useState([]);
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [editAddress, setEditAddress] = useState("")
    const [city, setCity] = useState('')
    const [building, setBuilding] = useState('')
    const [flat, setFlat] = useState("")
    const [street, setStreet] = useState("")
    const [addressId, setAddressId] = useState(null)
    const [addressState, setAddressState] = useState("")
    const [addresListWiev, setAddresListWiev] = useState(false)


    const [addresChangeListWiev, setAddresChangeListWiev] = useState("")
    const [addressState2, setAddressState2] = useState("")
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
    const addAddressButtom = () => {
        if (addressState2) {
            setAddressState2(false)
        }
        setAddresListWiev(true)


        setAddressState(!addressState)

    }

    const changeEditAddress = async (id, city, street, building, flat) => {

        setEditButtom(!editButtom)
        setCity(city)
        setBuilding(building)
        setStreet(street)
        setFlat(flat)
        setAddressId(id)
        if (!addresChangeListWiev) {
            setAddresChangeListWiev(true)
        }
        setAddresListWiev(false)


        setAddressState(!addressState)
    }

    const changeData = async () => {
        if (validateEmail(email)) {
            const data = {
                email: email,
                first_name: firstName,
                last_name: familyName,
            }
            let res = null;
            try {
                res = await patchUserData(data, user.id)
            } catch (e) {
                console.log(e + "patchUserData")
            }
            setEdit(false)
        } else {
            notification.error({message: "проверьте email"})
        }

    }


    const canceledButtom = async () => {
        setEdit(false)

        try {
            const user = await getUser();
            setUser(user)
            setEmail(user.email)
            setFirstName(user.first_name)
            setFamilyName(user.last_name)

        } catch (e) {
            console.log(e + "getUser")
        }
    }

    const changeEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)

    }
    const changeFirstName = (event) => {
        event.preventDefault()
        setFirstName(event.target.value)

    }
    const changeFamilyName = (event) => {
        event.preventDefault()
        setFamilyName(event.target.value)

    }

    const changeEdit = () => {
        if (!edit) {
            setEdit(true)
        } else if (edit) {
            setEdit(false)
        }
    }

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const addresses = await getAddress();
                setAddress(addresses)
            } catch (e) {
                console.log('getAddress', e)
            }
        };
        fetchAddress();

    }, [addressChange])
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser();
                setUser(user)
                setEmail(user.email)
                setFirstName(user.first_name)
                setFamilyName(user.last_name)

            } catch (e) {
                console.log(e + "getUser")
            }
        };
        fetchUser();
    }, []);
    const handleSubmit = event => {
        history.push("/addresses")
    }
    const delAddress = async (productId) => {
        const newAddress = addresses.filter(product => product.id != productId);
        setAddress(newAddress)
        try {
            const response = await deleteAddress(productId)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
            const wievHeader = () => {
                setHeaderStatus(true)
            }
            wievHeader()
        }, []
    )
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    const editAddressList = async () => {
        const data = {
            city: city,
            street: street,
            building: building,
            flat: flat
        }
        try {
            const response = await patchUserAddress(data, addressId)
            const addresses = await getAddress();
            setAddress(addresses)

        } catch (e) {
            console.log(e.name + "AddressPatch")
        }
        setEditAddress(false)
        setAddressState2(false)
    }

    const preventEvent = (event) => {
        event.stopPropagation()
    }
    const changeAddresState2 = () => {
        if (addressState2) {
            setAddressState2(false)
        }
    }


    return (

        <div><img src={header} className={'headerimage'}/>
            <>
                <div className={"userdata"}>
                    <Row>

                        <Col offset={2}>

                            <div className={"nowrap"}><h1 className={"zagolovok2"}>Ваши персональные данные:{!edit ?
                                <Button icon="edit" onClick={() => changeEdit()}>Редактировать</Button> : <><Button
                                    icon="edit"
                                    onClick={() => canceledButtom()}>Отмена</Button>
                                    <Button icon="edit" onClick={() => changeData()}>Изменить данные</Button></>}</h1>
                            </div>
                            {user && (<ul>
                                    <p className={"text-user2"}>Email</p>
                                    <li><Input disabled={!edit} className={!edit ? "inputstyle" : "inputstyle2"}
                                               onChange={changeEmail} value={email}/></li>
                                    <a className={"greenline3"}></a>
                                    <p className={"text-user2"}>Имя</p>
                                    <li><Input className={!edit ? "inputstyle" : "inputstyle2"}
                                               onChange={changeFirstName}
                                               disabled={!edit} value={firstName}/></li>
                                    <a className={"greenline3"}></a>
                                    <p className={"text-user2"}>Фамилия</p>
                                    <li><Input className={!edit ? "inputstyle" : "inputstyle2"}
                                               onChange={changeFamilyName}
                                               disabled={!edit} value={familyName}/></li>
                                    <a className={"greenline3"}></a>
                                    <h2 className={"text-user2"}>Список ваших адресcов</h2>

                                    {addresses.map((item) => <div className={"nowrap"}><Button
                                        className={"margin"}
                                        type="danger"
                                        shape="circle"
                                        icon="close"
                                        onClick={() => delAddress(item.id)}/><Button
                                        className={"margin"} type="primary" shape="circle" icon="edit"
                                        onClick={() => changeEditAddress(item.id, item.city, item.street, item.building, item.flat)}/>
                                        <p className={"text-user"}><Input disabled={true}
                                                                          className={"inputstyle-editadress"}
                                                                          value={" город " + item.city + " улица " + item.street + " дом " + item.building + " квартира " + item.flat}/>
                                        </p>
                                    </div>)}


                                    < Button className="greenbuttom2" onClick={addAddressButtom}>
                                        добавить адресс
                                    </Button>
                                </ul>

                            )
                            }

                        </Col>

                    </Row>
                    {addresChangeListWiev &&
                    <ChangeAddresses id={addressId} city={city} building={building} flat={flat}
                                     street={street}/>
                    }
                    {addresListWiev && <AddAddress addressState={addressState}/>}
                    < /div>

                    </>

                </div>


                )
                }

                export default withRouter(UserData)