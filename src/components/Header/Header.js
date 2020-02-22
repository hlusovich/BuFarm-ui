import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {Link} from "react-router-dom";
import logo from '../../assets/images/cover.png'
import header from '../../assets/images/header (3).png'
import {useAuthentication} from "../../context/authentication";



function Header({history}) {
    const { isAuthenticated,setIsAuthenticated}=useAuthentication()
    const logOut=()=>{
        localStorage.removeItem('token');
        setIsAuthenticated(localStorage.getItem("token"))
    }
    return(
        <div className={"header"}>
        <Row >
            <div className={"forheader"}>
                <Col span={3}><Link to={"./"}><img src={logo} className={"logo"} /></Link></Col>
                {isAuthenticated&&< Col  offset = {1}span={1}> <Link to={"/userdata"} className={"textcolor"}>Ваши контакты</Link></Col>}
                <Col offset={1} span={2}><Link to={'/userdata'} ><a className={"textcolor"}>Мой заказ</a></Link></Col>
            <Col offset={1}span={2}>Продукты</Col>
            <Col offset={1}span={2}>О нас</Col>
                {!isAuthenticated&&<Col offset={1}span={2} ><Link to={"/loginpage"}><a className={"textcolor"}>Log in</a></Link></Col>}
                {isAuthenticated&&<Col offset={1}span={2} ><Link to={"./"}><a onClick={logOut} className={"textcolor"}>Log out</a></Link></Col>}
                {!isAuthenticated&&<Col offset={1} ><Link to={"/users"}><a className={"textcolor"}>Регистрация</a></Link></Col>}
            </div>
            <img src={header} className={'headerimage'}/>

        </Row>
        </div>
    )

}
export default Header