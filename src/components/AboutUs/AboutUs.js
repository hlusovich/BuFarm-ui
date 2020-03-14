import React from "react";
import cows from '../../assets/images/farmer.jpg'
import {Col, Row} from "antd";
import header from "../../assets/images/header (3).png";
import StepBackwardOutlined from "@ant-design/icons-svg/es/asn/StepBackwardOutlined";
import ok from '../../assets/images/ok.svg'



function AboutUS() {

    return (
        <div className={"white"}>
            <img src={header} className={'headerimage'}/>
            <h1 className={"aboutUs-text"}>Почему вы должны выбрать </h1>
            <h1 className={'aboutUs-text2'}>BuFarm</h1>
            <Row>
                <Col span={6} offset={3}>
                    <img src={cows} className={"round-image"}/>

                </Col>
                <Col offset={6} span={7}>
                    <h1 className={"aboutUs-chose-text"}>100% Organic</h1>
                    <div className={"greenline-aboutUs"}></div>
                    <div> Мы целенаправленно минимизируется использования искусственных (синтетических) препаратов —
                        удобрений, пестицидов, стимуляторов роста, кормовых добавок и т.д. Насколько это возможно их
                        заменяют натуральными аналогами навозом, сидератами и т.д. Также для повышения урожайности более
                        активно используются севообороты и специальные методы обработки грунта.
                        Наши продукты питания более полезны и совершенно безопасны для здоровья человека, что не всегда можно сказать о продукции промышленного земледелия и животноводства.
                        органическое сельское хозяйство наносит минимальный вред окружающей среде.
                        <div>Наши продукты не содержат:</div>
                        <div><img className={"ok-img-style"} src={ok}/>синтетических удобрений и пестицидов</div>
                        <div><img className={"ok-img-style"}src={ok}/>генной инженерии;</div>
                        <div><img className={"ok-img-style"}src={ok}/>осадков сточных вод</div>
                        <div><img className={"ok-img-style"}src={ok}/>радионуклидов</div>
                        <div><img className={"ok-img-style"}src={ok}/>консервантов</div>
                    </div>
                </Col>
            </Row>
        </div>
    )

}

export default AboutUS