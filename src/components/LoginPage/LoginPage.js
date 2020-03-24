import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import header from '../../assets/images/header (3).png'
import logo from "../../assets/images/cover.png";
import {useAuthentication, headerStatus, setHeaderStatus} from "../../context/authentication";

function LoginPage({history}) {
    const [username, setUsername] = useState(null)
    const [login, setLogin] = useState(null)
    const {setIsAuthenticated, setHeaderStatus, setMainStatus} = useAuthentication()
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changeLogin = (event) => {
        setLogin(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            username: username,
            password: login,
        }
        try {
            const token = await signIn(data)
            localStorage.setItem('token', token.token);
            setIsAuthenticated(true);
            history.push('main/');
        } catch (e) {
            console.log(e.name + "signIn")
            notification.error({message: "Пользователь с данными логином и паролем не зарегестрирован"})
        }
    }
    useEffect(() => {
            setHeaderStatus(false)
        }, []
    )
    return (
        <div className={"login__container"}>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Col>
                        <Link to={"/main"}><img src={logo} className={"login__picture"}/></Link>
                        <h1 className={"login__text"}>Введите ваше имя и пароль</h1>
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите имя"
                            name="username"
                            onChange={changeUsername}
                            size={"large"}
                            className={"login__input"}
                        />
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Введите пароль"
                            name="username"
                            onChange={changeLogin}
                            size={"large"}
                            className={"login__input"}
                            type={"password"}
                        />
                        <Button className={"greenbuttom"} size={"large"} htmlType="submit">Войти</Button>
                        <Link to={"/users"}>
                            <div className={"noaccaunt__text"}>нет акаунта?</div>
                        </Link>
                    </Col>
                </Form>
            </Row>
        </div>
    )
}
export default withRouter(LoginPage)