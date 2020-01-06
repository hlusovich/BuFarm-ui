import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {useAuthentication} from "../../context/authentication";

function LoginPage({history}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuthenticated} = useAuthentication();
    const changePassword = (event) => {
        setPassword(event.target.value)
    };
    const changeUsername = (event) => {
        setUsername(event.target.value)
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (validateEmail(username)) {
            const data = {
                username: username,
                password: password,
            }

            let res = null;
            try {
                res = await signIn(data);
                localStorage.setItem('token', res.token);
                // fakeAuth.authenticate();
                setIsAuthenticated(true);
                console.log(localStorage.getItem('token'))
                history.push('/userdata');
            } catch (e) {
                console.log('mamku ebal error', e)
            }
        } else {
            notification.error({
                message: 'Notification Title'
            })
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }


    return (
        <Row>
            <Col span={6} offset={9}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>

                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                            name="username"
                            onChange={changeUsername}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={changePassword}
                            minLength={5}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={!username || !password} type="primary" htmlType="submit"
                                className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default withRouter(LoginPage);
