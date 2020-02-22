import React from "react";
import {Col, Row} from "antd";
import logo from "../../assets/images/cover.png";
import footer from "../../assets/images/footer.jpg";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className={"footer"}>
            <div className={"footer-text"}>
                <Row>
                    <div className={"footerflex"}>
                        <Col span={6}><Link to={"./"}><img src={logo} className={"logoforfooter"}/></Link></Col>
                        <Col span={6}></Col>
                        <Col span={6}><p className={'footer-text-color'}>О нас</p>
                            <div className={"greenlinefooter"}></div>
                            <p className={'footer-text-color'}>  Еда, какой её видим мы. </p>

                        </Col>
                        <Col span={6} ><p className={'footer-text-color'}>Наши контакты</p>
                            <div className={"greenlinefooter"}></div>
                            <p className={'footer-text-color'}>наш номер *******</p>
                            <p className={'footer-text-color'}>наш email *******</p>
                        </Col>
                    </div>


                </Row>
            </div>

        </div>
    )

}

export default Footer