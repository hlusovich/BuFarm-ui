import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn, UserIn} from "../../API/API";
import  {withRouter} from  "react-router-dom"
function Users({history}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [info, setInfo] = useState('')
    const [passwordAgain,setPassworAgain]=useState('')
    const changePassword = (event) => {
        setPassword(event.target.value)
    };
    const changeUsername = (event) => {
        setUsername(event.target.value)
    };const changeFirst_name = (event) => {
        setFirst_name(event.target.value)
    };const changeLast_name = (event) => {
        setLast_name(event.target.value)
    };const changeInfo = (event) => {
        setInfo(event.target.value)
    };
    const changePasswordAgain = (event)=>
        setPassworAgain(event.target.value)
    const handleSubmit = async event => {
        event.preventDefault();
        if(password===passwordAgain){

        if(password.length>5){
        if(validateEmail(username)){
        const data = {
            username: username,
            password: password,
            first_name: first_name,
            last_name:last_name,
            info:info
        }
        let res= null;
        try{
            res = await UserIn(data)

                localStorage['token'] = res.token;



            history.push('/addresses');
        } catch (e) {
            alert("пидор")

            console.log('mamku ebal error',  e)
        }}
        else {
            notification.error({
                    message: 'в поле  users  введите email оно валидированно'
                })
            }

        }
    else{
        notification.error({message:"пароль более 5 знаков чмо"})
        }}
    else{notification.error({message:"пароли не совпадают петушок"})}};



    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    return (
        <Row>
            <Col span={6} offset = {9}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>

                        <Input required={true}
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                             name="username"
                            onChange={changeUsername}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input required={true}
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={changePassword}
                               //minLength={5}
                        />
                    </Form.Item> <Form.Item>
                        <Input required={true}
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password again"
                            name="password"
                            onChange={changePasswordAgain}
                               //minLength={5}
                        />
                    </Form.Item><Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}

                            placeholder="First_name"
                            name="first_name"
                            onChange={changeFirst_name}
                        />
                    </Form.Item><Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}

                            placeholder="Last_name"
                            name="last_name"
                            onChange={changeLast_name}
                        />
                    </Form.Item><Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}

                            placeholder="Info"
                            name="info"
                            onChange={changeInfo}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}


export default withRouter(Users);