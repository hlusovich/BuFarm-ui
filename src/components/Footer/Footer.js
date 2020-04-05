import React from "react";
import logo from "../../assets/images/cover.png";
import footer from "../../assets/images/footer.jpg";
function Footer() {
    return (
        <div className={"footer"}>
            <div className={"footer__blur"}></div>
            <div className={"footer__text"}>
                <div className={"footer__conteiner"}>
                    <img className={"footer__image"} src={logo}/>
                    <div className={"footer__item--conteiner"}>
                        <div className={"footer__item"}>О нас
                            <div className={"greenline__footer"}></div>
                            <div className={'footer__item line-height'}>
                                <div> Мы хотим, чтобы вы</div>
                                <div> ощутили еду такой,какой ее видим мы!</div>
                            </div>
                        </div>

                        <div className={"footer__item"}>Наши контакты
                            <div className={"greenlinefooter"}></div>
                            <p className={'footer__item'}>наш номер *******</p>
                            <p className={'footer__item'}>наш email *******</p></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer