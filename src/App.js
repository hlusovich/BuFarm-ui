import React, {Suspense} from 'react';
import './App.css';
import ProductListContainer from "./copmonents/ProductList/ProductListConteiner";
import ProductInfoContainer from "./copmonents/ProductInfo/ProductInfoContainer";
import Error404 from "./copmonents/Error404/Error404";
import 'antd/dist/antd.css';
import MainConteiner from "./copmonents/Main/MainConteiner";
import Loading from "./copmonents/Loading/Loading";
import withAppHOC from "./HOC/withAppHOC";
import {Route,Switch} from "react-router-dom";
const AboutUs = React.lazy(() => import("./copmonents/AboutUs/AboutUs"))
const MyProfileConteiner = React.lazy(() => import("./copmonents/MyProfile/MyProfileConteiner"))
const AddressFormContainer = React.lazy(() => import ("./copmonents/AddressesForm/AddressFormContainer"))
const RegistrationFormConteiner = React.lazy(() => import("./copmonents/Registration/RegistrationFormConteiner"))
const LogInConteiner = React.lazy(() => import("./copmonents/Log in/LogInConteiner"))
const CartPageConteiner = React.lazy(() => import("./copmonents/Cart/CartPage/CartPageConteiner"))


function App() {
    return (<>
        <Switch>
            <Route exact path='/' render={() => <MainConteiner/>}/>
            <Route exact path='/products' render={() => <ProductListContainer/>}/>
            <Route path="/product/:id"> <ProductInfoContainer/> </Route>
            <Suspense fallback={<Loading/>}>
                <Route path={"/registration"} render={() => <RegistrationFormConteiner/>}/>
                <Route path={"/addresses"} render={() => <AddressFormContainer/>}/>
                <Route exact path={"/login"} render={() => <LogInConteiner/>}/>
                <Route exact path={'/aboutus'} render={() => <AboutUs/>}/>
                <Route exact path={"/cart"} render={() => <CartPageConteiner/>}/>
                <Route exact path={"/myprofile"} render={() => <MyProfileConteiner/>}/>
            </Suspense>
            <Route path="*" render={() => <Error404/>}/>
        </Switch>
        </>

    );
}

export default withAppHOC(App);
