import React, {useEffect, useState} from 'react';
import logo from './assets/images/logo.svg';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import Users from "./components/Users/Users";
import MainPage from "./components/MainPage/MainPage";
import Addresses from "./components/Addresses/Addresses"
import Addresse from "./components/Addresses/add"
import UserData from "./components/UserData/UserData";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import {ThemeContext, ThemeProvider} from "./context/theme";
import {useAuthentication} from "./context/authentication";
import {CartProvider} from "./context/cart";
import PrivateRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import {Spin} from 'antd';
import Training from "./components/training/training";
import {Trainnn} from "./context/context2";
import {verifyToken} from "./API/API";
import BlackButton from "./components/BlackButton/BlackButton";

function App() {
    const {isAuthenticated, setIsAuthenticated} = useAuthentication();
    const [isCheckValidation, setIsCheckValidation] = useState(false)
    useEffect(() => {
            console.log('1')
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
                        console.log('e')
                        localStorage.removeItem('token')
                    }

                }
                setIsCheckValidation(true)
            }
            checkToken()
        }
    )

    if (isCheckValidation) {
        return (

            <CartProvider>
                <Router>
                    <div>
                        <Header text={'sdfsdf'}/>


                        <Switch>
                            <PrivateRoute path='/userdata' component={UserData}/>
                            <Route path="/addresses">
                                <Addresses/>
                            </Route>
                            <Route path="/products/:id">
                                <ProductDetails/>
                            </Route>
                            <Route path="/products">
                                <Products/>
                            </Route>
                            <Route path="/main-page">
                            <MainPage/>
                        </Route>
                            <Route path="/users">
                                <Users/>
                            </Route>
                            <Route path="/grabarloh">
                                <LoginPage/>
                            </Route>
                            <Route path="/nikita-loh">
                                <div>никита лох</div>
                            </Route>
                            <Route path="/nikita-molodec">
                                <div>никита молодец</div>
                            </Route>
                            <Route path="/nikita-sosal-konec">
                                <div>никита сосал конец</div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </CartProvider>
        );
    } else {
        return (
            <Spin className='center-absolute' size="large"></Spin>
        )
    }


}

export default App;
