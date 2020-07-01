import React from "react";
import style from "./Error404.module.css"
const Error404=()=>{
    return (
        <>
            <div className={style.container}>
                <div>
                <img src="https://organik.thememove.com/wp-content/themes/tm-organik/assets/images/404.png" alt="Organik"/>
                <h3>Oops! This page is not available</h3>
                </div>
            </div>
            </>
    )
}
export  default Error404