import React from "react";
import style from "../../Main.module.css";
const MainPhotos=()=>{
    return(
        <>  <div className={style.photos}>
            <div>
                <img src="http://farm-agrico.ancorathemes.com/wp-content/uploads/2017/10/image-43.jpg" alt=""/>
                <img src="http://farm-agrico.ancorathemes.com/wp-content/uploads/2017/10/image-44.jpg" alt=""/>
            </div>
            <div className={style.information}>
                <h2>Have questions?</h2>
                <h2>We are here to help you!</h2>
                <h4>Call us 88005553535</h4>
            </div>
            <img
                src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkSFraPQ1ZPYLpU-FsTAHC26aKTM5SRkZCeTgDn6uOyic"
                alt=""/>
        </div>
            </>
    )
}
export default MainPhotos