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

function Main() {
    const {setIsAuthenticated, headerStatus, setHeaderStatus,setMainStatus} = useAuthentication()


    useEffect(() => {
                    setHeaderStatus(true)


        }, []
    )


    return (<div><img className={"organic-img-style"} src={organic}>

        </img>
            <div className={"div-for-main"}><h3 className={"green-main"}>Grown with love</h3><h1 className={"white-main"}>Мы выращиваем лучшие продукты</h1>
                <Link to={"/products"}> <Button  className={"greenbuttom-main"}
                        size={"large"}
                         htmlType="submit">Наши продукты</Button></Link></div>

        </div>
    )


}

export default Main