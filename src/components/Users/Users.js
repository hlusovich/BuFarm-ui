import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn, UserIn} from "../../API/API";
import {Link, withRouter} from "react-router-dom"
import  {useAuthentication,headerStatus,setHeaderStatus} from "../../context/authentication";
import logo from "../../assets/images/cover.png";

function Users({history}) {
    const { isAuthenticated,setIsAuthenticated,headerStatus,setHeaderStatus}=useAuthentication()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [info, setInfo] = useState('')
    const [passwordAgain, setPassworAgain] = useState('')
    const [buttomStatus,setButtomStatus] = useState(true)
    const changePassword = (event) => {
        setPassword(event.target.value)
    };
    const changeUsername = (event) => {
        setUsername(event.target.value)
    };
    const changeFirst_name = (event) => {
        setFirst_name(event.target.value)
    };
    const changeLast_name = (event) => {
        setLast_name(event.target.value)
    };
    const changeInfo = (event) => {
        setInfo(event.target.value)
    };
    const changePasswordAgain = (event) =>
        setPassworAgain(event.target.value)
    const handleSubmit = async event => {
        event.preventDefault();
        if (password === passwordAgain) {
            if (password.length > 5) {
                if (validateEmail(username)) {
                    const data = {
                        email: username,
                        password: password,
                        first_name: first_name,
                        last_name: last_name,
                        info: info
                    }
                    let res = null;
                    try {
                        setButtomStatus(false)
                        res = await UserIn(data)
                        setIsAuthenticated(true);
                        const data2 = {
                            username: username,
                            password: password,}
                            notification.success({message:"поздравляем вы зарегестрированы"})
                            const token = await signIn(data2)
                        setButtomStatus(true)
                            localStorage.setItem('token', token.token);
                            history.push('/addresses');}
                     catch (e) {
                        console.log('UserIn', e)
                    }
                } else {
                    notification.error({
                        message: 'в поле  users  введите email оно валидированно'
                    })
                }
            } else {
                notification.error({message: "пароль должен быть более пяти знаков "})
            }
        } else {
            notification.error({message: "пароли не совпадают "})
        }
    };
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    useEffect(() => {
            const wievHeader = () => {
                if (window.location.href == "http://localhost:3000/loginpage" || window.location.href == "http://localhost:3000/addresses" || window.location.href == "http://localhost:3000/users") {
                    setHeaderStatus(false)
                }
                else {
                    setHeaderStatus(true)
                }

            }
            wievHeader()
        }
    )
    return (
        <div className={"login-style"}>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col>
                        <Link to={"/loginpage"}><img src={logo} className={"logoforlogin"} /></Link>
                        <h1 className={"zagolovok"}>Введите данные для регистрации</h1>
                        <div className={"greenline"}>
                        </div>
                        <Input required={true}
                               prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Введите email"
                               name="username"
                               onChange={changeUsername}
                               className={"login-input"}
                               size={"large"}
                        />
                        <Input required={true}
                               prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               type="password"
                               placeholder="Пароль"
                               name="password"
                               onChange={changePassword}
                               className={"login-input"}

                        />
                        <Input required={true}
                               prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               type="password"
                               placeholder="Повторите пароль"
                               name="password"
                               onChange={changePasswordAgain}
                               size={"large"}
                               className={"login-input"}
                        />
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            className={"login-input"}
                            placeholder="Имя"
                            name="first_name"
                            onChange={changeFirst_name}
                            size={"large"}
                        />

                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            size={"large"}
                            placeholder="Фамилия"
                            name="last_name"
                            onChange={changeLast_name}
                            className={"login-input"}
                        />

                        <Input
                            prefix={<Icon type="" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Информация(не обязательно)"
                            name="info"
                            onChange={changeInfo}
                            size={"large"}
                            className={"login-input"}
                        />
                        <Button disabled={!buttomStatus} type="primary" htmlType="submit" className={"greenbuttom"} size={"large"}>
                            Зарегестрироваться
                        </Button>
                        <Link to={"loginpage"}> <h3 className={"text-registracia"}>Уже есть аккаунт?</h3></Link>
                    </Col>
                </Form>
            </Row>
        </div>
    )
}

export default withRouter(Users)