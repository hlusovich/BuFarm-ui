import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import footer1 from "../../assets/images/milk.png";
import footer2 from "../../assets/images/meat3.png";
import footer3 from "../../assets/images/cheese.png";
import footer4 from "../../assets/images/egg.png";
import footer5 from "../../assets/images/cottage-cheese.png";
import farmer from "../../assets/images/cheese.png";
import logo from "../../assets/images/logo_dark.png";
import {useAuthentication, headerStatus, setHeaderStatus} from "../../context/authentication";

function Main() {
    const {setIsAuthenticated, headerStatus, setHeaderStatus} = useAuthentication()


    useEffect(() => {
        const wievHeader = () => {
            if (window.location.href == "http://localhost:3000/loginpage" || window.location.href == "http://localhost:3000/addresses" || window.location.href == "http://localhost:3000/users") {
                setHeaderStatus(false)
            } else {
                setHeaderStatus(true)
            }

        }
        wievHeader()
    }, [])


    return (<div className={'main-conteiner'}><Row>
            <Col lg={{span: 5 ,offset:1}} md={{span: 22 }}>
                <div className={"textmain"}>
                    <img className={"mainpicturemeat"} src={footer2}/>
                    <div className={"black-line"}><strong>мясо</strong></div>
                    <div className={"main-footer"}></div>
                </div>
            </Col>
            <Col lg={{span: 5, offset: 1}} md={{span: 22}}>
                <div className={"textmain"}><img className={"mainpicturemeat"} src={footer5}/>
                    <div><span className={"black-line"}><strong>творог</strong></span></div>
                    <div className={"main-footer"}></div>
                </div>
            </Col>
            <Col lg={{span: 5,offset:1 }} md={{span: 22}}>
                <div className={"textmain"}><img className={"mainpicturemeat"} src={footer4}/>
                <div className={"black-line"}><strong>яйца</strong></div> <div className={"main-footer"}></div></div></Col>

            <Col lg={{span: 5, offset: 1}} md={{span: 22}}>
                <div className={"textmain"}><img className={"mainpicturemeat"} src={farmer}/>
                    <div className={"black-line"}><strong>сыр</strong></div> <div className={"main-footer"}></div></div></Col>


        </Row>
        </div>
    )


}

export default Main