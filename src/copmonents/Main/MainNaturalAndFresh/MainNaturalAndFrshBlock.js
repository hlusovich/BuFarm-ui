import React from "react";
import style from "../Main.module.css";
import logo from "../../../images/logo.png";
import chicken from "../../../images/chicken.png";

const MainNaturalAndFresh = () => {
    return (
        <div className={style.block}>
            <div >
                <h1 >Natural and Fresh</h1>
                <div className={style.logo}><img src={logo} alt=""/></div>

            </div>
            <div className={style.container}>
                <div>
                    <img src={chicken} alt={""}/></div>
                <div className={style.item}>
                    <h1>Enjoy cage-free poultry and eggs</h1>
                </div>
            </div>
        </div>
    )
}
export default MainNaturalAndFresh