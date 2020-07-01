import React from "react";
import {Provider} from "react-redux";
import {store} from "../BLL/store";
import HeaderContainer from "../copmonents/Header/HeaderContainer";
import {BrowserRouter} from "react-router-dom";
import Footer from "../copmonents/Footer/Footer";

const withAppHOC = (Component) => {
    const AppHOCcomponent = () => {
        return (
            <>
                <BrowserRouter>
                <Provider store={store}>
                    <HeaderContainer/>
                    <Component/>
                    <Footer/>
                </Provider>
            </BrowserRouter>
            </>
        )
    }
    return AppHOCcomponent

}
export default withAppHOC