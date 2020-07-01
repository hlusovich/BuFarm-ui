import React, {useState} from "react";
import style from "./Header.module.css"
import MiniCartConteiner from "../Cart/MiniCart/MiniCartConteiner";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import BurgerMenu from "./BurgerMenu/BurgerMenu";


const Header = (props) => {
    const [showCart, setShowCart] = useState(false)
    return (
        <>
            <BurgerMenu showCart={showCart} setShowCart={setShowCart} {...props}/>
            <div className={style.header}>
                <div className={style.container}>
                    <HeaderLinks showCart={showCart} setShowCart={setShowCart} {...props} />
                </div>
            </div>
            <div className={style.back}></div>
            <MiniCartConteiner setShowCart={setShowCart} showCart={showCart}/>


        </>
    )
}


export default Header