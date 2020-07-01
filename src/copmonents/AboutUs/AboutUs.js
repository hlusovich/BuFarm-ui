import React from "react";
import style from "./AboutUs.module.css"
import Title from "../Title/Tittle";
import AboutUsSubtitle from "./AboutUsSubtitle/AboutUsSubtitle";
import food from "../../images/section-bg-04.png"
import food2 from "../../images/about2-section-01.jpg"

const AboutUs = () => {
    return (
        <>
            <Title text={"About Us"} url={"/aboutus"}
                   img={food} alf={""}/>
            <div className={style.container}>
                <AboutUsSubtitle/>
                <div className={style.text}> Our farm is a natural organic farm.We
                     dream to offer the best and healthiest range of organic foods available, promote
                    health in the community and bring a sense of discovery and adventure into food shopping.
                    Visit our site for a complete list of fresh, organic products we are offering.
                </div>
                <img src={food2} alt=""/>
            </div>
        </>

    )
}
export default AboutUs