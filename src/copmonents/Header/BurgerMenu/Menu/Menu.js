import React from "react";
import style from "../../Header.module.css";
import HeaderLinks from "../../HeaderLinks/HeaderLinks";

const Menu = (props) => {
    return (
        <><span className={style.burgerMenu}>
                        <HeaderLinks burgerMenu={true} {...props}/>
                    </span>
        </>
    )
}
export default Menu