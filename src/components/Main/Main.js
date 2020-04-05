import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "antd";
import organic from "../../assets/images/organic.png";
import {useAuthentication, headerStatus, setHeaderStatus} from "../../context/authentication";
import {Link} from "react-router-dom";

function Main() {
    const {setHeaderStatus, mainPageСondition} = useAuthentication()
    useEffect(() => {
            setHeaderStatus(true)
        }, []
    )
    return (<>
            <img className={"main__image"} src={organic}>
            </img>
            <div className={"main__container"}>
                <h3 className={"main__greentext"}>Grown with love</h3>
                <div className={"main__whitetext"}>Мы выращиваем лучшие продукты</div>
                <Link to={"/products"}> <Button className={"greenbuttom__main"} size={"large"} htmlType="submit">Наши
                    продукты</Button>
                </Link>
            </div>
        </>
    )
}
export default Main