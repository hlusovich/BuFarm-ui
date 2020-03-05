import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {AddressIn, signIn, getUser, getAddress, getProducts} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import { TrainingContext,useTrainig,Trainnn} from "../../context/context2";


function Training({history}) {
    const [name,setName] = useState();
    const{set}=useTrainig()
    const{toggleTheme}=useTrainig()
    const newFunction = async event =>{
        event.preventDefault()

        if (name.length< 5){


            notification.error({message:"суки"})

        }}


    const changeName =event=>{
        setName(event.target.value)
    }
return (
    <Form onSubmit={toggleTheme}>
        <Form.Item>
            <Input placeholder={"name"}  onChange={changeName}/>
        </Form.Item> <Form.Item>
            utb
        </Form.Item><Form.Item>
            <Button  htmlType={"reset"} ><input placeholder={"нами"}/>НАЖМи</Button>
        </Form.Item><Form.Item>

        {set}
        </Form.Item>

    </Form>
)
}

export default Training