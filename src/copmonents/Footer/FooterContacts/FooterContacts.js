import React from "react";
import style from "../Footer.module.css";
const FooterContacts=(props)=>{
    return(
        <>
            <div className={style.item}>
                <div className={style.itemHeader}>Contact Info</div>
                <p><img alt={""}
                    src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-4.png"/> Mogilev
                    Pushkina 18 228</p>
                <p><img alt={""} src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-5.png"
                        alt=""/>88005553535</p>
                <p><img alt={""}
                    src={"https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-6.png"}/>www.example.com
                </p>
                <p><img alt={""}
                    src={"https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-7.png"}/>Mon
                    – Thu: 10.00 am – 6.00 pm
                    Sat – Sun: 10.00 am – 5.00 pm</p>
            </div>
            </>
    )
}
export default FooterContacts