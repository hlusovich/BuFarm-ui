import React, {useState} from "react";
import style from "../Header.module.css"
import logo from "../../../images/logo.png";
import {NavLink, withRouter} from "react-router-dom";
import Menu from "./Menu/Menu";

const BurgerMenu = ({history,...props }) => {
    const [burger, setBurger] = useState(true)
    const setShowCart = () => {
        history.push("/cart")
    }

    return (
        <>
            <div className={style.mobileHeader}>
                <NavLink className={style.burgerLogo} to={"/"}><img className={style.burgerLogo} src={logo} alt={""}/></NavLink>
                {burger ? <div onClick={() => setBurger(value => !value)} className={style.burgerButton}></div> :
                    <div onClick={() => setBurger(value => !value)}
                         className={style.burgerButton + " " + style.transform}></div>}

            </div>
            {!burger && <Menu burgerMenu={true}  setShowCart={setShowCart}
                {...props}/>}
        </>
    )
}


export default withRouter(BurgerMenu)