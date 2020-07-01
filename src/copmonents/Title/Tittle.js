import React from "react";
import style from "./Tittle.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Title = ({text, url,urlMedianum,textMedianum,img}) => {
    return (
        <>
            <div className={style.title}>
                <div className={style.titleText}>{text}</div>
                <img className={img&&style.products} src={img?img:"https://organik-4437.kxcdn.com/wp-content/themes/tm-organik/assets/images/big_title_bg_1.png"} alt=" "/></div>
            <div className={style.path}>
                <NavLink to={'/'}>Home</NavLink>
                <span>/ /</span>
                {urlMedianum&&<NavLink to={urlMedianum}>{textMedianum} / /</NavLink>}
                <NavLink className={style.currentPage} to={url}>{text}</NavLink>
            </div>
            <div className={style.line}>
            </div>
        </>
    )
}
Title.propTypes={
    text:PropTypes.string,
    textMedianum:PropTypes.string,
    url:PropTypes.string,
    urlMedianum:PropTypes.string,
    img:PropTypes.string
}

export default Title