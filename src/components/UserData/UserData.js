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


function UserData({history}) {
    const {isAuthenticated, setIsAuthenticated, headerStatus, setHeaderStatus} = useAuthentication()
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

    const [addCity, setAddCity] = useState('')
    const [addBuilding, setAddBuilding] = useState('')
    const [addFlat, setAddFlat] = useState("")
    const [addStreet, setAddStreet] = useState("")
    const[addresChangeListWiev,setAddresChangeListWiev] = useState("")
    const[addressState2,setAddressState2]=useState("")
    const changeCity = event => {
        setCity(event.target.value)
    }
    const changeBuilding = event => {
        setBuilding(event.target.value)
    }
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
    const changeFlat = event => {
        setFlat(event.target.value)
    }
    const changeStreet = event => {
        setStreet(event.target.value)
    }
    const addAddressButtom = () => {
        if(addressState2){
        setAddressState2(false)}
            setAddresListWiev(true)

        if (addressState) {
            setAddressState(false)
        } else {
            setAddressState(true)
        }
    }

    const changeEditAddress = async (id,city,street,building,flat) => {
        setCity(city)
        setBuilding(building)
        setStreet(street)
        setFlat(flat)
        setAddressId(id)
            if(!addresChangeListWiev){
        setAddresChangeListWiev(true)}
        if (!addressState2) {
            setAddressState2(true)
        } else {
            setAddressState2(false)
        }
        if (addressState) {
            setAddressState(false)
    }}

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
            }setEdit(false)
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
    }, [])
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
                if (window.location.href == "http://localhost:3000/loginpage" || window.location.href == "http://localhost:3000/addresses" || window.location.href == "http://localhost:3000/users") {
                    setHeaderStatus(false)
                } else {
                    setHeaderStatus(true)
                    console.log("да2")
                }

            }
            wievHeader()
        }, []
    )
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
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
                const addresses = await getAddress();
                setAddress(addresses)

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
                const addresses = await getAddress();
                setAddress(addresses)

            } catch (e) {
                console.log(e.name + "AddressIn")

            }
        }

        setAddressState(false)
        setAddCity("")
        setAddFlat("")
        setAddStreet("")
        setAddBuilding("")

    }
    const editAddressList=async()=>{
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
        const changeAddresState=()=>{
        if(addressState){
            setAddressState(false)
        }
    }
    const preventEvent=(event)=>{
        event.stopPropagation()
    }
    const changeAddresState2=()=>{
        if(addressState2){
            setAddressState2(false)
        }
    }





    return (
        <div >
        <>
        <div className={"userdata"}>
            <Row>

                <Col offset={2}>

                    <div className={"nowrap"}><h1 className={"zagolovok2"}>Ваши персональные данные:{!edit ?
                        <Button icon="edit" onClick={() => changeEdit()}>Редактировать</Button> : <><Button icon="edit"
                                                                                                            onClick={() => canceledButtom()}>Отмена</Button>
                            <Button icon="edit" onClick={() => changeData()}>Изменить данные</Button></>}</h1></div>
                    {user && (<ul>
                            <p className={"text-user2"}>Email</p>
                            <li><Input disabled={!edit} className={!edit ? "inputstyle" : "inputstyle2"}
                                       onChange={changeEmail} value={email}/></li>
                            <a className={"greenline3"}></a>
                            <p className={"text-user2"}>Имя</p>
                            <li><Input className={!edit ? "inputstyle" : "inputstyle2"} onChange={changeFirstName}
                                       disabled={!edit} value={firstName}/></li>
                            <a className={"greenline3"}></a>
                            <p className={"text-user2"}>Фамилия</p>
                            <li><Input className={!edit ? "inputstyle" : "inputstyle2"} onChange={changeFamilyName}
                                       disabled={!edit} value={familyName}/></li>
                            <a className={"greenline3"}></a>
                            <li><h2 className={"text-user2"}>Список ваших адресcов</h2>
                                <ul>
                                    {addresses.map((item) => <div className={"nowrap"}><Button
                                        className={"margin"}
                                        type="danger"
                                        shape="circle"
                                        icon="close"
                                        onClick={() => delAddress(item.id)}/><Button
                                        className={"margin"} type="primary" shape="circle" icon="edit"
                                        onClick={() => changeEditAddress(item.id,item.city,item.street,item.building,item.flat)}/>
                                        <li className={"text-user"}><Input disabled={true}
                                                                           className={"inputstyle-editadress"}
                                                                           value={" город " + item.city + " улица " + item.street + " дом " + item.building + " квартира " + item.flat}/>
                                        </li>
                                    </div>)}
                                </ul>

                                {addresChangeListWiev && <div onClick={changeAddresState2} className={addressState2?"blur":"empty"}>< div onClick={preventEvent} className={!addressState2 ? "address-style2" : "address-style"}>
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
                                </div></div>}

                                < Button className="greenbuttom2" onClick={addAddressButtom}>
                                    добавить адресс
                                </Button></li>
                        </ul>

                    )
                    }

                </Col>

            </Row>
            {addresListWiev && <div onClick={changeAddresState} className={addressState?"blur2":"empty"}> <div onClick={preventEvent} className={!addressState ? "address-style2" : "address-style"}>
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
            </div></div>}
            < /div>

                        </>

        </div>


                )
                }

                export default withRouter(UserData)