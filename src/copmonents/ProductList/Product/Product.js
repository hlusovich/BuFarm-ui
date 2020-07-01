import React from "react";
import style from "./Product.module.css"
import {NavLink} from "react-router-dom";
const Product=(props)=>{
    return(<>
            <NavLink to={`/product/${props.id}`}>
            <div className={style.container}>
                <img src={props.image} alt=""/>
                <div>{props.name}</div>
                <div className={style.count}>{props.price} $</div>
            </div>
            </NavLink>
        </>
        
    )
}
export default Product