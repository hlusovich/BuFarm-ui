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
import BlackCart from "../BlackCart/BlackCart";

function UserData({history}) {
    const {setHeaderStatus, addressChange, editButtom, setEditButtom} = useAuthentication()
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
    const [addressAddState, setAddressAddState] = useState("")
    const [addresAddListView, setAddresAddListView] = useState(false)
    const [addresChangeListView, setAddresChangeListView] = useState("")
    const [addressState2, setAddressState2] = useState("")
    const [adressChangeState, setAdressChangeState] = useState(false)
    const addAddressButtom = () => {
        if (addressState2) {
            setAddressState2(false)
        }
        setAddresAddListView(true)
        setEditButtom(!editButtom)
        setAddressAddState(!addressAddState)
    }

    const changeEditAddress = async (id, city, street, building, flat) => {
        setCity(city)
        setBuilding(building)
        setStreet(street)
        setFlat(flat)
        setAddressId(id)
        if (!addresChangeListView) {
            setAddresChangeListView(true)
        }
        setAdressChangeState(!adressChangeState)
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
        setEdit(!edit)
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


    return (

        <div><img src={header} className={'header__image'}/>
            <>
                <div className={"userdata"}>
                    <div className={"userdata__title"}><h1 className={"userdata__title--text"}>Ваши персональные
                        данные:{!edit ?
                            <div><Button className={"userdata__change--buttom"} icon="edit" onClick={() => changeEdit()}>Редактировать</Button></div> :
                            <div><Button className={"userdata__change--buttom"} icon="edit" onClick={() => changeData()}>Изменить данные</Button><Button className={"userdata__change--buttom"}
                                icon="edit"
                                onClick={() => canceledButtom()}>Отмена</Button>
                            </div>}</h1>
                    </div>
                    {user && (<ul>
                            <p className={"userdata__personaldata"}>Email</p>
                            <li><Input disabled={!edit}
                                       className={!edit ? "userdata__input--off" : "userdata__input--on"}
                                       onChange={changeEmail} value={email}/></li>
                            <a className={"userdata__greenline"}></a>
                            <p className={"userdata__personaldata"}>Имя</p>
                            <li><Input className={!edit ? "userdata__input--off" : "userdata__input--on"}
                                       onChange={changeFirstName}
                                       disabled={!edit} value={firstName}/></li>
                            <a className={"userdata__greenline"}></a>
                            <p className={"userdata__personaldata"}>Фамилия</p>
                            <li><Input className={!edit ? "userdata__input--off" : "userdata__input--on"}
                                       onChange={changeFamilyName}
                                       disabled={!edit} value={familyName}/></li>
                            <a className={"userdata__greenline"}></a>
                            <h2 className={"userdata__personaldata"}>Список ваших адресcов</h2>

                            {addresses.map((item) => <div className={"userdata__title"}><Button
                                className={"margin"}
                                type="danger"
                                shape="circle"
                                icon="close"
                                onClick={() => delAddress(item.id)}/><Button
                                className={"margin"} type="primary" shape="circle" icon="edit"
                                onClick={() => changeEditAddress(item.id, item.city, item.street, item.building, item.flat)}/>
                                <p className={"userdata__text"}><Input disabled={true}
                                                                       className={"userdata__input--editAdress"}
                                                                       value={" город " + item.city + " улица " + item.street + " дом " + item.building + " квартира " + item.flat}/>
                                </p>
                            </div>)}


                            < Button className="userdata__addbuttom" onClick={addAddressButtom}>
                                добавить адресс
                            </Button>
                        </ul>

                    )
                    }
                    {addresChangeListView &&
                    <ChangeAddresses id={addressId} city={city} building={building} flat={flat}
                                     street={street} stait={adressChangeState} setStait={setAdressChangeState}/>
                    }
                    {addresAddListView && <AddAddress condition={addressAddState} setCondition={setAddressAddState}/>}
                    < /div>
                    </>
                </div>


                )
                }

                export default withRouter(UserData)