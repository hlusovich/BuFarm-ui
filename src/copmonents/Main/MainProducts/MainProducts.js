import React from "react";
import style from "../Main.module.css";
import {NavLink} from "react-router-dom";
import food from "../../../images/food.jpg";
const MainProducts=()=>{
    return(
        <>
            <div className={style.sticker}>
                <h4>Grown with love</h4>
                <div>We Grow best products</div>
                <NavLink to={"/products"}>
                    <button>Our Products</button>
                </NavLink>
            </div>
            <img className={style.main}
                 src={food}
                 alt=""/>
            </>
    )
}
export default MainProducts