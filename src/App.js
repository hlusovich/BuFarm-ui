import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React, {Suspense, useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import {useAuthentication, headerStatus, setHeaderStatus,} from "./context/authentication";
import {verifyToken} from "./API/API";
import {Spin} from 'antd';
import PrivateRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import {CartProvider} from "./context/cart";
import Users from "./components/Users/Users";
import Products from "./components/Products/Products";
import Spinner from "./components/Spinner/Spinner";
import ProductDetails from "./components/ProductDetails/ProductDetails";
const Addresses = React.lazy(() => import("./components/Adresses/Addresses"))
const Footer = React.lazy(() => import("./components/Footer/Footer"))
const Header = React.lazy(() => import("./components/Header/Header"))
const Main = React.lazy(() => import("./components/Main/Main"))
const UserData = React.lazy(() => import("./components/UserData/UserData"))
const  LoginPage  = React.lazy(() => import("./components/LoginPage/LoginPage"))

function App() {
    const {
        isAuthenticated, setIsAuthenticated, headerStatus,
        setHeaderStatus,setHost,host,mainStatus,setMainStatus
    } = useAuthentication();
    const [isCheckValidation, setIsCheckValidation] = useState(false);
    const [main,setMain] = useState(false)
    const localHost  =window.location.href

    console.log(window.location.pathname+"end")
    useEffect(() => {
            const checkToken = async () => {
                if (localStorage.getItem('token')) {
                    try {
                        let token = localStorage.getItem('token')
                        const data = {"token": token}
                        const res = await verifyToken(data);
                        if (res) {
                            setIsAuthenticated(true)
                        }
                    } catch (e) {
                    }
                }
                setIsCheckValidation(true)
            }
            checkToken()
        }
    )

    useEffect(() => {
        setHost(window.location.href)
                   const wievHeader = () => {
                if (window.location.pathname == "/loginpage") {
                    setHeaderStatus(false)
                } else {
                    setHeaderStatus(true)
                }

                    setMainStatus(true)


            }
            wievHeader()
        }, []
    )

    return (<Router>
        <CartProvider>

        <Suspense fallback={<div><Spinner/></div>}>
            {headerStatus && <Header/>}
            <Route path={"/main"}><Main/></Route>
            <Route path={"/loginpage"}>
                <LoginPage/>
            </Route>
            <Route path={"/addresses"}>
                    <Addresses/>
            </Route>
            <Route path={"/users"}>
                <Users/>
            </Route>
            <Route path={"/userdata"}>
                <UserData/>
            </Route>
            <Route path={"/products"}>
                <Products/>
            </Route>
            <Route path="/product/:id">
                <ProductDetails/>
            </Route>


            {headerStatus && <Footer/>}
        </Suspense>
        </CartProvider>
        </Router>
    )


}

export default App;
