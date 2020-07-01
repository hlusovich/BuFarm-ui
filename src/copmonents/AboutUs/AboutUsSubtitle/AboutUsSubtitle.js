import React from "react";
import style from "../AboutUs.module.css";
import sheep from "../../../images/sheep.jpg"

const AboutUsSubtitle = () => {
    return (<>
        <img className={style.sheep} src={sheep} alt={""}/>
        <div className={style.Title}>Organik Farm</div>
        <div className={style.subTitle}>A LITTLE STORY ABOUT US</div>
        <div className={style.line}></div>
    </>)
}
export default AboutUsSubtitle