import React from "react";
import style from "../Footer.module.css";

const FooterMedia = () => {
    return (
        <>
            <div className={style.item}>
                <div className={style.itemHeader}>Social Media</div>
                <p><img className={style.social}
                        src={"http://cdn.shopify.com/s/files/1/0243/3163/files/Icon_twitter-instagram_large.png?7084502420204959006"}
                        alt={"media"}/>
                </p></div>
        </>
    )
}
export default FooterMedia