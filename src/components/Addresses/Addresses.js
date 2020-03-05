import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn,AddressIn} from "../../API/API";
import {withRouter} from 'react-router-dom'

function  Addresses({history}) {
    const [city,setCity] = useState('')
    const [flat,setFlat] = useState('')
    const [building,setBuiding] = useState('')
    const [street,setStreet] = useState('')

    const changeCity = event=>{
        setCity(event.target.value)
    };
    const changeFlat = (event)=>{
        setFlat(event.target.value)
    };
    const changeBuilding = (event)=>{
        setBuiding(event.target.value)
    };
    const changeStreet = (event)=>{
        setStreet(event.target.value)
    };
    const handleSubmit = async event => {
        event.preventDefault();

            const data = {
                city: city,
                street: street,
                building:building,
                flat:flat,
            }

            let res = null;
            try {
                notification.success({message:"address append"})
                res = await AddressIn(data);
                history.push('/userdata');
            } catch (e) {
                alert("bffh")
                console.log('mamku ebal error', e)
            }

    };
    return(
        <Row>
            <Col offset={9} span={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>

                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="City"
                            name="City"
                            onChange={changeCity}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style = {{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Street"
                            name="Street"
                            onChange={changeStreet}/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style = {{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Flat"
                            name="Flat"
                            onChange={changeFlat}/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style = {{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Building"
                            name="Building"
                            onChange={changeBuilding}/>
                    </Form.Item>
                    <Form.Item>
                        <Button disabled={!city|| !street || !building} type="primary" htmlType="submit"
                                className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )

};

export default withRouter( Addresses);