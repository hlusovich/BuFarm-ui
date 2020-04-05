import React from "react";
import cows from '../../assets/images/farmer.jpg'
import {Col, Row} from "antd";
import header from "../../assets/images/header (3).png";
import ok from '../../assets/images/ok.svg'
function AboutUS() {
    return (
        <div className={"aboutUs__background"}>
            <img src={header} className={'header__image'}/>
            <h1 className={"aboutUs__text"}>Почему вы должны выбрать </h1>
            <h1 className={'aboutUs__text2'}>BuFarm ??</h1>
            <Row>
                <div className={"aboutUs__container"}>
                <Col md={6}  xs={18}>
                    <img src={cows} className={"aboutUS__image"}/>
                </Col>
                <Col md={7} xs={24}>
                    <h1 className={"aboutUs__item__text"}>100% Organic</h1>
                    <div className={"aboutUs__stories"}> Мы целенаправленно минимизируем использование искусственных (синтетических) препаратов —
                        удобрений, пестицидов, стимуляторов роста, кормовых добавок и т.д. Насколько это возможно их
                        заменяют натуральными аналогами навозом, сидератами и т.д. Также для повышения урожайности более
                        активно используются севообороты и специальные методы обработки грунта.
                        Наши продукты питания более полезны и совершенно безопасны для здоровья человека, что не всегда можно сказать о продукции промышленного земледелия и животноводства.
                        органическое сельское хозяйство наносит минимальный вред окружающей среде.
                        <div>Наши продукты не содержат:</div>
                        <div><img className={"aboutUs__ok"} src={ok}/>синтетических удобрений и пестицидов</div>
                        <div><img className={"aboutUs__ok"}src={ok}/>генной инженерии;</div>
                        <div><img className={"aboutUs__ok"}src={ok}/>осадков сточных вод</div>
                        <div><img className={"aboutUs__ok"}src={ok}/>радионуклидов</div>
                        <div><img className={"aboutUs__ok"}src={ok}/>консервантов</div>
                    </div>
                </Col>
                </div>
            </Row>
        </div>
    )
}
export default AboutUS