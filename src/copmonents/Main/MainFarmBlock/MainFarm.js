import React from "react";
import style from "../Main.module.css";
const MainFarmBlock=()=>{
    return(
        <><div className={style.title}>BuFarm</div>
            <div className={style.title}>We make only natural products</div>
            <img className={style.main}
                 src="https://cdn.pixabay.com/photo/2016/11/08/12/20/wisconsin-1808156_1280.jpg" alt=""/>
            </>
    )
}
export default MainFarmBlock