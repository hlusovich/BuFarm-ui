import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {signIn,AddressIn} from "../../API/API";
import {withRouter} from 'react-router-dom'
import FormItem from "antd/es/form/FormItem";
function Addresse({history}) {
    const [city,setCity] = useState("")
    const [buiding,setBuilding] = useState(""
    )
    const [flat,setFlat] = useState("")
    const changeCitu = (event)=>{
        setCity(event.target.valut)
    }
    const changeFlat = (event)=>{
        setFlat(event.target.value)
    }
    const changeBuilding=(event)=>{
        setBuilding(event.target.value)
    }



const handleSubmit=async event=>{
    event.prventDefault()
    const data = {city : city ,}
        try{
        notification.success("молодец")
            const result = await AddressIn (data)

        }
        catch(e){ throw new Error()}

}
return (<Row>
    <Col offset={9} span={6}>
        <Form>
            <Form.Item>
                <Input prefix={<Icon type="user" style = {{color: 'rgba(0,0,0,.25)'}}/>} placeholder = "city" name="city" onChange={changeCitu}/>




            </Form.Item>
            <Form.Item>
                <Input placeholder={"building"} onChange={changeBuilding}/>
            </Form.Item>
            <Form.Item>

            </Form.Item>
        </Form>


    </Col>
</Row>
)
}
export default withRouter(Addresse)