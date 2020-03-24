import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";
import footer1 from "../../assets/images/milk.png";
import footer2 from "../../assets/images/meat3.png";
import footer3 from "../../assets/images/cheese.png";
import footer4 from "../../assets/images/egg.png";
import footer5 from "../../assets/images/cottage-cheese.png";
import farmer from "../../assets/images/cheese.png";
import logo from "../../assets/images/logo_dark.png";
import organic from "../../assets/images/organic.png";
import {useAuthentication, headerStatus, setHeaderStatus} from "../../context/authentication";
import {Link} from "react-router-dom";
import BlackCart from "../BlackCart/BlackCart";

function Main() {
    const {setHeaderStatus, mainPageСondition} = useAuthentication()
    console.log(window.location.pathname)
    console.log("Location")
    useEffect(() => {
            setHeaderStatus(true)
        }, []
    )
    return (<div>
            <img className={"main__image"} src={organic}>
            </img>
            <div className={"main__container"}>
                <h3 className={"main__greentext"}>Grown with love</h3>
                <div className={"main__whitetext"}>Мы выращиваем лучшие продукты</div>
                <Link to={"/products"}> <Button className={"greenbuttom__main"} size={"large"} htmlType="submit">Наши
                    продукты</Button>
                </Link>
            </div>
        </div>
    )

}

export default Main